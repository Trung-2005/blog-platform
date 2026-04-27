//
<script setup>
// import HelloWorld from "../components/HelloWorld.vue";
// import Header from "../components/header.vue";
// import Footer from "../components/footer.vue";
// import Contact from "../components/contact.vue";
// import Login from "../components/login.vue";
// // show contact
// import { ref } from "vue";
// const showhome = ref(true);
// const showContact = ref(false);

// const toggleContact = () => {
//   showContact.value = true;
//   showhome.value = false;
// };
// const toggleHome = () => {
//   showContact.value = false;
//   showhome.value = true;
// };
//
</script>

//
<template>
  // <Header @contact="toggleContact()" @home="toggleHome()" /> //
  <HelloWorld v-if="showhome" /> // <Contact v-if="showContact" /> //
  <Footer /> //
</template>
