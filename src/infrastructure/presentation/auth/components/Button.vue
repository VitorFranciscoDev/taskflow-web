<script lang="ts" setup>

interface Props {
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: ''
})

</script>

<template>
  <button class="button">{{ props.text }}</button>
</template>

<style scoped>
  .button {
    width: 300px;
    height: 52px;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    font-weight: 600;
    font-size: 15px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    letter-spacing: 0.3px;
    position: relative;
    overflow: hidden;
  }

  .button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .button:hover::before {
    left: 100%;
  }

  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(59, 130, 246, 0.4);
  }

  .button:active {
    transform: translateY(0);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);
  }
</style>