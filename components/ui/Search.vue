<template>
  <form
    class="search"
    @submit.prevent="$emit('filter', value)"
  >
    <input
      type="text"
      placeholder="Поиск по названию картины"
      class="search-input"
      v-model="value"
    >
    <input
      type="text"
      placeholder="Поиск..."
      class="search-input-short"
      v-model="value"
    >
    <Button
      type="submit"
      @click="$emit('filter', value)"
    >
      Найти
    </Button>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    value: null
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.search {
  display: flex;
  min-width: 26rem;

  @include bp-xs {
    min-width: inherit;
  }

  &-input {
    flex-grow: 1;

    @include bp-xs {
      display: none;
    }
  }

  &-input-short {
    display: none;

    @include bp-xs {
      display: block;
    }
  }
}
</style>
