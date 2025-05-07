import {createError, defineEventHandler, getRequestHeader} from 'h3';

export default defineEventHandler(async (event) => {
    const authHeader = getRequestHeader(event, 'authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return createError({
            statusCode: 401,
            message: 'Authorization missing'
        });
    }

    const accessToken = authHeader.substring(7);

    try {
        const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Restli-Protocol-Version': '2.0.0'
            }
        });

        if (!profileResponse.ok) {
            return createError({
                statusCode: profileResponse.status,
                message: 'Failed to fetch profile data'
            });
        }

        const profileData = await profileResponse.json();
        const userId = profileData.id;

        const postsResponse = await fetch(`https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${userId})`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Restli-Protocol-Version': '2.0.0'
            }
        });

        if (!postsResponse.ok) {
            return createError({
                statusCode: postsResponse.status,
                message: 'Failed to fetch posts'
            });
        }

        const postsData = await postsResponse.json();

        const postsWithSocialDetails = await Promise.all(
            postsData.elements.map(async (post) => {
                try {
                    const socialResponse = await fetch(`https://api.linkedin.com/v2/socialActions/${post.id}`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'X-Restli-Protocol-Version': '2.0.0'
                        }
                    });

                    if (socialResponse.ok) {
                        const socialData = await socialResponse.json();
                        post.socialDetail = socialData;
                    }
                } catch (error) {
                    console.error(`Failed to fetch social details for post ${post.id}:`, error);
                }

                return post;
            })
        );

        return {
            elements: postsWithSocialDetails
        };
    } catch (error) {
        console.error('Error fetching posts:', error);

        return createError({
            statusCode: 500,
            message: 'Failed to fetch posts'
        });
    }
});