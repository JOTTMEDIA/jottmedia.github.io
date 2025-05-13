export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const accessToken = config.googleApiToken;
    const locationId = 'locations/1234567890123456789';

    const url = `https://businessprofile.googleapis.com/v1/${locationId}/localPosts`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Google API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
});