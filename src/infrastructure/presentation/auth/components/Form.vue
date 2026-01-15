<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'submit', event: Event): void
}>()
</script>

<template>
  <form class="form" @submit="emit('submit', $event)">
    <slot/>
  </form>
</template>

<style scoped>
.form {
  background-color: var(--background-color);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgb(150, 150, 158);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>