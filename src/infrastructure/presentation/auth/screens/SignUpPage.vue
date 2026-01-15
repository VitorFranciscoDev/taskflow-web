<script lang="ts" setup>
import Button from '../components/Button.vue';
import TextField from '../components/TextField.vue';
import {ref} from 'vue';
import Form from "@/infrastructure/presentation/auth/components/Form.vue";
import Header from '../components/Header.vue';
import {User} from '@/domain/entities/user';
import {useAuthStore} from '../auth_state';
import {useRouter} from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const password = ref('');
const email = router.options.history.state.email as string;
const name = ref('');

async function handleSubmit() {
  const newUser: User = {
    name: name.value,
    email: email,
    password: password.value,
  };

  await authStore.register(newUser);

  router.push('/login');
}
</script>

<template>
  <div class="background">
    <Header/>

    <Form @submit.prevent="handleSubmit">
      <h1 class="title">Create your account</h1>

      <p class="subtitle">Start to organize your projects</p>

      <TextField
          v-model="name"
          :has-label="true"
          label="Name"
          placeholder="Your Name"
          type="text"
      />

      <TextField
          v-model="email"
          :has-label="true"
          label="Email"
          placeholder="your@email.com"
          type="email"
      />

      <TextField
          v-model="password"
          :has-label="true"
          label="Password"
          placeholder="mypassword"
          type="password"
      />

      <Button :height="3" :isBackgroundBlack="true" :width="22" text="Sign Up"/>
    </Form>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  min-height: 100vh;
  background-color: white;
}

.title {
  color: #0f172a;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}

.subtitle {
  color: #64748b;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 32px;
}

.signup {
  text-align: center;
  font-size: 14px;
  color: #64748b;
  margin-top: 24px;
}

.link {
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  opacity: 0.7;
}
</style>