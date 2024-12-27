<template>
  <div
    v-if="movie"
    class="details"
  >
    <div class="details-block">
      <h2 class="title">Title of a movie</h2>
      <img
        :src="movie.poster"
        alt="movie poster"
        class="poster"
        loading="lazy"
      >
      <div class="tags">
        <Tag :text="movie.rating.toFixed(1)" :type="isFailed ? 'fail' : 'score'" icon="star" title="Rating" />
        <Tag :text="movie.genre" type="genre" icon="film" title="Genre" />
        <Tag :text="movie.duration" type="duration" icon="time" title="Duration" />
      </div>
    </div>
    <div class="details-block">
      <h2 class="title">Description</h2>
      <p
        class="description"
        v-html="movie.description"
      />
      <h2 class="title">Trivia</h2>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
      <h2 class="title">Actors</h2>
      <ul>
        <li>Adam J.</li>
        <li>Mark R.</li>
        <li>Richard F.</li>
        <li>Anna I.</li>
        <li>George J.</li>
      </ul>
    </div>
  </div>
  <div
    v-else
    class="empty"
  >
    Data loading error
  </div>
</template>

<script setup>
// Fake data instead of $axios request
import data from '@/const/data.json'

const route = useRoute()
const id = route.params.id
if (!id) navigateTo('/')

// const { backendUrl } = useRuntimeConfig().public
// const { data } = await useAsyncData(`${backendUrl}data.json`)

const movie = computed(() => {
  if (!data || !data.items.length) return null
  return data.items.find(i => +i.id === +id)
})

const isFailed = computed(() => movie.rating < 3)
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  gap: 3rem;
  padding: 2rem 3rem;

  &-block {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 21.25rem;
  }

  @media (max-width: $s) {
    flex-direction: column;
  }

  @media (max-width: $xs) {
    gap: 1rem;
    padding: 1rem;
  }
}

.title {
  font-size: var(--font-size-xxl);
}

.description {
  font-size: 0.875rem;
  font-weight: 500;
}

.poster {
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  max-width: 15rem;
}

.tags {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.empty {
  text-align: center;
  margin: 5rem 3rem;
}
</style>
