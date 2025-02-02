<template>
  <footer class="footer">
    <div class="content">
      <div class="menu">
        <Menu />
      </div>
      <div class="contacts">
        <a href="tel:+78125555555">
          <h5 class="contacts-item">
            <img src="/icons/phone.svg" alt="icon" class="icon">
            +7 (812) 555-55-55
          </h5>
        </a>
        <h5 class="contacts-item">
          <img src="/icons/nav.svg" alt="icon" class="icon">
          г. Санкт-Петербург, ул. Ефимова, 3
        </h5>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.footer {
  background-color: var(--color-grey);
  padding: 2.375rem 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include bp-l {
    justify-content: flex-end;
  }

  @include bp-xs {
    justify-content: flex-start;
  }
}

.contacts {
  display: flex;
  align-items: center;
  gap: 3.125rem;

  @include bp-xs {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.icon {
  width: 1rem;
}

.menu {
  @include bp-l {
    display: none;
  }
}
</style>
