<template>
  <div class="bg-blue-500 relative">
    <div
      class="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3"
    >
      <!-- Left -->
      <div>
        <h2 class="font-semibold text-white text-lg">Blog</h2>
        <p class="text-xs text-white/80">
          Nơi chia sẻ kiến thức, kinh nghiệm, trải nghiệm
        </p>
      </div>

      <!-- Menu -->
      <div class="hidden md:flex gap-6 text-white text-sm">
        <router-link
          to="/"
          href="#"
          class="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >Home</router-link
        >
        <div class="relative group">
          <a
            href="#"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >Viet+</a
          >
          <!-- trỏ hover xuống -->
          <div
            class="absolute top-[40px] left-[-10px] transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
          >
            <!-- mũi nhọn -->
            <div
              class="w-[14px] h-[14px] bg-white rotate-45 absolute top-[-6px] left-6 shadow-md"
            ></div>

            <!-- box -->
            <div class="w-[160px] bg-white rounded-xl shadow-lg py-2">
              <ul class="text-black text-sm">
                <li
                  class="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Ghi chép
                </li>

                <li
                  class="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Chuyện
                </li>

                <li
                  class="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Nhật Kí
                </li>

                <li
                  class="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Thơ
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a
          href="#"
          class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >Translations</a
        >
        <router-link
          to="/about"
          class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >About</router-link
        >
        <router-link
          to="/contact"
          href="#"
          class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >Contact</router-link
        >
      </div>

      <!-- Icon -->
      <div
        class="hidden md:flex items-center gap-3 text-white text-lg relative"
      >
        <router-link to="/login">
          <ion-icon
            name="person-circle-outline"
            class="hover:scale-[120%] transition-all hover:translate-y-[-5px] duration-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full cursor-pointer"
          ></ion-icon>
        </router-link>

        <router-link to="">
          <ion-icon
            name="logo-facebook"
            class="hover:scale-[120%] transition-all hover:translate-y-[-5px] duration-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full cursor-pointer"
          ></ion-icon>
        </router-link>

        <router-link to="">
          <ion-icon
            name="logo-google"
            class="hover:scale-[120%] transition-all hover:translate-y-[-5px] duration-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full cursor-pointer"
          ></ion-icon>
        </router-link>
        <button class="z-50">
          <ion-icon
            @click="openInputToggle()"
            name="search-outline"
            class="hover:scale-[120%] transition-all hover:translate-y-[-5px] duration-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full cursor-pointer"
          ></ion-icon>
        </button>
        <transition name="slide">
          <input
            type="text"
            class="border right-0 absolute bg-blue-500 z-49 -translate-y-1/9 focus:outline-none"
            v-if="openInput"
          />
        </transition>
      </div>
      <div class="md:hidden text-white">
        <button @click="opentmodel">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    </div>
    <!--  => mobile -->
    <transition name="fade-slide" class="absolute w-full">
      <div
        v-if="opent"
        class="md:hidden bg-blue-300 flex flex-col justify-center items-center gap-1 py-4 shadow-lg"
      >
        <ul class="w-full">
          <li class="w-full">
            <router-link
              @click="opentmodel()"
              to="/"
              href="#"
              class="block hover:bg-gray-300 border-b border-gray-500 pb-2 text-center"
            >
              Home
            </router-link>
          </li>

          <li class="w-full">
            <button
              @click="toggleViet"
              href="#"
              class="block w-full hover:bg-gray-300 border-b border-gray-500 pb-2 text-center"
            >
              Viet+
            </button>
          </li>

          <ul
            v-show="openViet"
            class="bg-blue-200 text-sm transition-all duration-300"
          >
            <li class="py-2 hover:bg-gray-300">Ghi chép</li>
            <li class="py-2 hover:bg-gray-300">Chuyện</li>
            <li class="py-2 hover:bg-gray-300">Nhật ký</li>
            <li class="py-2 hover:bg-gray-300">Thơ</li>
            <li class="py-2 hover:bg-gray-300">Tất cả</li>
          </ul>
          <!--  -->

          <li class="w-full">
            <a
              href="#"
              class="block hover:bg-gray-300 border-b border-gray-500 pb-2 text-center"
            >
              Translations
            </a>
          </li>

          <li class="w-full">
            <a
              href="#"
              class="block hover:bg-gray-300 border-b border-gray-500 pb-2 text-center"
            >
              About
            </a>
          </li>

          <li class="w-full">
            <router-link
              to="/contact"
              href="#"
              class="block hover:bg-gray-300 border-b border-gray-500 pb-2 text-center"
              @click="opentmodel()"
            >
              Contact
            </router-link>
          </li>
        </ul>
        <div class="flex gap-4 justify-center items-center text-xl text-white">
          <ion-icon
            name="person-circle-outline"
            class="hover:scale-[120%] transition-all hover:translate-y-[-5px] duration-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full cursor-pointer"
          ></ion-icon>
          <ion-icon
            name="logo-facebook"
            class="cursor-pointer rounded-full hover:-translate-y-1 transition duration-500 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          ></ion-icon>
          <ion-icon
            name="logo-instagram"
            class="cursor-pointer rounded-full hover:-translate-y-1 transition duration-500 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          ></ion-icon>
          <ion-icon
            name="logo-google"
            class="cursor-pointer rounded-full hover:-translate-y-1 transition duration-500 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          ></ion-icon>
        </div>
      </div>
    </transition>
  </div>
</template>
<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 1s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
/* =================== */
.slide-enter-from {
  transform: scale(0);
  opacity: 0;
}
.slide-enter-to {
  transform: scale(100%);
  opacity: 1;
}
.slide-enter-active {
  transition: all 0.5s ease;
}

.slide-leave-from {
  transform: scale(100%);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(0);
  opacity: 0;
}
.slide-leave-active {
  transition: all 0.5s ease;
}
</style>
<script setup>
import { ref } from "vue";
const opent = ref(false);
const opentmodel = () => {
  opent.value = !opent.value;
};
//
const openInput = ref(false);

const openInputToggle = () => {
  openInput.value = !openInput.value;
};
//
const openViet = ref(false);

const toggleViet = () => {
  openViet.value = !openViet.value;
};
</script>
