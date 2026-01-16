<script lang="ts" setup>
import { ref } from 'vue';
import TextField from './TextField.vue';
import Button from './Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const email = ref('');

function handleSubmit() {
  router.push({
    path: '/signUp',
    state: {
      name: name.value,
      email: email.value,
    }
  });
}
</script>

<template>
  <main class="main">
    <h1 class="main__title">Project Management Made Simple</h1>

    <p class="main__subtitle">Organize your work, collaborate with your team, and boost productivity with our intuitive
      Kanban-style boards.</p>

    <div class="main__start">
      <TextField
          v-model="name"
          :has-label="false"
          label=""
          placeholder="Name"
          type="text"
          :width="10"
          :height="3"
      />
      <TextField
          v-model="email"
          :has-label="false"
          label=""
          placeholder="your@email.com"
          type="email"
          :width="10"
          :height="3"
      />
      <Button :height="3" :isBackgroundBlack="true" :width="10" text="Start" @click="handleSubmit"/>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12rem;
  gap: 2rem;
  flex: 1;
}

.main__title {
  font-size: 4.5em;
  max-width: 60rem;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
  
  background: linear-gradient(
    90deg,
    #000000 0%,
    #4a4a4a 30%,
    #c0c0c0 50%,
    #4a4a4a 70%,
    #000000 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: gradient-slide 4s linear infinite;
}

@keyframes gradient-slide {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: -200% center;
  }
}

.main__subtitle {
  color: var(--secondary-color);
  font-size: 1.25em;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  max-width: 36rem;
}

.main__start {
  display: flex;
  gap: 1rem;
}
</style>