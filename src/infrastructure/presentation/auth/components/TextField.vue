<script lang="ts" setup>

interface Props {
  hasLabel?: boolean;
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

</script>

<template>
  <div class="text-field">
    <label v-if="hasLabel" class="label">{{ label }}</label>

    <fieldset class="fieldset">
      <input
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
  gap: 8px;
  margin-bottom: 20px;
}

.label {
  color: black;
  font-size: 14px;
  font-weight: 500;
  align-self: flex-start;
  letter-spacing: 0.3px;
}

.fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.input {
  background: white;
  color: black;
  width: 350px;
  height: 52px;
  padding: 0 16px;
  border-radius: 12px;
  border: 2px solid rgba(71, 85, 105, 0.4);
  font-size: 15px;
  outline: none;
  transition: all 0.3s ease;
}
</style>