<template>
  <div class="layout content">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  max-width: $max-width;
  margin: 0 auto;
}

.main {
  flex-grow: 1;
}
</style>
