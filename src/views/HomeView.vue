<template>
  <main
    class="
      bg-[url(public/img/festival_musique_fond.webp)]
      h-screen
      grid
      place-content-center
    "
  >
    <div class="grid lg:grid-cols-1 xl:grid-cols-2 place-items-center">
      <RouterLink to="/programmation">
        <CardAccueil
          Msg="Programmation"
          class="text-Custom-bordeaux"
        ></CardAccueil>
      </RouterLink>
      <RouterLink to="/artistes">
        <CardAccueil Msg="Artistes" class="text-Custom-gray"></CardAccueil>
      </RouterLink>
      <RouterLink to="/festival">
        <CardAccueil Msg="Festival" class="text-Custom-red"></CardAccueil>
      </RouterLink>
      <RouterLink to="/contact">
        <CardAccueil Msg="Contact" class="text-Custom-black"></CardAccueil>
      </RouterLink>
    </div>
  </main>
</template>

<script>
import CardAccueil from "../components/CardAccueil.vue";

export default {
  name: "Accueil",
  components: {
    CardAccueil,
  },
};
</script>