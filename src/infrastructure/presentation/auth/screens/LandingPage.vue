<script lang="ts" setup>
  import { ref } from 'vue';
  import Header from '../components/Header.vue';
  import TextField from '../components/TextField.vue';

  const email = ref('');

</script>

<template>
  <div class="background">
    <Header/>

    <main class="main">
      <h1 class="title">Project Management Made Simple</h1>

      <p class="subtitle">Organize your work, collaborate with your team, and boost productivity with our intuitive
        Kanban-style boards.</p>

      <div class="start">
        <fieldset class="fieldset">
          <input name="email" type="email" class="input" placeholder="your@email.com">
        </fieldset>
        <button class="start-button">Start</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 130px;
  }

  .title {
    color: black;
    font-size: 72px;
    max-width: 900px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 30px;
  }

  .subtitle {
    color: rgb(62, 62, 62);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
    max-width: 600px;
  }

  .start {
    display: flex;
    gap: 15px;
  }

  .fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .input {
    background: white;
    color: black;
    width: 300px;
    height: 52px;
    padding: 0 16px;
    border-radius: 12px;
    border: 2px solid rgba(71, 85, 105, 0.4);
    font-size: 15px;
    outline: none;
    transition: all 0.3s ease;
  }

  .start-button {
    background-color: black;
    color: white;
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
</style>