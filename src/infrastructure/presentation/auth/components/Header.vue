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
      <h1 class="logo" @click="navigateToLandingPage">Taskflow</h1>

      <div class="navigation">
        <button class="nav-button" @click="navigateToSignUp">Start</button>
        <button class="nav-button" @click="navigateToLogin">Recommendations</button>
        <button class="nav-button" @click="navigateToSignUp">Prices</button>
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
  background-color: #2563EB;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  color: white;
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.logo:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.navigation {
  display: flex;
  gap: 8px;
  flex: 1;
  justify-content: center;
  margin: 0 40px;
}

.nav-button {
  padding: 10px 24px;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.nav-button:active {
  transform: scale(0.98);
}

.auth {
  display: flex;
  gap: 12px;
  align-items: center;
}

.signup {
  padding: 10px 28px;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.signup:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
}

.signup:active {
  transform: translateY(0);
}

.login {
  padding: 10px 28px;
  background-color: white;
  color: #2563EB;
  font-weight: 600;
  font-size: 15px;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.login:hover {
  background-color: #f8fafc;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.login:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .nav {
    padding: 12px 20px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .navigation {
    order: 3;
    width: 100%;
    margin: 0;
    justify-content: space-around;
  }

  .nav-button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .logo {
    font-size: 24px;
  }

  .signup,
  .login {
    padding: 8px 20px;
    font-size: 14px;
  }
}
</style>