<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { RouteDefs } from '@/config/navigation'

  const router = useRouter();

  const navigateToLogin = () => router.push(RouteDefs.LoginPage.path);
  const navigateToSignUp = () => router.push(RouteDefs.SignUpPage.path);
  const navigateToLandingPage = () => router.push(RouteDefs.LandingPage.path);
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <h1 class="header__nav__logo" @click="navigateToLandingPage">TaskFlow</h1>

      <div class="header__nav__auth">
        <button class="header__nav__auth__signup" @click="navigateToSignUp">Sign Up</button>
        <button class="header__nav__auth__login" @click="navigateToLogin">Login</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    background-color: var(--background-color);
  }

  .header__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .header__nav__logo {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .header__nav__logo:hover {
    transform: scale(1.1);
  }

  .header__nav__auth {
    display: flex;
    gap: 20px;
  }

  .header__nav__auth__signup {
    background-color: var(--primary-color);
    color: var(--background-color);
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.1s ease;
  }

  .header__nav__auth__signup:hover {
    background-color: var(--secondary-color);
  }

  .header__nav__auth__login {
    background-color: transparent;
    padding: 1rem 2rem;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
  }
</style>