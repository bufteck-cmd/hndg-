<template>
  <div class="container py-4">
    <div class="mv-login-card">
      <h1 class="mb-3">Вход</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email адрес</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" class="form-text">
            Мы никогда не будем делиться вашими персональными данными с кем-либо.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div class="mb-3 form-check">
          <input v-model="rememberMe" type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Оставаться на сайте</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
      <p v-if="submitMessage" class="alert alert-info mt-3 mb-0">{{ submitMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const submitMessage = ref("");

function handleSubmit() {
  submitMessage.value =
    "Форма принята. Вход появится после подключения серверной авторизации.";

  password.value = "";
  rememberMe.value = false;
}
</script>

<style scoped>
.mv-login-card {
  max-width: 540px;
}
</style>
