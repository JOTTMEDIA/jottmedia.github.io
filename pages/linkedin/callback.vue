<!-- pages/linkedin/callback.vue -->
<script setup>


const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const code = route.query.code
  const state = route.query.state

  if (!code) return

  const res = await fetch('/api/linkedin/token', {
    method: 'POST',
    body: {code}
  })
  console.log(code)
  console.log('Access token:', res.access_token)


  router.push('/')
})
</script>

<template>
  <p>Logowanie z LinkedIn...</p>
</template>