<script lang="ts" setup>

  interface Props {
    text: string;
    width: number;
    height: number;
    event?: () => void;
  }

  const props = defineProps<Props>();

</script>

<template>
  <button @click="event" class="button">{{ props.text }}</button>
</template>

<style scoped>
  .button {
    width: 350px;
    height: 52px;
    background-color: black;
    color: white;
    font-weight: 600;
    font-size: 15px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
  }
</style>