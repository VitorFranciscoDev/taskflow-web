<script lang="ts" setup>
import {RouterView} from 'vue-router';
import Header from "@/infrastructure/presentation/auth/components/Header.vue";
</script>

<template>
  <RouterView/>
</template>

<style>
  :root {
    --primary-color: black;
    --secondary-color: grey;
    --background-color: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }

  body, #app {
    height: 100%;
  }
</style>