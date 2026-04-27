import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

//
import HelloWorld from "./components/HelloWorld.vue";
import Contact from "./components/contact.vue";
import Login from "./components/login.vue";
import Register from "./components/register.vue";
import Reissue from "./components/reissue.vue";
import About from "./components/about.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/contact", component: Contact },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/reissue", component: Reissue },
  { path: "/about", component: About }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
