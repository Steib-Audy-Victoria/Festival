<template>
  <main>
    <div class="flex flex-col justify-center items-center my-20">
      <img src="/img/Erreur404.webp" alt="" />
      <h1 class="text-Custom-red text-7xl font-monaco mt-6">Erreur 404</h1>
      <p class="text-Custom-black text-xl font-monaco">Page non trouvée</p>
    </div>
    <div class="flex justify-center my-20">
      <form
        action="https://duckduckgo.com/"
        method="GET"
        x-data="{ q:'', }"
        x-on:submit="q = q + ' site:mmimontbeliard.com'"
      >
        <label class="text-base" for="q">Texte à chercher :</label>
        <input
          class="border border-Custom-gray rounded-lg"
          type="text"
          id="q"
          name="q"
          x-model="q"
        />
        <button
          class="bg-Custom-gray text-white text-base px-2 py-1 rounded-lg"
          type="submit"
        >
          Rechercher
        </button>
      </form>
    </div>

    <div class="my-12">
      <RouterLink to="/">
        <CardAccueil Msg="Accueil" class="text-Custom-black"></CardAccueil>
      </RouterLink>
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
      <RouterLink to="/concert">
        <CardAccueil Msg="Concert" class="text-Custom-bordeaux"></CardAccueil>
      </RouterLink>
      <RouterLink to="/artiste">
        <CardAccueil Msg="Artiste" class="text-Custom-gray"></CardAccueil>
      </RouterLink>
      <RouterLink to="/mentionsLegales">
        <CardAccueil
          Msg="Mentions Légales"
          class="text-Custom-bordeaux"
        ></CardAccueil>
      </RouterLink>
      <RouterLink to="/guide">
        <CardAccueil Msg="Guide" class="text-Custom-black"></CardAccueil>
      </RouterLink>
      <RouterLink to="/createArtistes">
        <CardAccueil
          Msg="Create Artistes"
          class="text-Custom-bordeaux"
        ></CardAccueil>
      </RouterLink>
    </div>
  </main>
</template>

<script>
import CardAccueil from "../components/CardAccueil.vue";

export default {
  components: { CardAccueil },
};
</script>