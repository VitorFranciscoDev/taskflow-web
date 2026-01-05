<script lang="ts" setup>
import {RouterView} from 'vue-router';
import Header from "@/infrastructure/presentation/auth/components/Header.vue";
</script>

<template>
  <RouterView/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}

:root {
  --color-primary: #1e6fff;
  --color-primary-hover: #1557cc;
  --color-primary-active: #0f3f99;

  --color-bg-main: #f5f7fb;
  --color-bg-surface: #ffffff;
  --color-bg-header: #ffffff;
  --color-bg-hover: #eef3ff;

  --color-text-primary: #1f2937;
  --color-text-secondary: #4b5563;
  --color-text-tertiary: #6b7280;
  --color-text-inverse: #ffffff;
  --color-text-link: var(--color-primary);
  --color-text-link-hover: var(--color-primary-hover);

  --color-border: #e5e7eb;
  --color-border-strong: #d1d5db;

  --color-success: #16a34a;
  --color-warning: #f59e0b;
  --color-error: #dc2626;
  --color-info: #2563eb;

  --font-family-base: Arial, Helvetica, sans-serif;

  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-base: 1.5;

  --container-max-width: 1200px;
  --container-padding: 1rem;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.12);

  --transition-fast: 0.15s ease-in-out;
  --transition-base: 0.25s ease-in-out;
}

body, html, #app {
  background-color: var(--color-bg-main);
  color: var(--color-text-primary);
  font-family: var(--font-family-base);
  font-size: var(--font-size-md);
  line-height: var(--line-height-base);

  height: 100%;
}

a {
  color: var(--color-text-link);
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-text-link-hover);
}

header {
  background-color: var(--color-bg-header);
  box-shadow: var(--shadow-sm);
}

</style>