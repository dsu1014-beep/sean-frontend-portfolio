<script setup>
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import SkillGrid from './components/SkillGrid.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="site">
    <HeaderNav />

    <main>
      <HeroSection />
      <ProjectGrid />
      <SkillGrid />
      <ExperienceTimeline />
      <EducationSection />
      <ContactSection />
    </main>
  </div>
</template>
