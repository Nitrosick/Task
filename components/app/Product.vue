<template>
  <div
    class="product"
    :class="{ 'product-sold': data.sold }"
  >
    <div class="product-image">
      <img
        :src="`/images/${data.id}.jpg`"
        alt="product"
        loading="lazy"
      >
    </div>
    <div class="product-info">
      <button @click.prevent="modalOpened = true">
        <h2 class="title">
          «{{ data.title }}»<br>
          {{ data.author }}
        </h2>
      </button>
      <div
        v-if="data.sold"
        class="sold"
      >
        <h3>Продана на аукционе</h3>
      </div>
      <div
        v-else
        class="product-footer"
      >
        <div class="price">
          <h6
            v-if="data.oldPrice"
            class="price-old"
          >
            {{ data.oldPrice }}$
          </h6>
          <h3 class="price-new">
            {{ data.newPrice }}$
          </h3>
        </div>
        <Button
          :checked="data.inCart && !loading"
          :disabled="loading"
          @click="purchase"
        >
          {{ state }}
        </Button>
      </div>
    </div>
    <Modal
      :data="data"
      :opened="modalOpened"
      @close="modalOpened = false"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },
  data: () => ({
    loading: false,
    modalOpened: false
  }),
  computed: {
    state () {
      if (this.loading) return '...'
      return this.data.inCart ? 'В корзине' : 'Купить'
    }
  },
  methods: {
    purchase () {
      this.loading = true
      setTimeout(() => {
        this.data.inCart = !this.data.inCart
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  border: 1px solid var(--color-grey);
  max-width: 25rem;

  &-image {
    display: flex;
    aspect-ratio: 7/4;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-info {
    padding: 1.5rem;
  }

  &-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.313rem;
  }
}

.product-sold {
  .product-image,
  .product-info,
  .product-footer {
    opacity: 0.5;
  }
}

.title {
  margin-bottom: 1.5rem;
}

.price {
  &-old {
    text-decoration: line-through;
    color: var(--color-dark-grey-2);
  }
}
</style>
