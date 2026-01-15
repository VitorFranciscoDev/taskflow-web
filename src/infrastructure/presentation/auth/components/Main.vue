<script setup lang="ts">
  import { ref } from 'vue';
  import TextField from './TextField.vue';
  import Button from './Button.vue';
import { useRouter } from 'vue-router';

  const router = useRouter();

  const email = ref('');

  function handleSubmit() {
    router.push("/signUp");
  }
</script>

<template>
    <main class="main">
      <h1 class="main__title">Project Management Made Simple</h1>

      <p class="main__subtitle">Organize your work, collaborate with your team, and boost productivity with our intuitive
        Kanban-style boards.</p>

      <div class="main__start">
        <TextField 
          v-model="email"
          :has-label="false"
          label="Email"
          placeholder="your@email.com"
          type="email"
        />
        <Button text="Start" />
      </div>
    </main>
</template>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 140px;
    gap: 30px;
  }

  .main__title {
    color: var(--primary-color);
    font-size: 4.5em;
    max-width: 900px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
  }

  .main__subtitle {
    color: var(--secondary-color);
    font-size: 1.25em;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    max-width: 600px;
  }

  .main__start {
    display: flex;
    gap: 15px;
  }

  .main__start__fieldset {
    border: none;
  }

  .main__start__fieldset__input {
    background-color: var(--background-color);
    color: var(--primary-color);
    width: 300px;
    height: 52px;
    padding: 0 16px;
    border-radius: 10px;
    border: 2px solid rgba(71, 85, 105, 0.4);
    font-size: 15px;
    outline: none;
    transition: all 0.3s ease;
  }

  .main__start__button {
    background-color: black;
    color: white;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
</style>