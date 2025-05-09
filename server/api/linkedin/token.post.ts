export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const code = body.code

    const clientId = '78on1bq9ulsy33'
    const clientSecret = 'WPL_AP1.6HWq9Qm72ufQant3.M0OMVg=='
    const redirectUri = 'http://localhost:3000/linkedin/callback'

    const tokenRes = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            client_id: clientId,
            client_secret: clientSecret
        })
    })

    const tokenData = await tokenRes.json()
    return tokenData
})