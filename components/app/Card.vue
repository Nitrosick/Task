<template>
  <NuxtLink
    :to="`/movie/${data.id}`"
    class="card"
  >
    <div class="poster">
      <img
        :src="data.poster"
        alt="movie poster"
        loading="lazy"
      >
    </div>
    <h2>{{ data.name }}</h2>
    <p
      class="description"
      v-html="data.description"
    />
    <div class="tags">
      <Tag :text="data.rating.toFixed(1)" :type="isFailed ? 'fail' : 'score'" icon="star" title="Rating" />
      <Tag :text="data.genre" type="genre" icon="film" title="Genre" />
      <Tag :text="data.duration" type="duration" icon="time" title="Duration" />
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true }
})

const isFailed = computed(() => props.data.rating < 3)
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 1.25rem;
  background-color: var(--color-grey);
  box-shadow: 0 0 0 0 var(--color-purple);
  transition: all 0.3s;

  &:focus {
    outline: 3px solid var(--color-purple);
  }

  &:hover {
    transform: translate(-0.5rem, -0.5rem);
    box-shadow: 0.5rem 0.5rem 0 0 var(--color-purple);
  }
}

.poster {
  border-radius: 0.5rem;
  overflow: hidden;
  aspect-ratio: 5/3;
  background-color: var(--color-black);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.description {
  font-size: 0.875rem;
  margin: 0;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
