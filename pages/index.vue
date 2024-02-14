<script setup lang="ts">
const route = useRoute()

</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <NuxtLink to="/_special_">click me</NuxtLink>
  </div>
</template>
