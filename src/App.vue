<script lang="ts" setup>
import {RouterView} from 'vue-router';
import Header from "@/infrastructure/presentation/auth/components/Header.vue";
</script>

<template>
  <main>
    <Header/>
    <RouterView/>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}

html, body, #app {
  height: 100%;
}
</style>