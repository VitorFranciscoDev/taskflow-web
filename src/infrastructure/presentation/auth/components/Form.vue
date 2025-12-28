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
  background-color: #1E293B;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>