<script lang="ts" setup>
import Header from '../components/Header.vue';

</script>

<template>
  <div class="background">
    <Header/>

    <main class="main">
      <h1 class="title">Project Management <span class="highlight">Made Simple</span></h1>

      <p class="subtitle">Organize your work, collaborate with your team, and boost productivity with our intuitive
        Kanban-style boards.</p>

      <div class="buttons">
        <button class="startnow">Start Now</button>
        <button class="seedemo">See Demo</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-color: #020617;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
  }

  .title {
    color: white;
    font-size: 72px;
    max-width: 900px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 30px;
  }

  .highlight {
    color: #2563EB;
  }

  .subtitle {
    color: rgb(222, 222, 222);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
    max-width: 600px;
  }

  .startnow {
    padding: 12px 28px;
    background-color: transparent;
    color: white;
    font-weight: 600;
    font-size: 15px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    margin-right: 20px;
  }

  .seedemo {
    padding: 12px 50px;
    background-color: white;
    color: #2563EB;
    font-weight: 600;
    font-size: 15px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
</style>