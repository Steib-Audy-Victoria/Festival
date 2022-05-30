<template>
  <div
    class="
      flex
      justify-between
      items-center
      rounded-xl
      bg-white
      m-4
      p-4
      w-card_artiste
    "
    style="box-shadow: -3px 4px 8px 1px #6e2e2b"
  >
    <img :src="image" class="rounded-lg object-cover" />
    <div class="flex flex-col justify-start items-center">
      <p class="text-4xl font-semibold text-center text-black px-3">
        {{ nom }}
      </p>
      <p class="text-lg text-left text-black px-3">
        {{ cat }}
      </p>
    </div>
    <Fleche />
  </div>
</template>

<script>
import Fleche from "../components/icons/Fleche.vue";

export default {
  components: { Fleche },
  props: {
    nom: String,
    image: String,
    cat: String,
  },
};
</script>