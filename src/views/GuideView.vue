<template>
  <main class="dark:bg-black">
    <div class="flex justify-center my-20 mt-0">
      <h1 class="text-Custom-red text-4xl mt-5">Guide de style</h1>
    </div>
    <section>
      <div class="my-20 mx-10">
        <h2 class="text-Custom-bordeaux dark:text-Custom-gray text-3xl">
          Couleur
        </h2>
      </div>
      <div>
        <div class="flex justify-center gap-2">
          <div class="bg-Custom-red rounded-full w-60 h-60"></div>
          <div class="bg-Custom-black rounded-full w-60 h-60"></div>
          <div
            class="
              bg-Custom-white
              rounded-full
              w-60
              h-60
              border border-Custom-black
            "
          ></div>
          <div class="bg-Custom-gray rounded-full w-60 h-60"></div>
          <div class="bg-Custom-bordeaux rounded-full w-60 h-60"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="my-20 mx-10">
        <h2 class="text-Custom-bordeaux dark:text-Custom-gray text-3xl">
          Typographie
        </h2>
      </div>
      <div class="dark:text-white">
        <div class="ml-10 my-5">
          <h3 class="font-bold text-2xl">Titre :</h3>
          <hr class="border-2 w-32 border-black" />
        </div>
        <div class="flex justify-center gap-80">
          <div class="font-chalkduster text-4xl">Chalkduster</div>
          <div class="font-monaco text-3xl">Monaco</div>
        </div>
      </div>
      <div class="dark:text-white">
        <div class="ml-10 my-5">
          <h3 class="font-bold text-2xl">Text :</h3>
          <hr class="border-2 w-32 border-black" />
        </div>
        <div class="ml-80">
          <div class="text-lg leading-7 font-normal my-3">
            Inter, font normal
          </div>
          <div class="text-xl leading-9 font-medium my-3">
            Inter, font medium
          </div>
          <div class="text-lg leading-7 font-semibold my-3">
            Inter, font semibold
          </div>
          <div class="text-lg leading-10 font-bold my-3">Inter, font bold</div>
        </div>
      </div>
    </section>
    <section>
      <div class="my-20 mx-10">
        <h2 class="text-Custom-bordeaux dark:text-Custom-gray text-3xl">
          Icones
        </h2>
      </div>
      <div class="flex gap-12 items-center justify-center dark:text-white">
        <facebook />
        <fleche />
        <instagram />
        <livre />
        <logo-red-land />
        <menu />
        <modif />
        <suppr />
        <twitter />
        <youtube />
      </div>
    </section>
    <section class="mb-5">
      <div class="my-20 mx-10">
        <h2 class="text-Custom-bordeaux dark:text-Custom-gray text-3xl">
          Composants
        </h2>
      </div>
      <div class="flex flex-col justify-center items-center gap-3">
        <artiste-prog nom="Nom de l'artiste" image="image" />
        <card-accueil Msg="Bouton" />
        <card-artiste
          image="image"
          nom="Nom de l'artiste"
          cat="Genre de musique"
        />
        <jour jour="Jour du concert" date="Date du concert" />
        <scene scene="Numéro de scène" />
      </div>
    </section>
  </main>
</template>

<script>
import ArtisteProg from "../components/ArtisteProg.vue";
import CardAccueil from "../components/CardAccueil.vue";
import CardArtiste from "../components/CardArtiste.vue";
import Facebook from "../components/icons/Facebook.vue";
import Fleche from "../components/icons/Fleche.vue";
import Instagram from "../components/icons/Instagram.vue";
import Ligne1 from "../components/icons/ligne1.vue";
import Ligne2 from "../components/icons/ligne2.vue";
import Ligne3 from "../components/icons/ligne3.vue";
import LigneMdl from "../components/icons/ligneMdl.vue";
import Livre from "../components/icons/livre.vue";
import LogoRedLand from "../components/icons/LogoRedLand.vue";
import Menu from "../components/icons/Menu.vue";
import Modif from "../components/icons/modif.vue";
import Suppr from "../components/icons/suppr.vue";
import Twitter from "../components/icons/Twitter.vue";
import Youtube from "../components/icons/Youtube.vue";
import Jour from "../components/Jour.vue";
import Scene from "../components/Scene.vue";

export default {
  components: {
    Facebook,
    Fleche,
    Instagram,
    Livre,
    LogoRedLand,
    Menu,
    Modif,
    Suppr,
    Twitter,
    Youtube,
    Ligne1,
    Ligne2,
    Ligne3,
    LigneMdl,
    ArtisteProg,
    CardAccueil,
    CardArtiste,
    Jour,
    Scene,
  },
};
</script>
