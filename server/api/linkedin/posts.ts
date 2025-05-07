export default defineEventHandler(async (event) => {
    const token = 'YOUR_STORED_ACCESS_TOKEN'; // Replace with your method of storing/accessing it

    // You need your LinkedIn organization URN (e.g., urn:li:organization:123456)
    const organizationURN = 'urn:li:organization:YOUR_ORG_ID';

    const posts = await $fetch(`https://api.linkedin.com/v2/shares?q=owners&owners=${encodeURIComponent(organizationURN)}&sharesPerOwner=100`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return posts;
});
