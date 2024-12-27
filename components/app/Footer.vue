<template>
  <footer class="footer">
    <h5>Test Task, 2024</h5>
    <div class="contacts">
      518-363-2171<br>
      91 Park St. Fairhope, AL 36532
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey);
  padding: 2rem 3rem;

  @media (max-width: $xs) {
    padding: 1rem;
  }
}

.contacts {
  font-size: 0.875rem;
}
</style>
