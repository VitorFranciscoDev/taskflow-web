<script setup>
import Button from '../components/Button.vue';
import TextField from '../components/TextField.vue';
import {ref} from 'vue';

const email = ref('');
const password = ref('');

const handleSubmit = (e) => {
  e.preventDefault();

}
</script>

<template>
  <div class="background">
    <form class="form" @submit="handleSubmit">
      <h1 class="title">Bem-vindo de volta</h1>

      <p class="subtitle">Entre na sua conta TaskFlow</p>

      <TextField
          v-model="email"
          label="Email"
          placeholder="your@email.com"
          type="email"
      />

      <TextField
          v-model="password"
          label="Password"
          placeholder="12345678"
          type="password"
      />

      <Button></Button>
    </form>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background-color: #020617;
}

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

.title {
  color: white;
}

.subtitle {
  color: white;
  margin: 15px 15px 30px 15px;
}
</style>