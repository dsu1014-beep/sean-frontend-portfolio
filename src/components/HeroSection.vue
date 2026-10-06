<script setup>
const portraitUrl = `${import.meta.env.BASE_URL}images/portrait.jpg`
</script>

<template>
  <section id="top" class="hero section-shell">
    <div class="hero-copy">
      <h1>Hi，我是尚恩。<br><em>擅長邏輯思考、<br>可靠執行與溝通。</em></h1>
      <p class="hero-intro">我是一位正在前端領域持續實作的開發者，結合數學邏輯、專案執行與溝通經驗，專注於 Vue、JavaScript 與響應式介面。</p>
      <div class="hero-actions">
        <a class="primary-button" href="#projects">查看專案作品 <span>↓</span></a>
        <a class="text-link" href="mailto:Dsu1014@gmail.com">Dsu1014@gmail.com ↗</a>
      </div>
    </div>

    <div class="portrait-frame">
      <img :src="portraitUrl" alt="尚恩的個人形象圖">
      <div class="code-card" aria-hidden="true">
        <span>const developer = {</span>
        <strong>curious: true,</strong>
        <strong>reliable: true</strong>
        <span>}</span>
      </div>
    </div>
  </section>
</template>
