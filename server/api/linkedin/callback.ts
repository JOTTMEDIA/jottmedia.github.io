export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const code = query.code;

    if (!code) return {error: 'Missing code from LinkedIn'};

    const res = await $fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        params: {
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'http://localhost:3000/api/linkedin/callback',
            client_id: '78on1bq9ulsy33',
            client_secret: 'WPL_AP1.6HWq9Qm72ufQant3.M0OMVg==',
        },
    });

    const accessToken = res.access_token;

    // Optional: Save token securely (e.g., session, DB, etc.)

    return {accessToken};
});