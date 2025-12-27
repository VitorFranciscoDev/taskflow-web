<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const navigateToSignUp = () => {
        router.push('/signup');
    }

    const navigateToLogin = () => {
        router.push('/login');
    }
</script>

<template>
    <header class="header">
        <nav class="nav">
            <h1 class="logo">TaskFlow</h1>

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
        margin-right: 10px
    }

    .signup:hover {
        background-color: rgba(255, 255, 255, 0.615);
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