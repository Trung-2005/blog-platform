<template>
  <div class="justify-center flex flex-col gap-10 items-center mt-10">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="w-full md:w-[70%] flex flex-col gap-3 justify-center mt-20 items-center"
    >
      <h1 class="text-3xl w-auto md:w-[50%] text-center font-bold">
        {{ post.Title }}
      </h1>
      <p class="text-gray-600">{{ post.Meta }}</p>
      <div class="w-full md:w-[800px] md:h-[350px] h-[250px]">
        <img
          src="../img/1.jpg"
          alt=""
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p class="leading-relaxed text-justify md:w-[50%] w-[90%] p-3">
        {{ post.Content }}
      </p>
      <div class="flex gap-3">
        <button
          class="px-3 py-1 bg-white rounded-lg shadow hover:bg-gray-100 transition"
        >
          Read Mode
        </button>
        <button
          class="flex items-center gap-1 px-3 py-1 bg-white rounded-lg shadow hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          leave a comment
        </button>
      </div>
    </div>
    <div class="mt-10 mb-10 flex gap-3">
      <a href="">1</a>
      <a href="">2</a>
      ...
      <a href="">24</a>
      <a href="">Next</a>
    </div>
  </div>
</template>
<script setup>
const posts = [
  {
    Title:
      "Và cái chết không thể nào thống trị | And death shall have no dominion – Dylan Thomas",
    Meta: "Published March 18, 2020 by Rio Lam",
    Image: "../img/1.jpg",
    Content: `/Well, it’s me, again with my fav poet. / Và cái chết không thể nào
        thống trị. Muôn người nằm xuống, loã thể, hoà một thân Nơi đấng trong
        gió, nơi vầng nguyệt Tây phương Khi xương tàn đã sạch và xương không còn
        vương, Nơi khuỷu tay và bàn chân có ngàn tinh tú Dẫu điên cuồng, minh
        triết chẳng hề xa Chìm sâu đáy biển, một mai họ vươn lên Tình nhân không
        còn nhưng tình yêu vẫn không mòn; Và cái chết không thể nào thống trị. .
        Và cái chết không thể nào thống trị. Dưới…`,
  },

  {
    Title: "“Nhớ khi nao lúc ra đi…”",
    Meta: "Published November 12, 2018 by Rio Lam",
    Image: "../img/1.jpg",
    Content: `Đã thành lệ hằng năm, cứ đến tháng 11 là mình sẽ đem lòng nhớ Tết.`,
  },
];
</script>
