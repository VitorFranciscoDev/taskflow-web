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