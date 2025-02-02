<template>
  <button
    class="btn"
    :class="{ 'btn-checked': checked }"
    :type="type"
    :disabled="disabled"
    @click.prevent="$emit('click')"
  >
    <h4 class="btn-text">
      <slot />
    </h4>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: { type: String, default: 'button' },
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: var(--color-brown-4);
  padding: 0.875rem 1.75rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brown-2);
  }

  &:disabled {
    background-color: var(--color-brown-1);
    cursor: default;
  }

  &-text {
    color: var(--color-white);
  }
}

.btn-checked {
  background-color: var(--color-brown-3);
  padding: 0.875rem 0.5rem;

  .btn-text::before {
    content: '✓';
    margin-right: 0.25rem;
  }
}
</style>
