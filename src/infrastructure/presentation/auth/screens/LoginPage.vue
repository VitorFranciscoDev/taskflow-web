<script lang="ts" setup>
import Button from '../components/Button.vue';
import TextField from '../components/TextField.vue';
import {ref} from 'vue';
import Form from "@/infrastructure/presentation/auth/components/Form.vue";
import NavigateButton from '../components/NavigateButton.vue';

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

      <NavigateButton
        text="Doesnt have an account?"
        linkText="Sign up"
        to="/signUp"
      />
    </Form>
  </div>
</template>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-color: #1a1f35;
  }

  .title {
    color: #ffffff;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }

  .subtitle {
    color: #94a3b8;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 32px;
  }
</style>