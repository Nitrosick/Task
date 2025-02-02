<template>
  <div class="layout">
    <Header @filter="val => filter = val" />
    <main class="content">
      <div class="page">
        <h1 class="title">Картины эпохи возрождения</h1>
        <div class="products">
          <Product
            v-for="p in filteredProducts"
            :key="p.id"
            :data="p"
          />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { products } from '@/const/products'

export default {
  data: () => ({
    filter: null,
    products: [...products]
  }),
  watch: {
    products: {
      deep: true,
      handler(val) { this.writeData(val) }
    }
  },
  created () {
    const storageData = localStorage.getItem('data')
    if (!storageData) return;
    this.products = JSON.parse(storageData) ?? []
  },
  computed: {
    filteredProducts () {
      if (!this.filter) return this.products
      return this.products.filter(item =>
        item.title.toLowerCase().includes(this.filter.toLowerCase()) ||
        item.author.toLowerCase().includes(this.filter.toLowerCase())
      )
    }
  },
  methods: {
    writeData (data) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  width: 100%;
}

.page {
  padding: 2.813rem 0;
}

.title {
  margin-bottom: 2.438rem;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16.75rem, 1fr));
  gap: 2rem;
}
</style>
