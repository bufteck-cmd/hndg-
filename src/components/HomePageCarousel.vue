<template>
  <div class="mv-carousel-wrapper">
    <div class="mv-carousel-controls-top">
      <button
        type="button"
        class="btn btn-sm btn-outline-primary"
        @click="toggleAutoplay"
        :aria-pressed="(!isAutoplayEnabled).toString()"
      >
        {{ isAutoplayEnabled ? "Пауза автопрокрутки" : "Включить автопрокрутку" }}
      </button>
    </div>

    <div
      id="carouselExampleControls"
      ref="carouselElement"
      class="carousel slide mv-carousel"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div class="carousel-indicators mv-indicators">
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Слайд 1"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Слайд 2"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Слайд 3"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Слайд 4"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" aria-label="Слайд 5"></button>
      </div>
      <div class="carousel-inner mv-carousel-inner">
        <div class="carousel-item active">
          <img src="/photos/vka-1_240x320.png" class="d-block w-100" alt="Кошка после лечения в клинике MyVet" />
        </div>
        <div class="carousel-item">
          <img src="/photos/animals/vkk-2_240x320.png" class="d-block w-100" alt="Рыжий кот на контрольном осмотре" />
        </div>
        <div class="carousel-item">
          <img src="/photos/animals/vkd-1_240x320.png" class="d-block w-100" alt="Собака после процедуры в стационаре" />
        </div>
        <div class="carousel-item">
          <img src="/photos/animals/vkd-2_240x320.png" class="d-block w-100" alt="Щенок на приеме у ветеринара" />
        </div>
        <div class="carousel-item">
          <img src="/photos/animals/vkd-3_240x320.png" class="d-block w-100" alt="Пациент клиники на повторном визите" />
        </div>
      </div>
      <button
        class="carousel-control-prev mv-carousel-control"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="mv-control-icon">‹</span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next mv-carousel-control"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="mv-control-icon">›</span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Carousel } from "bootstrap";

const carouselElement = ref<HTMLElement | null>(null);
const carouselInstance = ref<Carousel | null>(null);
const isAutoplayEnabled = ref(true);

onMounted(() => {
  if (!carouselElement.value) {
    return;
  }

  carouselInstance.value = Carousel.getOrCreateInstance(carouselElement.value, {
    interval: 4000,
    ride: "carousel",
    pause: "hover",
  });
});

function toggleAutoplay() {
  if (!carouselInstance.value) {
    return;
  }

  if (isAutoplayEnabled.value) {
    carouselInstance.value.pause();
    isAutoplayEnabled.value = false;
  } else {
    carouselInstance.value.cycle();
    isAutoplayEnabled.value = true;
  }
}
</script>

<style scoped>
.mv-carousel-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.mv-carousel-controls-top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.6rem;
}

.mv-carousel {
  border-radius: var(--mv-radius-lg);
  overflow: hidden;
  box-shadow: var(--mv-shadow-lg);
  border: 1px solid rgba(100, 181, 246, 0.12);
}

.mv-carousel-inner img {
  object-fit: cover;
  max-height: 500px;
}

.mv-carousel-control {
  width: 48px;
  height: 48px;
  top: 50%;
  transform: translateY(-50%);
  bottom: auto;
  background: rgba(10, 22, 40, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  opacity: 0.85;
  transition: var(--mv-transition);
  margin: 0 0.75rem;
}

.mv-carousel-control:hover {
  opacity: 1;
  background: rgba(33, 150, 243, 0.7);
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.3);
}

.mv-control-icon {
  font-size: 1.6rem;
  color: var(--mv-white);
  font-weight: 300;
  line-height: 1;
}

.mv-indicators {
  margin-bottom: 0.75rem;
}

.mv-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  margin: 0 4px;
  transition: var(--mv-transition);
}

.mv-indicators button.active {
  background: var(--mv-blue-bright);
  width: 28px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
}
</style>
