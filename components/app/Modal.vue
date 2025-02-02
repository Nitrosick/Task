<template>
  <div
    class="modal"
    :class="{ 'modal-opened': opened }"
  >
    <div
      v-if="data.images && data.images.length && selected"
      class="images"
    >
      <img
        :src="`/images/${selected}.jpg`"
        alt="product"
        loading="lazy"
        class="images-main"
        @click="$emit('close')"
      >
      <div class="images-slider">
        <button
          v-for="(image, i) in data.images"
          :key="i"
          class="slider-item"
          @click.prevent="selected = image"
        >
          <img
            :src="`/images/${image}.jpg`"
            alt="product"
            loading="lazy"
            class="images-main"
          >
        </button>
      </div>
    </div>
    <div class="info">
      <h2>«{{ data.title }}» {{ data.author }}</h2>
      <h3>{{ data.newPrice }}$</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
    opened: { type: Boolean, required: true }
  },
  data: () => ({
    selected: null
  }),
  created () {
    this.selected = this.data.images[0] ?? null
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.modal {
  display: none;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 75vw;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey);
  padding: 2rem;
  z-index: 1;
  transform: translate(-50%, -50%);

  @include bp-m {
    width: 100%;
    padding: 1rem;
  }
}

.modal-opened {
  display: flex;
}

.images {
  position: relative;
  display: flex;
  aspect-ratio: 2/1;
  max-height: 70vh;

  &-main {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-slider {
    position: absolute;
    left: 0;
    bottom: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    overflow-y: hidden;
    overflow-x: auto;
  }
}

.slider-item {
  height: 5rem;
  aspect-ratio: 2/1;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey);
  box-shadow: 0 2px 10px -5px black;
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
