<script setup>
import { skills } from '../data/portfolio.js'
</script>

<template>
  <section id="skills" class="content-section section-shell">
    <div class="section-heading">
      <p class="eyebrow"><span></span> SKILLS &amp; TOOLS</p>
      <h2>技術與能力</h2>
    </div>
    <div class="skill-grid">
      <article v-for="(skill, index) in skills" :key="skill.title" class="skill-card">
        <div class="skill-number">0{{ index + 1 }}</div>
        <p>{{ skill.category }}</p>
        <h3>{{ skill.title }}</h3>
        <p class="skill-description">{{ skill.description }}</p>
        <ul><li v-for="item in skill.items" :key="item">{{ item }}</li></ul>
      </article>
    </div>
  </section>
</template>
