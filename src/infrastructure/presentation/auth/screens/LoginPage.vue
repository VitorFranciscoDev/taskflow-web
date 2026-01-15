<script lang="ts" setup>
  import Button from '../components/Button.vue';
  import TextField from '../components/TextField.vue';
  import { ref } from 'vue';
  import Form from "@/infrastructure/presentation/auth/components/Form.vue";
  import Header from '../components/Header.vue';
  import { useAuthStore } from '../auth_state';
  import { useRouter } from 'vue-router';

  const authStore = useAuthStore();
  const router = useRouter();

  const email = ref('');
  const password = ref('');

  async function handleSubmit() {
    await authStore.login(email, password);

    router.push('/login');
  }
</script>

<template>
  <div class="background">
    <Header/>
    <hr>

    <main class="background__main">
      <Form>
        <h1 class="background__main__form__title">Welcome back</h1>

        <p class="background__main__form__subtitle">Login with your Taskflow account</p>

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
    </main>
  </div>
</template>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
  }

  .background__main {
    display: flex;
    align-items: center;
    justify-content: center;
  } 

  .background__main__form__title {
    color: #0f172a;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }

  .background__main__form__subtitle {
    color: #64748b;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 32px;
  }
</style>