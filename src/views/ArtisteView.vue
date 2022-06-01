<template>
  <main>
    <div
      class="
        bg-[url(public/img/AgoriaFond.webp)] bg-auto bg-center bg-no-repeat
        grid
        place-items-center
        w-screen
        h-screen
      "
    >
      <h2 class="text-Custom-bordeaux text-5xl">Agoria</h2>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center">
      <div>
        <div class="text-lg">
          <p class="ml-10 my-10">
            <span class="font-semibold">Agoria</span>
            , de son vrai nom
            <span class="font-semibold">Sébastien Devaud</span>, né le
            <span class="font-semibold">16 janvier 1976 </span>
            , est un producteur, compositeur et DJ français de musique
            électronique.
          </p>
          <p class="ml-10 my-10">
            Son genre musical est techno, techno de Détroit, deep house et
            ambient.
          </p>
          <div class="flex items-center justify-center my-10">
            <Youtube></Youtube>
            <p class="underline">Lien de son dernier album</p>
            <img
              src="/img/AgoriaAlbum.webp"
              alt="Image du dernière album de Agoria"
            />
          </div>
          <div class="flex justify-center my-10">
            <button class="bg-Custom-bordeaux text-white p-2 rounded-md">
              Liste de ces concerts
            </button>
          </div>
        </div>
        <div class="grid place-items-center">
          <img class="my-4" src="/img/Agoria1.webp" alt="Image de Agoria" />
        </div>
      </div>
      <div class="grid place-items-center">
        <img class="my-4" src="/img/Agoria2.webp" alt="Image de Agoria" />
        <img class="my-4" src="/img/Agoria3.webp" alt="Image de Agoria" />
      </div>
    </div>
  </main>
</template>

<script>
import Youtube from "../components/icons/Youtube.vue";

export default {
  components: { Youtube },
};
</script>