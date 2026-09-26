<script setup>
import { experience } from '../data/portfolio.js'
</script>

<template>
  <section id="experience" class="content-section section-shell">
    <div class="section-heading">
      <p class="eyebrow"><span></span> WORK EXPERIENCE</p>
      <h2>工作經歷</h2>
    </div>
    <div class="experience-list">
      <article v-for="job in experience" :key="job.role" class="experience-card">
        <div class="experience-meta"><span>{{ job.period }}</span><p>{{ job.company }}</p></div>
        <div class="experience-content">
          <h3>{{ job.role }}</h3>
          <p>{{ job.summary }}</p>
          <ul class="experience-highlights">
            <li v-for="item in job.achievements" :key="item.label">
              <strong>{{ item.metric }}</strong>
              <span>{{ item.label }}</span>
            </li>
          </ul>
          <details class="experience-details">
            <summary>了解更多 <span aria-hidden="true">＋</span></summary>
            <div class="experience-detail-list">
              <div v-for="item in job.details" :key="item.title" class="experience-detail-item">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </details>
        </div>
      </article>
    </div>
  </section>
</template>
