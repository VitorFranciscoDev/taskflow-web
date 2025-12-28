<script lang="ts" setup>
import Button from '../components/Button.vue';
import TextField from '../components/TextField.vue';
import {ref} from 'vue';
import Form from "@/infrastructure/presentation/auth/components/Form.vue";

const email = ref('');
const password = ref('');

</script>

<template>
  <div class="background">
    <Form>
      <h1 class="title">Welcome back</h1>

      <p class="subtitle">Login with your Taskflow account</p>

      <TextField
          v-model="email"
          label="Email"
          placeholder="your@email.com"
          type="email"
      />

      <TextField
          v-model="password"
          label="Password"
          placeholder="mypassword"
          type="password"
      />

      <Button text="Login"/>
    </Form>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background-color: #020617;
}

.title {
  color: white;
}

.subtitle {
  color: white;
  margin: 15px 15px 30px 15px;
}
</style>