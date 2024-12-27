<template>
  <div v-if="movies.length">
    <div class="movies">
      <Card
        v-for="item in movies"
        :key="item.id"
        :data="item"
      />
    </div>
    <button
      v-if="movies.length < data.items.length"
      class="show-more"
      @click.prevent="showMore"
    >
      Show more movies
    </button>
  </div>
  <div
    v-else
    class="empty"
  >
    There are no movies here
  </div>
</template>

<script setup>
// Fake data instead of $axios request
import data from '@/const/data.json'

const maxItems = 16

let from = ref(0)
let to = ref(from.value + maxItems)
const movies = ref([])

const getMovies = () => {
  if (!data || !data.items.length) return
  movies.value.push(...data.items.slice(from.value, to.value))
}

const showMore = () => {
  from.value += maxItems
  to.value += maxItems
  getMovies()
}

onMounted(() => getMovies())

// const { backendUrl } = useRuntimeConfig().public
// const { data } = await useFetch(`${backendUrl}data.json`)
</script>

<style lang="scss" scoped>
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19.125rem, 1fr));
  gap: 1rem;
  padding: 2rem 3rem;

  @media (max-width: $xs) {
    padding: 1rem;
  }
}

.empty {
  text-align: center;
  margin: 5rem 3rem;
}

.show-more {
  width: 100%;
  background-color: transparent;
  border: none;
  color: var(--color-white);
  font-size: var(--font-size-m);
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
