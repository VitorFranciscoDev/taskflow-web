<script setup lang="ts">
import Header from '../components/Header.vue';


</script>

<template>
    <div class="background">
        <Header/>

        <main class="main">
            <h1 class="title">Project Management Made Simple</h1>

            <p class="subtitle">Organize your work, collaborate with your team, and boost productivity with our intuitive Kanban-style boards</p>
        </main>
    </div>
</template>

<style scoped>
    .background {
        width: 100%;
        height: 100%;
        background-color: #020617;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 180px;
    }

    .title {
        color: white;
        font-size: 60px;
        font-weight: 700;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 30px;
    }

    .subtitle {
        color: rgb(156, 156, 156);
        font-size: 20px;
        font-weight: 400;
        line-height: 1.6;
        text-align: center;
        margin-bottom: 30px;
        max-width: 600px;
    }
</style>