<template>
  <header class="header">
    <NuxtLink to="/">
      <h1>Test Task</h1>
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--color-grey);
  padding: 2rem 3rem;

  @media (max-width: $xs) {
    padding: 1rem;
  }
}
</style>
