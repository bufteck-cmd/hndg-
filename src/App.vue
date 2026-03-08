<script setup lang="ts">
import PageNavBar from "./components/PageNavBar.vue";
import PageFooter from "./components/PageFooter.vue";
</script>

<template>
  <page-nav-bar />
  <router-view />

  <a href="tel:+998994425080" class="mv-emergency-fab" aria-label="Экстренный звонок в MyVet">
    📞 Экстренно
  </a>

  <page-footer />
</template>

<style scoped>
.mv-emergency-fab {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1040;
  display: none;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #dc2626, #ef4444);
  box-shadow: 0 10px 20px rgba(220, 38, 38, 0.35);
}

@media (max-width: 991px) {
  .mv-emergency-fab {
    display: inline-flex;
  }
}
</style>
