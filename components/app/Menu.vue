<template>
  <div>
    <nav class="menu">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.id"
        :to="item.to"
      >
        <h5>{{ item.title }}</h5>
      </NuxtLink>
    </nav>
    <nav
      class="menu-fold"
      :class="{ 'menu-opened': opened }"
    >
      <NuxtLink
        v-for="item in menuItems"
        :key="item.id"
        :to="item.to"
      >
        <h5>{{ item.title }}</h5>
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    opened: { type: Boolean, default: false }
  },
  data: () => ({
    menuItems: [
      { id: 1, title: 'Каталог', to: '#' },
      { id: 2, title: 'Доставка', to: '#' },
      { id: 3, title: 'Оплата', to: '#' },
      { id: 4, title: 'Контакты', to: '#' },
      { id: 5, title: 'О компании', to: '#' }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.menu {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-left: 5rem;

  @include bp-l {
    display: none;
  }
}

.menu-fold {
  display: none;

  @include bp-l {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--color-white);
    border-right: 1px solid var(--color-grey);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    z-index: 2;
    padding: 2rem;
    padding-right: 4rem;
    transform: translateX(-100%);
    transition: transform 0.5s;
  }
}

.menu-opened {
  transform: translateX(0);
}
</style>
