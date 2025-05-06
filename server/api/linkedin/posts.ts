import {createError, defineEventHandler, getRequestHeader} from 'h3';

export default defineEventHandler(async (event) => {
    try {
        // Get access token from request headers
        const authHeader = getRequestHeader(event, 'authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw createError({
                statusCode: 401,
                message: 'Unauthorized: Missing or invalid token',
            });
        }

        const accessToken = authHeader.substring(7); // Remove 'Bearer ' prefix

        // First, get the user's LinkedIn profile to get their ID
        const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!profileResponse.ok) {
            throw createError({
                statusCode: profileResponse.status,
                message: `LinkedIn API error: ${profileResponse.statusText}`,
            });
        }

        const profileData = await profileResponse.json();
        const userId = profileData.id;

        // Now fetch the user's posts using the Marketing API
        // Note: This requires the Marketing Developer Platform access
        const postsResponse = await fetch(
            `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${userId})`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'X-Restli-Protocol-Version': '2.0.0',
                },
            });

        if (!postsResponse.ok) {
            throw createError({
                statusCode: postsResponse.status,
                message: `LinkedIn API error: ${postsResponse.statusText}`,
            });
        }

        const postsData = await postsResponse.json();

        // Transform the LinkedIn API response to our desired format
        const transformedPosts = await Promise.all(postsData.elements.map(async (post) => {
            // Get engagement statistics for the post
            const statsResponse = await fetch(
                `https://api.linkedin.com/v2/socialActions/${post.id}?viewerInfo=true`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

            const statsData = await statsResponse.json();

            return {
                id: post.id,
                content: post.specificContent?.['com.linkedin.ugc.ShareContent']?.text || '',
                image: post.specificContent?.['com.linkedin.ugc.ShareContent']?.media?.[0]?.url || null,
                createdAt: post.created.time,
                likes: statsData.likesSummary?.totalLikes || 0,
                comments: statsData.commentsSummary?.totalComments || 0,
                author: {
                    name: `${profileData.localizedFirstName} ${profileData.localizedLastName}`,
                    headline: profileData.localizedHeadline || '',
                    profileImage: profileData.profilePicture?.['displayImage~']?.elements?.[0]?.identifiers?.[0]?.identifier || '/placeholder.svg?height=100&width=100',
                }
            };
        }));

        return {
            posts: transformedPosts
        };
    } catch (error) {
        console.error('Posts fetch error:', error);
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to fetch LinkedIn posts',
        });
    }
});