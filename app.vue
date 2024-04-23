<template>
  <NuxtLayout :name="layout">
      <Header />
      <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
  const layout = 'globalLayout'
  const router = useRouter()
  router.push("/game")
</script>