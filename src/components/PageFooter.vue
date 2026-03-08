<template>
  <footer class="mv-footer">
    <div class="mv-footer-accent"></div>
    <div class="container">
      <div class="row g-4 py-4">
        <div class="col-md-4">
          <h5 class="mv-footer-heading">📍 Контакты</h5>
          <p class="mv-footer-text">
            г. Ташкент<br />
            Яшнабадский р-н<br />
            улица Чигил, дом 32А
          </p>
          <a href="tel:+998994425080" class="mv-footer-phone">
            📞 (99) 442 50 80
          </a>
        </div>

        <div class="col-md-4">
          <h5 class="mv-footer-heading">🔗 Быстрые ссылки</h5>
          <ul class="mv-footer-links">
            <li>
              <router-link to="/" active-class="active" class="mv-footer-router-link">Главная</router-link>
            </li>
            <li>
              <router-link to="/about" active-class="active" class="mv-footer-router-link">О нас</router-link>
            </li>
            <li>
              <a href="https://yandex.uz/maps/-/CCUVnNx2dD" target="_blank" rel="noopener noreferrer">Мы на карте</a>
            </li>
          </ul>
        </div>

        <div class="col-md-4">
          <h5 class="mv-footer-heading">💬 Социальные сети</h5>
          <div class="mv-social-links">
            <a href="https://t.me/myvetuz" target="_blank" rel="noopener noreferrer" class="mv-social-link">
              ✈️ Telegram
            </a>
            <a href="https://www.instagram.com/p/B_SFawJJtfM/?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" class="mv-social-link">
              📷 Instagram
            </a>
          </div>
          <div class="mt-3">
            <h6 class="mv-footer-subheading">💳 Оплата</h6>
            <div class="mv-social-links">
              <a href="https://transfer.paycom.uz/632d940f0076c5b9e24df061" target="_blank" rel="noopener noreferrer" class="mv-social-link">
                Payme
              </a>
              <a href="https://indoor.click.uz/pay?id=050148&t=0" target="_blank" rel="noopener noreferrer" class="mv-social-link">
                Click
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mv-footer-bottom">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <span class="mv-footer-copyright">
              © {{ getFullYear() }} <strong>MyVet.Uz</strong> — Все права защищены.
            </span>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <span class="mv-footer-tagline">
              🐾 Забота о ваших питомцах
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
function getFullYear() {
  const date = new Date();
  return date.getFullYear();
}
</script>

<style scoped>
.mv-footer {
  background: var(--mv-navy-deep);
  color: var(--mv-text-on-dark);
  margin-top: auto;
  position: relative;
}

.mv-footer-accent {
  height: 3px;
  background: linear-gradient(90deg, var(--mv-blue), var(--mv-accent), var(--mv-blue-light));
}

.mv-footer-heading {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--mv-white);
  margin-bottom: 1rem;
}

.mv-footer-subheading {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--mv-blue-pale);
  margin-bottom: 0.5rem;
}

.mv-footer-text {
  color: var(--mv-text-on-dark);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.mv-footer-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--mv-accent) !important;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: var(--mv-transition);
}

.mv-footer-phone:hover {
  color: var(--mv-blue-pale) !important;
  transform: translateX(3px);
}

.mv-footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mv-footer-links li {
  margin-bottom: 0.5rem;
}

.mv-footer-links a,
.mv-footer-router-link {
  color: var(--mv-text-on-dark);
  text-decoration: none;
  font-size: 0.95rem;
  transition: var(--mv-transition);
  display: inline-block;
}

.mv-footer-links a:hover,
.mv-footer-router-link:hover {
  color: var(--mv-accent);
  transform: translateX(4px);
}

.mv-footer-router-link.active {
  color: var(--mv-accent);
  font-weight: 700;
}

.mv-social-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.mv-social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 1rem;
  background: rgba(33, 150, 243, 0.1);
  border: 1px solid rgba(100, 181, 246, 0.2);
  border-radius: var(--mv-radius-pill);
  color: var(--mv-blue-light) !important;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: var(--mv-transition);
}

.mv-social-link:hover {
  background: rgba(33, 150, 243, 0.2);
  border-color: var(--mv-blue-light);
  color: var(--mv-white) !important;
  transform: translateY(-2px);
}

.mv-footer-bottom {
  border-top: 1px solid rgba(100, 181, 246, 0.1);
  padding: 1.25rem 0;
}

.mv-footer-copyright {
  font-size: 0.88rem;
  color: rgba(224, 232, 240, 0.6);
}

.mv-footer-copyright strong {
  color: var(--mv-blue-light);
}

.mv-footer-tagline {
  font-size: 0.88rem;
  color: rgba(224, 232, 240, 0.4);
}
</style>
