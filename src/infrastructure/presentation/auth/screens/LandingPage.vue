<script lang="ts" setup>
  import Header from '../components/Header.vue';
  import Main from '../components/Main.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="background">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
  }
</style>