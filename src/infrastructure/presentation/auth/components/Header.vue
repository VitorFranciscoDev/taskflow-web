<script lang="ts" setup>
  import {useRouter} from 'vue-router';
  import {RouteDefs} from '@/config/navigation'

  const router = useRouter();

  const navigateToLogin = () => router.push(RouteDefs.LoginPage.path);
  const navigateToSignUp = () => router.push(RouteDefs.SignUpPage.path);
  const navigateToLandingPage = () => router.push(RouteDefs.LandingPage.path);
</script>

<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo" @click="navigateToLandingPage">TaskFlow</h1>

      <div class="landing-page-navigation">
        <button class="landing-page-navigation-button" @click="navigateToSignUp">Start</button>
        <button class="landing-page-navigation-button" @click="navigateToLogin">Recommendations</button>
        <button class="landing-page-navigation-button" @click="navigateToSignUp">Prices</button>
      </div>

      <div class="auth">
        <button class="signup" @click="navigateToSignUp">Sign Up</button>
        <button class="login" @click="navigateToLogin">Login</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    background-color: white;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
  }

  .logo {
    cursor: pointer;
  }

  .landing-page-navigation {
    display: flex;
    gap: 20px;
  }

  .landing-page-navigation-button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
  }

  .landing-page-navigation-button:hover {
    text-decoration: underline;
  }

  .auth {
    display: flex;
    gap: 20px;
  }

  .signup {
    background-color: black;
    color: white;
    width: 100px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }

  .signup:hover {
    text-decoration: underline;
  }

  .login {
    background-color: transparent;
    color: black;
    width: 100px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }

  .login:hover {
    text-decoration: underline;
  }
</style>