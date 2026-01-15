<script lang="ts" setup>

  interface Props {
    text: string;
    width: number;
    height: number;
    isBackgroundBlack: boolean;
  }

  defineProps<Props>();

  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<template>
  <button :style="{ width: width + 'rem', height: height + 'rem' }" @click="emit('click')" class="button" :class="{ black: isBackgroundBlack }">{{ text }}</button>
</template>

<style scoped>
  .button {
    background-color: transparent;
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1em;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: var(--secondary-color);
  }

  .black {
    background-color: var(--primary-color);
    color: var(--background-color);
  }
</style>