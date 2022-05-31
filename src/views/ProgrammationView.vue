<template>
  <main>
    <div
      class="
        bg-[url(public/img/festival_musique_fond.webp)]
        bg-auto bg-center bg-no-repeat
        grid
        place-items-center
        w-screen
        h-screen
      "
    >
      <h2 class="text-Custom-bordeaux text-4xl">Programmation</h2>
    </div>
    <!--section 1 jour 1-->
    <section class="mt-8">
      <div class="flex justify-center">
        <Jour jour="Jour 1" date="Vendredi 22 juillet"></Jour>
      </div>
      <div class="grid grid-cols-3 place-items-center mt-5">
        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 1"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <RouterLink to="/concert"
              ><ArtisteProg
                image="public/img/Agoria_prog.webp"
                nom="Agoria"
              ></ArtisteProg
            ></RouterLink>
            <ArtisteProg
              image="public/img/DJfly_prog.webp"
              nom="DJ Fly"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/FEM_prog.webp"
              nom="F.E.M"
            ></ArtisteProg>
          </div>
        </div>

        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 2"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/PetitBiscuit_prog.webp"
              nom="Petit Biscuit"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Fakear_prog.webp"
              nom="Fakear"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Koudlam_prog.webp"
              nom="Koudlam"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Catman_prog.webp"
              nom="Catman"
            ></ArtisteProg>
          </div>
        </div>

        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 3"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/Mondkopf_prog.webp"
              nom="Mondkopf"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/LaurentGarnier_prog.webp"
              nom="Laurent Garnier"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Danger_prog.webp"
              nom="Danger"
            ></ArtisteProg>
          </div>
        </div>
      </div>
    </section>
    <div class="flex justify-center my-20">
      <ligne1></ligne1>
    </div>
    <!--section 2 jour 2-->
    <section class="mt-8">
      <div class="flex justify-center">
        <Jour jour="Jour 2" date="Samedi 23 juillet"></Jour>
      </div>
      <div class="grid grid-cols-3 place-items-center mt-5">
        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 1"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/PetitBiscuit_prog.webp"
              nom="Petit Biscuit"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/TheHacker_prog.webp"
              nom="The Hacker"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/KiddySmile_prog.webp"
              nom="Kiddy Smile"
            ></ArtisteProg>
          </div>
        </div>

        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 2"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/LBOne_prog.webp"
              nom="L.B. One"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Gesaffelstein_prog.webp"
              nom="Gesaffelstein"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Electrosexual_prog.webp"
              nom="Electrosexual"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Marst_prog.webp"
              nom="Marst"
            ></ArtisteProg>
          </div>
        </div>

        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 3"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/FrenchKiwiJuice_prog.webp"
              nom="French Kiwi Juice"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/DavidCarretta_prog.webp"
              nom="David Carretta"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/MaxSeason_prog.webp"
              nom="Max Season"
            ></ArtisteProg>
          </div>
        </div>
      </div>
    </section>
    <div class="flex justify-center my-20">
      <ligne2></ligne2>
    </div>
    <!--section 3 jour 3-->
    <section class="mt-8 mb-40">
      <div class="flex justify-center">
        <Jour jour="Jour 3" date="Dimanche 24 juillet"></Jour>
      </div>
      <div class="grid grid-cols-3 place-items-center mt-5">
        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 1"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/DJSnake_prog.webp"
              nom="DJ Snake"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Brodinski_prog.webp"
              nom="Brodinski"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Perturbator_prog.webp"
              nom="Perturbator"
            ></ArtisteProg>
          </div>
        </div>

        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 2"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/BobSinclar_prog.webp"
              nom="Bob Sinclar"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Gesaffelstein_prog.webp"
              nom="Gesaffelstein"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Igorr_prog.webp"
              nom="Igorr"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/PandaDub_prog.webp"
              nom="Panda Dub"
            ></ArtisteProg>
          </div>
        </div>

        <div>
          <div class="flex justify-center">
            <Scene scene="Scène 3"></Scene>
          </div>
          <div class="grid grid-cols-2">
            <ArtisteProg
              image="public/img/Agoria_prog.webp"
              nom="Agoria"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Madeon_prog.webp"
              nom="Madeon"
            ></ArtisteProg>
            <ArtisteProg
              image="public/img/Fakear_prog.webp"
              nom="Fakear"
            ></ArtisteProg>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Jour from "../components/Jour.vue";
import Scene from "../components/Scene.vue";
import ArtisteProg from "../components/ArtisteProg.vue";
import ligne1 from "../components/icons/ligne1.vue";
import ligne2 from "../components/icons/ligne2.vue";

export default {
  components: { Jour, Scene, ArtisteProg, ligne1, ligne2 },
};
</script>