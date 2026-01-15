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
  <button :class="{ black: isBackgroundBlack }" :style="{ width: width + 'rem', height: height + 'rem' }" class="button"
          @click="emit('click')">{{ text }}
  </button>
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
  background-color: #f3f3f3;
}

.black {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.black:hover {
  background-color: var(--secondary-color);
}
</style>