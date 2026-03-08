<template>
  <div class="mv-landing">
    <section class="mv-hero">
      <div class="mv-hero-bg"></div>
      <div class="container position-relative">
        <div class="mv-hero-content text-center animate-fade-in">
          <div class="mb-3">
            <span class="hero-badge">🏥 Ветеринарная клиника</span>
          </div>
          <h1 class="mv-hero-title">
            MyVet<span class="text-gradient">.Uz</span>
          </h1>
          <p class="mv-hero-subtitle">
            Профессиональная ветеринарная помощь для ваших питомцев<br class="d-none d-md-block" />
            в Ташкенте — круглосуточно, 24/7
          </p>
          <div class="mv-hero-actions">
            <a href="tel:+998994425080" class="cta-button">
              📞 Позвонить сейчас: (99) 442 50 80
            </a>
            <a
              href="https://t.me/myvetuz"
              target="_blank"
              rel="noopener noreferrer"
              class="cta-button-outline"
            >
              ✈️ Telegram
            </a>
          </div>
          <p class="mv-response-time">Среднее время ответа в Telegram: ~5 минут</p>

          <div class="mv-proof-card animate-fade-in animate-fade-in-delay-1">
            <p class="mb-1"><strong>Отзывы владельцев:</strong> 4.9/5 по качеству заботы о питомцах</p>
            <small>Пациенты: коты, собаки, декоративные и экзотические животные</small>
          </div>
        </div>
      </div>
    </section>

    <section class="mv-section">
      <div class="container">
        <home-page-default />
      </div>
    </section>

    <section class="mv-section mv-section-alt">
      <div class="container">
        <h2 class="section-title">Наши пациенты</h2>
        <p class="section-subtitle">Счастливые питомцы, которым мы помогли 🐱🐶</p>
        <home-page-carousel />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HomePageCarousel from "@/components/HomePageCarousel.vue";
import HomePageDefault from "@/components/HomePageDefault.vue";
</script>

<style scoped>
.mv-landing {
  overflow: hidden;
}

.mv-hero {
  position: relative;
  padding: 5rem 0 4rem;
  min-height: 480px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.mv-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, var(--mv-navy-deep) 0%, var(--mv-navy) 30%, var(--mv-navy-light) 70%, var(--mv-blue) 100%);
  z-index: 0;
}

.mv-hero-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(33, 150, 243, 0.15) 0%, transparent 65%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.mv-hero-bg::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(79, 195, 247, 0.1) 0%, transparent 65%);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite reverse;
}

.mv-hero-content {
  position: relative;
  z-index: 1;
}

.mv-hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: var(--mv-white);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.mv-hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--mv-text-on-dark);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.mv-hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.mv-response-time {
  margin: 0.85rem 0 0;
  font-size: 0.95rem;
  color: var(--mv-blue-pale);
}

.mv-proof-card {
  max-width: 620px;
  margin: 1.1rem auto 0;
  padding: 0.85rem 1rem;
  border-radius: var(--mv-radius-md);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(100, 181, 246, 0.4);
  color: var(--mv-text-on-dark);
  backdrop-filter: blur(6px);
}

.mv-section {
  padding: 4rem 0;
}

.mv-section-alt {
  background: linear-gradient(180deg, var(--mv-off-white) 0%, rgba(33, 150, 243, 0.04) 100%);
}
</style>
