<template>
  <div :class="`icon-container icon-${size}`">
    <img
      :src="`/images/icons/${name}.svg`"
      alt="icon"
      class="icon"
      loading="lazy"
    >
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: 'l' }
})
</script>

<style lang="scss" scoped>
.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
}

.icon-s { width: 0.5rem }
.icon-l { width: 1.5rem }

.icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
