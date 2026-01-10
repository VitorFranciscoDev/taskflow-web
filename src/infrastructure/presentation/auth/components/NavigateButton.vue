<script lang="ts" setup>
    interface Props {
        text: string;
        linkText: string;
        to?: string;
    }

    const props = defineProps<Props>();
</script>

<template>
  <div class="nav-text">
    <span class="text">{{ text }}</span>
    <router-link v-if="to" :to="to" class="link">{{ linkText }}</router-link>
    <a v-else href="#" class="link">{{ linkText }}</a>
  </div>
</template>

<style scoped>
    .nav-text {
    text-align: center;
    color: #94a3b8;
    font-size: 14px;
    margin-top: 24px;
    }

    .text {
    margin-right: 6px;
    }

    .link {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    }

    .link:hover {
    color: #60a5fa;
    text-decoration: underline;
    }
</style>