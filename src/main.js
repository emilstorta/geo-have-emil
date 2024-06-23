import "./assets/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.mount("#app");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
