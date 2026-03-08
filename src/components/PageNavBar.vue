<script setup lang="ts">
import { reactive, ref } from "vue";
import { Collapse } from "bootstrap";

const navCollapse = ref<HTMLElement | null>(null);

const resources = reactive({
  MainMenuBar: [
    { path: "/", title: "Главная" },
    { path: "/login", title: "Вход" },
    { path: "/about", title: "О нас" },
  ],
});

function menuClicked() {
  if (!navCollapse.value) {
    return;
  }

  const collapse = Collapse.getOrCreateInstance(navCollapse.value);
  collapse.hide();
}
</script>

<template>
  <nav class="mv-navbar navbar navbar-expand-lg sticky-top">
    <div class="container">
      <router-link class="navbar-brand mv-brand" to="/">
        <span class="mv-brand-icon">🐾</span>
        <span class="mv-brand-text">MyVet<span class="mv-brand-accent">.Uz</span></span>
      </router-link>

      <div class="mv-nav-badge d-none d-md-flex">
        <span class="hero-badge">
          🕐 24/7 Круглосуточно
        </span>
      </div>

      <button
        class="navbar-toggler mv-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div ref="navCollapse" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="nav in resources.MainMenuBar"
            :key="nav.path"
          >
            <router-link
              class="nav-link mv-nav-link"
              :to="nav.path"
              active-class="active"
              @click="menuClicked"
            >{{ nav.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.mv-navbar {
  background: rgba(10, 22, 40, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(100, 181, 246, 0.1);
  padding: 0.6rem 0;
  transition: var(--mv-transition);
}

.mv-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none !important;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--mv-white) !important;
  transition: var(--mv-transition);
}

.mv-brand:hover {
  transform: scale(1.03);
}

.mv-brand-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 8px rgba(79, 195, 247, 0.4));
}

.mv-brand-accent {
  background: linear-gradient(135deg, var(--mv-blue-light), var(--mv-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mv-nav-badge {
  margin-left: 1rem;
}

.mv-nav-link {
  color: rgba(224, 232, 240, 0.8) !important;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem !important;
  border-radius: var(--mv-radius-sm);
  transition: var(--mv-transition);
  position: relative;
}

.mv-nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--mv-blue-bright), var(--mv-accent));
  transition: var(--mv-transition);
  transform: translateX(-50%);
  border-radius: 2px;
}

.mv-nav-link:hover,
.mv-nav-link.active {
  color: var(--mv-white) !important;
  background: rgba(33, 150, 243, 0.1);
}

.mv-nav-link:hover::after,
.mv-nav-link.active::after {
  width: 60%;
}

.mv-toggler {
  border-color: rgba(100, 181, 246, 0.3) !important;
  padding: 0.35rem 0.6rem;
}

.mv-toggler:focus {
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.25);
}
</style>
