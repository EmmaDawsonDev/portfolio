import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });

app.mount("#app");
