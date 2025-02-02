<template>
  <header class="header">
    <div class="content">
      <button
        class="menu-button"
        @click.prevent="menuOpened = true"
      >
        <h5 id="menu-button">Меню</h5>
      </button>
      <Menu :opened="menuOpened" />
      <Search @filter="val => $emit('filter', val)" />
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    menuOpened: false
  }),
  mounted () {
    window.addEventListener('click', this.onClick)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.onClick)
  },
  methods: {
    onClick (e) {
      if (e.target.id !== 'menu-button') this.menuOpened = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.header {
  border-bottom: 1px solid var(--color-grey);
  padding: 1.5rem 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.menu-button {
  display: none;

  @include bp-l {
    display: inline-block;
  }
}
</style>
