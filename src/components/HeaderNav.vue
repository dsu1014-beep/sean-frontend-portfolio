<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const links = [
  { href: '#projects', label: '作品' },
  { href: '#skills', label: '技能' },
  { href: '#experience', label: '經歷' },
  { href: '#education', label: '學歷' },
  { href: '#contact', label: '聯絡我' },
]
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top">SEAN<span>.</span></a>
    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-label="開啟導覽選單"
      @click="isOpen = !isOpen"
    >
      <i></i><i></i><i></i>
    </button>
    <nav :class="['nav-links', { open: isOpen }]" aria-label="主要導覽">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="isOpen = false">{{ link.label }}</a>
    </nav>
  </header>
</template>
