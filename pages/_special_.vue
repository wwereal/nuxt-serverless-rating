<template>
  <div>
    <!-- <NuxtLayout name="test"> -->
      page1###
      <div>{{ pending ? '请稍等' : data }}</div>
    <!-- </NuxtLayout> -->
  </div>
</template>

<script lang="ts" setup>
// onMounted(async () => {
//   const res = await fetch('/api/hello');
//   console.log(res);
// })
definePageMeta({
  layout: 'test'
})
const { data, pending, error, refresh, execute } = await useAsyncData(
    'helloApiKey',
    () => $fetch('/hello'),
    {
      lazy: true,
      server: true,
    }
);
console.log('happy');
</script>

<style>

</style>