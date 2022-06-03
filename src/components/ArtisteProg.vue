<template>
  <div
    class="
      bg-white
      hover:bg-Custom-bordeaux
      drop-shadow-xl
      w-40
      h-40
      p-8
      rounded-full
      m-2
      text-black
      hover:text-white
    "
    style="box-shadow: -3px 4px 8px 1px #6e2e2b"
  >
    <div class="flex flex-col justify-center items-center">
      <img class="rounded-full" :src="image" />
      <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center">
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