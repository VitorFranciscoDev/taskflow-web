<script lang="ts" setup>
  interface Props {
    onSubmit?: (event: Event) => void;
  }

  const props = withDefaults(defineProps<Props>(), {
    onSubmit: (event: Event) => event.preventDefault(),
  })
</script>

<template>
  <form class="form" onsubmit="props.onSubmit">
    <slot/>
  </form>
</template>

<style scoped>
  .form {
    background-color: transparent;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding: 50px 24px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>