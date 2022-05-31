<template>
  <div
    class="bg-white drop-shadow-xl w-40 h-40 p-8 rounded-full m-2"
    style="box-shadow: -3px 4px 8px 1px #6e2e2b"
  >
    <div class="flex flex-col justify-center items-center">
      <img :src="image" />
      <p
        class="
          flex-grow-0 flex-shrink-0
          text-base
          font-semibold
          text-center text-black
        "
      >
        {{ nom }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nom: String,
    image: String,
  },
};
</script>