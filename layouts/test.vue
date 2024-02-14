<template>
  <div class="test">
    test layout
    <div class="slot">
      <slot />
    </div>
    
  </div>
</template>

<script lang="ts" setup>
onMounted(async () => {
  // const res = await fetch('/api/hello');
  // if (res.ok) {
  //   const result = await res.text();
  //   console.log(result);
  // }
})
</script>

<style lang="scss" scoped>
.test {
  border: 1px solid #000;
  padding: 10px;
}
.slot {
  border: 1px solid #000;
}
</style>