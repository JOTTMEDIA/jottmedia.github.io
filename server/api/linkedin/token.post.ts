import {createError, defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {code} = body;

    if (!code) {
        return createError({
            statusCode: 400,
            message: 'Authorization code is required'
        });
    }

    const clientId = process.env.LINKEDIN_CLIENT_ID;
    const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
    const redirectUri = process.env.LINKEDIN_REDIRECT_URI;

    if (!clientId || !clientSecret || !redirectUri) {
        return createError({
            statusCode: 500,
            message: 'LinkedIn API credentials are not configured'
        });
    }

    try {
        const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri
            })
        });

        const tokenData = await tokenResponse.json();

        console.log('Token Response:', tokenResponse);
        console.log('Token Data:', tokenData);

        if (!tokenResponse.ok) {
            return createError({
                statusCode: tokenResponse.status,
                message: tokenData.error_description || 'Failed to exchange code for token'
            });
        }

        if (!tokenData.access_token) {
            return createError({
                statusCode: 500,
                message: 'Access token is missing in the response'
            });
        }

        await useStorage().setItem('linkedin_access_token', tokenData.access_token);

        return tokenData;
    } catch (error) {
        console.error('Error exchanging code for token:', error);

        return createError({
            statusCode: 500,
            message: 'Failed to exchange code for token'
        });
    }
});