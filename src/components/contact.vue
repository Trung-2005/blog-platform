<template>
  <div class="w-full min-h-[87vh] p-3 flex justify-center items-center">
    <div class="md:w-[40%] flex flex-col gap-3 justify-center items-center">
      <h1 class="text-3xl font-medium">Text me!</h1>
      <p class="mt-10">
        Don’t hesitate sending me an email! I love them than any kind of
        messages (well, but not as much as I love postal letters). As Phyllis
        Theroux said, “To send a letter is a good way to go somewhere without
        moving anything but your heart.”
      </p>
      <form class="w-full m-10 flex flex-col gap-7">
        <div class="relative">
          <input
            type="text"
            placeholder=" "
            class="border peer md:w-[250px] text-[20px] focus:outline-none p-1"
          />
          <label
            for=""
            class="absolute left-2 top-1/2 -translate-y-1/2 peer-focus:top-[-10px] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-base transition-all duration-500 ease-linear peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base"
            >Name</label
          >
        </div>
        <div class="relative">
          <input
            type="text"
            placeholder=" "
            class="border peer md:w-[250px] text-[20px] focus:outline-none p-1"
          />
          <label
            for=""
            class="absolute left-2 top-1/2 -translate-y-1/2 peer-focus:top-[-10px] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-base transition-all duration-500 ease-linear peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base"
            >Email</label
          >
        </div>
        <div class="relative">
          <textarea
            type="textarea"
            class="border peer md:w-[350px] md:h-[150px] text-[20px] focus:outline-none p-1"
          />
          <label
            for=""
            class="absolute left-2 top-1/2 -translate-y-1/2 peer-focus:top-[-10px] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-base transition-all duration-500 ease-linear peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base"
            >Comment</label
          >
        </div>
        <div class="flex gap-3">
          <input type="checkbox" />
          <label for="">I want to receive updates from Rio Lam.</label>
        </div>
        <button
          class="border w-[65px] h-[35px] rounded-[15px] bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
