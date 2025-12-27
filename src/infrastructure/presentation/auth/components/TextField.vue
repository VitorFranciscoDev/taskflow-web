<script lang="ts" setup>
import {computed} from 'vue';

interface Props {
  modelValue: string;
  label: string;
  type: string;
  placeholder: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});
</script>

<template>
  <div class="text-field">
    <label class="label">{{ label }}</label>

    <fieldset class="fieldset">
      <input
          v-model="value"
          :placeholder="placeholder"
          :type="type"
          class="input"
      >
    </fieldset>
  </div>
</template>

<style scoped>
.text-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.label {
  color: white;
  align-self: flex-start;
}

.fieldset {
  border: none;
  margin-bottom: 20px;
}

.input {
  background-color: #334155;
  color: white;
  width: 300px;
  height: 50px;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid black;
}
</style>