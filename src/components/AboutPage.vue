<script setup lang="ts">
const licenseImageUrl = "/photos/license.png";
</script>
<template>
  <div class="mv-about">
    <div class="container">
      <h1 class="section-title mt-4 animate-fade-in">О нас</h1>
      <p class="section-subtitle animate-fade-in">Ветеринарная клиника MyVet.Uz — забота, опыт, преданность 🐾</p>

      <div class="row g-4 mb-4">
        <div class="col-12 animate-fade-in animate-fade-in-delay-1">
          <div class="gradient-card mv-about-card mv-contact-card">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
              <h5 class="mv-about-card-title mb-0">📍 Наши контакты</h5>
              <span class="mv-open-pill">Открыто сейчас: 24/7</span>
            </div>
            <p class="mv-about-card-text mt-3">
              <strong>Наш адрес:</strong><br />
              г. Ташкент<br />
              Яшнабадский р-н<br />
              улица Чигил, дом 32А
            </p>
            <div class="mv-priority-actions">
              <a href="tel:+998994425080" class="cta-button mt-2">
                📞 Телефон: (99) 442 50 80
              </a>
              <a href="https://yandex.uz/maps/-/CCUVnNx2dD" target="_blank" rel="noopener noreferrer" class="mv-link-pill mt-2">
                🗺️ Яндекс Карты
              </a>
            </div>
            <div class="mv-about-links mt-3">
              <a href="https://t.me/myvetuz" target="_blank" rel="noopener noreferrer" class="mv-link-pill">
                ✈️ Telegram
              </a>
              <a href="https://www.instagram.com/p/B_SFawJJtfM/?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" class="mv-link-pill">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 animate-fade-in animate-fade-in-delay-2">
          <div class="row g-4">
            <div class="col-12">
              <div class="gradient-card mv-about-card">
                <h5 class="mv-about-card-title">💬 Мы в социальных сетях</h5>
                <div class="mv-about-links">
                  <a href="https://t.me/myvetuz" target="_blank" rel="noopener noreferrer" class="mv-link-pill">
                    ✈️ Telegram
                  </a>
                  <a href="https://www.instagram.com/p/B_SFawJJtfM/?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" class="mv-link-pill">
                    📷 Instagram
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="gradient-card mv-about-card">
                <h5 class="mv-about-card-title">💳 Возможность оплаты</h5>
                <div class="mv-about-links">
                  <a href="https://transfer.paycom.uz/632d940f0076c5b9e24df061" target="_blank" rel="noopener noreferrer" class="mv-link-pill">
                    Payme
                  </a>
                  <a href="https://indoor.click.uz/pay?id=050148&t=0" target="_blank" rel="noopener noreferrer" class="mv-link-pill">
                    Click
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 animate-fade-in animate-fade-in-delay-3">
          <div class="gradient-card mv-about-card">
            <h5 class="mv-about-card-title">📜 Лицензия</h5>
            <a target="_blank" rel="noopener noreferrer" :href="licenseImageUrl" class="mv-license-link">
              <img :src="licenseImageUrl" class="mv-license-img" alt="Лицензия MyVet" />
            </a>
          </div>
        </div>

        <div class="col-lg-6 animate-fade-in animate-fade-in-delay-4">
          <div class="gradient-card mv-about-card">
            <h5 class="mv-about-card-title">🐾 О нас</h5>
            <div class="mv-about-logo-wrap">
              <img src="/Logo-Small.png" class="mv-about-logo" alt="MyVet Logo" />
            </div>
            <p class="mv-about-card-text mt-3">
              Мы посвятили этот сайт нашему Семену, который был любимым членом
              нашей семьи, и чью безвременную потерю мы так и не приняли до
              конца...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mv-about {
  padding-bottom: 3rem;
}

.mv-about-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mv-contact-card {
  min-height: 100%;
}

.mv-about-card-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--mv-white);
  margin-bottom: 1rem;
}

.mv-open-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.45);
  color: #d1fae5;
  font-size: 0.86rem;
  font-weight: 600;
}

.mv-priority-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
}

.mv-about-card-text {
  color: var(--mv-text-on-dark);
  line-height: 1.7;
  font-size: 0.98rem;
}

.mv-about-card-text strong {
  color: var(--mv-blue-pale);
}

.mv-about-links {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.mv-link-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem 1rem;
  background: rgba(100, 181, 246, 0.12);
  border: 1px solid rgba(100, 181, 246, 0.2);
  border-radius: var(--mv-radius-pill);
  color: var(--mv-accent) !important;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: var(--mv-transition);
}

.mv-link-pill:hover {
  background: rgba(100, 181, 246, 0.22);
  border-color: var(--mv-blue-light);
  color: var(--mv-white) !important;
  transform: translateY(-2px);
}

.mv-license-img {
  width: 100%;
  max-width: 300px;
  border-radius: var(--mv-radius-md);
  box-shadow: var(--mv-shadow-md);
  transition: var(--mv-transition);
}

.mv-license-link:hover .mv-license-img {
  transform: scale(1.02);
  box-shadow: var(--mv-shadow-lg);
}

.mv-about-logo-wrap {
  text-align: center;
}

.mv-about-logo {
  width: 100%;
  max-width: 200px;
  border-radius: var(--mv-radius-md);
  box-shadow: var(--mv-shadow-md);
}
</style>
