<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
  import { RouteDefs } from '@/config/navigation'
  import Button from "@/infrastructure/presentation/auth/components/Button.vue";

  const router = useRouter();
  const route = useRoute();

  const navigateToSignIn = () => router.push(RouteDefs.LoginPage.path);
  const navigateToSignUp = () => router.push(RouteDefs.SignUpPage.path);
  const navigateToLandingPage = () => router.push(RouteDefs.LandingPage.path);
</script>

<template>
  <div>
    <header class="header">
      <nav class="header__nav">
        <h1 class="header__nav__logo" @click="navigateToLandingPage">TaskFlow</h1>

        <div class="header__nav__auth">
          <Button v-if="route.path === RouteDefs.LandingPage.path || route.path === RouteDefs.LoginPage.path" text="Sign Up" :width="6" :height="3" :isBackgroundBlack="true" @click="navigateToSignUp"/>
          <Button v-if="route.path === RouteDefs.LandingPage.path || route.path === RouteDefs.SignUpPage.path" text="Sign In" :width="6" :height="3" :is-background-black="false" @click="navigateToSignIn"/>
        </div>
      </nav>
    </header>
    <hr>
  </div>
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
    gap: 2rem;
  }
  </style>