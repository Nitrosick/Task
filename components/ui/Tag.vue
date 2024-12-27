<template>
  <div :class="`tag tag-${type}`">
    <Icon
      v-if="icon"
      :name="icon"
      size="s"
    />
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  type: { type: String, required: true },
  icon: { type: String, default: null }
})
</script>

<style lang="scss" scoped>
.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  height: 1.1rem;
  padding: 0 0.5rem;
  font-size: 0.7rem;
  border-radius: 100rem;
  text-transform: capitalize;
}

.tag-score { background-color: var(--color-green) }
.tag-genre { background-color: var(--color-blue) }
.tag-duration { background-color: var(--color-purple) }
.tag-fail { background-color: var(--color-red) }
</style>
