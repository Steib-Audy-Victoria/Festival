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
    <img :src="image" class="w-28 rounded-lg object-cover" />
    <div class="flex flex-col justify-start items-center">
      <p class="text-4xl font-semibold text-center text-black px-3">
        {{ nom }}
      </p>
      <p class="text-lg text-left text-black px-3">
        {{ cat }}
      </p>
    </div>

    <div class="flex flex-col gap-10">
      <div class="flex justify-evenly">
        <!--<RouterLink
          :to="{ name: 'deleteArtistes', params: { id: Artistes.id } }"
          >--><suppr /><!--</RouterLink>
        <RouterLink
          :to="{ name: 'updateArtistes', params: { id: Artistes.id } }"
          >--><modif /><!--</RouterLink>-->
      </div>
      <RouterLink to="/artiste"><Fleche /></RouterLink>
    </div>
  </div>
</template>

<script>
import Fleche from "../components/icons/Fleche.vue";
import suppr from "../components/icons/suppr.vue";
import modif from "../components/icons/modif.vue";

export default {
  components: { Fleche, suppr, modif },
  props: {
    nom: String,
    image: String,
    cat: String,
  },
};
</script>