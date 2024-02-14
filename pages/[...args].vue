<template>
  <div class="flex justify-center items-center h-full">
    <div class="flex flex-col justify-center items-center gap-2">
      <v-rating
        hover
        :length="5"
        :size="32"
        v-model="score"
        active-color="purple"
      />
      <span class="text-xl">{{ score }}</span>
      {{ pending ? '请稍候' : scoreData }}
    </div>
  </div>
</template>

<script lang="ts" setup>

const score = ref(0);
const route = useRoute();
const path = route.path.slice(1);
const { data: scoreData, pending } = await useFetch(`/rank?path=${path}`, {
  server: false
});
</script>

<style>

</style>