<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const isNotLoginPage = computed(() => route.path !== "/login");
const isNotRegister = computed(() => route.path !== "/register");
const isNotReissue = computed(() => route.path !== "/reissue");
</script>

<template>
  <Header v-if="isNotLoginPage && isNotRegister && isNotReissue" />
  <router-view />

  <Footer v-if="isNotLoginPage && isNotRegister && isNotReissue" />
</template>
