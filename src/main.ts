import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import VueGTag from "vue-gtag";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueGTag, {
  config: {
    id: "G-X7S41BYL1H",
  },
});

app.mount("#app");
