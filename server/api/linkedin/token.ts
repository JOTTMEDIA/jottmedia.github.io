import {createError, defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const {code} = body;

        // LinkedIn OAuth configuration
        const clientId = process.env.LINKEDIN_CLIENT_ID;
        const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
        const redirectUri = process.env.PUBLIC_APP_URL || 'http://localhost:3000';

        // Exchange code for token
        const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('LinkedIn token error:', errorData);
            throw createError({
                statusCode: response.status,
                message: `LinkedIn API error: ${response.statusText}`,
            });
        }

        const tokenData = await response.json();

        return {
            access_token: tokenData.access_token,
            expires_in: tokenData.expires_in
        };
    } catch (error) {
        console.error('Token exchange error:', error);
        throw createError({
            statusCode: 500,
            message: error.message || 'Failed to exchange code for token',
        });
    }
});