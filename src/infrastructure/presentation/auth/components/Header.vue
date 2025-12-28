<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {RouteDefs} from '@/config/navigation'

const navigateToLogin = () => router.push(RouteDefs.LoginPage.path);
const navigateToSignUp = () => router.push(RouteDefs.SignUpPage.path);
const navigateToLandingPage = () => router.push(RouteDefs.LandingPage.path);

const router = useRouter();
</script>

<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo" @click="navigateToLandingPage">
        Taskflow
      </h1>

      <div class="auth">
        <button class="signup" @click="navigateToSignUp">Sign Up</button>
        <button class="login" @click="navigateToLogin">Login</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #2563EB;
}

.nav {
  display: flex;
  align-items: center;
  padding: 20px;
}

.logo {
  color: white;
  cursor: pointer;
}

.auth {
  margin-left: auto;
}


.signup {
  border: none;
  width: 130px;
  height: 40px;
  background-color: transparent;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.signup:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.login {
  border: none;
  width: 130px;
  height: 40px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
}
</style>