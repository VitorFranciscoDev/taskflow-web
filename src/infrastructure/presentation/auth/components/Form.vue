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
    background-color: rgba(15, 23, 42, 0.8);;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    border: 2px solid rgba(71, 85, 105, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>