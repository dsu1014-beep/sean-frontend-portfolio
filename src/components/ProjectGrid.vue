<script setup>
import { ref } from 'vue'
import { projects } from '../data/portfolio.js'

const activeImageIndexes = ref({})
const swipeStartPositions = {}

function activeImage(project) {
  const index = activeImageIndexes.value[project.id] ?? 0
  return project.images[index]
}

function selectImage(project, index) {
  activeImageIndexes.value = { ...activeImageIndexes.value, [project.id]: index }
}

function previousImage(project) {
  const current = activeImageIndexes.value[project.id] ?? 0
  selectImage(project, (current - 1 + project.images.length) % project.images.length)
}

function nextImage(project) {
  const current = activeImageIndexes.value[project.id] ?? 0
  selectImage(project, (current + 1) % project.images.length)
}

function startSwipe(project, event) {
  swipeStartPositions[project.id] = event.changedTouches[0].clientX
}

function endSwipe(project, event) {
  const startX = swipeStartPositions[project.id]
  if (startX === undefined) return
  const distance = event.changedTouches[0].clientX - startX
  delete swipeStartPositions[project.id]
  if (Math.abs(distance) < 45) return
  distance < 0 ? nextImage(project) : previousImage(project)
}
</script>

<template>
  <section id="projects" class="content-section section-shell">
    <div class="section-heading">
      <p class="eyebrow"><span></span> SELECTED PROJECT</p>
      <h2>專案作品</h2>
    </div>

    <div class="project-grid">
      <article v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-media">
          <div
            class="project-cover"
            @touchstart.passive="startSwipe(project, $event)"
            @touchend.passive="endSwipe(project, $event)"
          >
            <img :src="activeImage(project).src" :alt="activeImage(project).alt">
            <div class="project-cover-overlay"></div>
            <button
              class="gallery-arrow gallery-arrow-left"
              type="button"
              aria-label="查看上一張作品圖片"
              @click="previousImage(project)"
            >
              ‹
            </button>
            <button
              class="gallery-arrow gallery-arrow-right"
              type="button"
              aria-label="查看下一張作品圖片"
              @click="nextImage(project)"
            >
              ›
            </button>
            <div class="gallery-dots" aria-label="作品圖片頁數">
              <button
                v-for="(_, index) in project.images"
                :key="index"
                type="button"
                :class="{ active: (activeImageIndexes[project.id] ?? 0) === index }"
                :aria-label="`前往第 ${index + 1} 張圖片`"
                @click="selectImage(project, index)"
              ></button>
            </div>
          </div>
        </div>
        <div class="project-body">
          <div class="project-topline">
            <span class="project-featured">FEATURED PROJECT</span>
            <div class="project-kicker"><span :class="project.status"></span>{{ project.statusLabel }}</div>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-metrics">
            <div v-for="metric in project.metrics" :key="metric.value" class="project-metric">
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </div>
          </div>
          <div class="tech-list"><span v-for="tech in project.technologies" :key="tech">{{ tech }}</span></div>
          <div class="project-actions">
            <a v-if="project.url" class="project-link" :href="project.url" target="_blank" rel="noopener noreferrer">
              立即遊玩 <span>↗</span>
            </a>
            <a v-if="project.sourceUrl" class="project-link" :href="project.sourceUrl" target="_blank" rel="noopener noreferrer">
              GitHub 原始碼 <span>↗</span>
            </a>
          </div>
        </div>
        <details open class="project-details">
          <summary>
            <span class="details-label-open">收起資訊</span>
            <span class="details-label-closed">查看開發重點</span>
          </summary>
          <div class="project-details-content">
            <div>
              <span class="detail-heading">設計挑戰與解法</span>
              <p>{{ project.challenge }}</p>
            </div>
            <div>
              <span class="detail-heading">核心開發成果</span>
              <ul class="project-highlights">
                <li v-for="item in project.highlights" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </details>
      </article>
    </div>
  </section>
</template>
