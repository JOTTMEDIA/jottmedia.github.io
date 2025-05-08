<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Posts from LinkedIn</h1>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">Connect with LinkedIn</h2>
      <div v-if="!isAuthenticated">
        <button
            class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            @click="initiateOAuth"
        >
          Connect with LinkedIn
        </button>
        <p class="mt-2 text-sm text-gray-600">
          You need to authenticate through LinkedIn to view posts.
        </p>
      </div>
      <div v-else class="flex items-center">
        <span class="inline-flex items-center mr-2 text-green-600">
          <Icon class="w-5 h-5 mr-1" name="lucide:check-circle"/>
          Connected with LinkedIn
        </span>
        <button
            class="text-sm text-red-600 hover:underline"
            @click="logout"
        >
          Disconnect
        </button>
      </div>
    </div>

    <div v-if="isAuthenticated" class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold">Posts</h2>
        <button
            class="text-primary hover:underline flex items-center"
            @click="fetchPosts"
        >
          <Icon class="w-4 h-4 mr-1" name="lucide:refresh-cw"/>
          Refresh
        </button>
      </div>

      <div v-if="posts.length > 0">
        <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg shadow-md p-6 mb-4">
          <div class="flex items-start mb-4">
            <img
                :src="post.author.profileImage || '/placeholder.svg?height=50&width=50'"
                alt="Profile"
                class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 class="font-semibold">{{ post.author.name }}</h3>
              <p class="text-sm text-gray-500">{{ formatDate(post.createdAt) }}</p>
            </div>
          </div>

          <div class="mb-4">
            <p class="whitespace-pre-line">{{ post.text }}</p>
          </div>

          <div v-if="post.imageUrl" class="mb-4">
            <img
                :src="post.imageUrl"
                alt="Post image"
                class="w-full rounded-lg"
            />
          </div>

          <div class="flex items-center text-gray-500 text-sm">
            <div class="flex items-center mr-4">
              <Icon class="w-4 h-4 mr-1" name="lucide:thumbs-up"/>
              <span>{{ post.likeCount }}</span>
            </div>
            <div class="flex items-center mr-4">
              <Icon class="w-4 h-4 mr-1" name="lucide:message-square"/>
              <span>{{ post.commentCount }}</span>
            </div>
            <div class="flex items-center">
              <Icon class="w-4 h-4 mr-1" name="lucide:repeat"/>
              <span>{{ post.shareCount }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="isLoading" class="flex justify-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>

      <div v-else class="text-center py-8 bg-white rounded-lg shadow-md">
        <Icon class="w-12 h-12 mx-auto text-gray-400" name="lucide:inbox"/>
        <p class="mt-2 text-gray-600">No posts found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';

const isAuthenticated = ref(false);
const accessToken = ref('');
const posts = ref([]);
const isLoading = ref(false);

const linkedInClientId = computed(() => {
  return process.env.LINKEDIN_CLIENT_ID || '';
});

const linkedInRedirectUri = computed(() => {
  return process.env.LINKEDIN_REDIRECT_URI || '';
});

onMounted(() => {
  const token = localStorage.getItem('linkedin_access_token');
  if (token) {
    accessToken.value = token;
    isAuthenticated.value = true;
    fetchPosts();
  }

  console.log(token)
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  if (code) {
    exchangeCodeForToken(code);
  }
});

const initiateOAuth = () => {
  const clientId = '78on1bq9ulsy33';
  const redirectUri = 'http://localhost:3000';
  const scope = encodeURIComponent('r_liteprofile r_emailaddress w_member_social r_organization_social');
  const state = generateRandomString(16);
  localStorage.setItem('linkedin_oauth_state', state);

  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  window.location.href = authUrl;
};

const exchangeCodeForToken = async (code) => {
  try {
    isLoading.value = true;

    console.log('Sending code to server:', code);

    const response = await fetch('/api/linkedin/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code}),
    });

    console.log('Server response:', response);

    const data = await response.json();

    if (data.access_token) {
      accessToken.value = data.access_token;
      localStorage.setItem('linkedin_access_token', data.access_token);
      isAuthenticated.value = true;
      fetchPosts();

      // Entferne den Code aus der URL
      const url = new URL(window.location.href);
      url.searchParams.delete('code');
      url.searchParams.delete('state');
      window.history.replaceState({}, document.title, url.toString());
    } else {
      console.error('Error in response data:', data);
    }
  } catch (error) {
    console.error('Error exchanging code for token:', error);
  } finally {
    isLoading.value = false;
  }
};
const logout = () => {
  accessToken.value = '';
  isAuthenticated.value = false;
  posts.value = [];
  localStorage.removeItem('linkedin_access_token');
};

const fetchPosts = async () => {
  if (!accessToken.value) return;

  try {
    isLoading.value = true;

    const response = await fetch('/api/linkedin/posts', {
      headers: {
        'Authorization': `Bearer ${accessToken.value}`
      }
    });

    const data = await response.json();

    if (data.elements) {
      posts.value = data.elements.map(post => ({
        id: post.id,
        text: post.text?.text || '',
        createdAt: post.created?.time || Date.now(),
        author: {
          name: post.author?.firstName + ' ' + post.author?.lastName || 'LinkedIn User',
          profileImage: post.author?.profilePicture?.displayImage || null
        },
        imageUrl: post.content?.contentEntities?.[0]?.thumbnails?.[0]?.url || null,
        likeCount: post.socialDetail?.totalSocialActivityCounts?.numLikes || 0,
        commentCount: post.socialDetail?.totalSocialActivityCounts?.numComments || 0,
        shareCount: post.socialDetail?.totalSocialActivityCounts?.numShares || 0
      }));
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    isLoading.value = false;
  }
};
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>