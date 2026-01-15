<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  modelValue: string;
  hasLabel: boolean;
  label: string;
  type: string;
  placeholder: string;
  width: number;
  height: number;
}

defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="text-field">
    <label v-if="hasLabel" class="label">{{ label }}</label>

    <fieldset class="fieldset">
      <input
          :v-model="modelValue"
          :placeholder="placeholder"
          :type="type"
          class="input"
          :style="{ width: width + 'rem', height: height + 'rem' }"
      >
    </fieldset>
  </div>
</template>

<style scoped>
.text-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.label {
  color: var(--primary-color);
  font-size: 0.9em;
  font-weight: 500;
  align-self: flex-start;
  letter-spacing: 0.3px;
}

.fieldset {
  border: none;
}

.input {
  background: var(--background-color);
  color: var(--primary-color);
  padding: 0 1rem;
  border-radius: 10px;
  border: 2px solid var(--secondary-color);
  font-size: 1em;
  transition: all 0.3s ease;
}

.input:focus {
  border: 2.5px solid var(--primary-color);
}
</style>