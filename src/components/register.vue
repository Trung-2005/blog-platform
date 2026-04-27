<template>
  <div
    class="w-screen h-screen flex flex-col justify-center items-center gap-3"
  >
    <h1 class="text-blue-500 text-5xl md:text-6xl font-medium">Blog</h1>
    <h2 class="font-normal text-2xl md:text-4xl">Đăng kí tài khoản BLog</h2>

    <h2 class="font-normal text-2xl md:text-4xl">để kết nối dứng dụng Blog</h2>
    <div
      class="bg-white p-4 rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.2)] p-3"
    >
      <form
        action=""
        @submit.prevent="handleLogin"
        class="flex flex-col gap-3 w-[300px] h-[360px] justify-around items-center"
      >
        <h1 class="font-medium text-2xl">Đăng kí với mật khẩu</h1>
        <div class="w-full relative">
          <input
            id="otp1"
            type="text"
            placeholder=" "
            v-model="email"
            class="w-full peer p-2 shadow focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 absolute top-1/2 -translate-y-1/2 right-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <label
            for="otp1"
            class="absolute left-2 top-1/2 -translate-y-1/2 peer-focus:top-[-10px] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-base transition-all duration-500 ease-linear peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base"
            >Email</label
          >
        </div>
        <div class="w-full relative">
          <input
            id="otp2"
            type="text"
            placeholder=" "
            v-model="password"
            class="w-full peer focus:outline-none p-2 shadow"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 absolute top-1/2 -translate-y-1/2 right-0"
          >
            <path
              fill-rule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <label
            for="otp2"
            class="absolute left-2 top-1/2 -translate-y-1/2 left-0 peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-base peer-focus:top-[-10px] transition-all duration-500 ease-linear"
          >
            Mật khẩu
          </label>
        </div>

        <div class="w-full relative">
          <input
            id="otp2"
            type="text"
            placeholder=" "
            v-model="password"
            class="w-full peer focus:outline-none p-2 shadow"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 absolute top-1/2 -translate-y-1/2 right-0"
          >
            <path
              fill-rule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <label
            for="otp2"
            class="absolute left-2 top-1/2 -translate-y-1/2 left-0 peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-base peer-focus:top-[-10px] transition-all duration-500 ease-linear"
          >
            xác nhận mật khẩu
          </label>
        </div>
        <button
          class="w-full h-[45px] rounded-xl bg-blue-400 text-white cursor-pointer hover:bg-blue-500"
        >
          Đăng ký
        </button>
        <router-link to="/login">Quay lại</router-link>
      </form>
    </div>
  </div>
</template>
<script setup></script>
