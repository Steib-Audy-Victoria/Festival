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
      <h2 class="text-Custom-bordeaux text-5xl">Artistes</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <RouterLink to="/artiste"
        ><CardArtiste
          v-for="Artiste in Artistes"
          :key="Artiste.id"
          :nom="Artiste.Nom"
          :cat="Artistes.Genre"
          :image="Artistes.imgPrésentation"
        ></CardArtiste
      ></RouterLink>
      <!--<CardArtiste
        nom="David Carretta"
        cat="Electro, electroclash, EBM"
        image="/img/DavidCarretta.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Brodinski"
        cat="Hip-hop, Techno, French touch"
        image="/img/Brodinski.webp"
      ></CardArtiste>
      <CardArtiste
        nom="DJ Shalom, Catman"
        cat="Musique électronique, funk, jazz, musiques improvisées"
        image="/img/Catman.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Danger"
        cat="Synthwave , Darkwave"
        image="/img/Danger.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Electrosexual"
        cat="Electro, electropop, techno, new wave"
        image="/img/Electrosexual.webp"
      ></CardArtiste>
      <CardArtiste
        nom="DJ Fly"
        cat="Electro, hip-hop, dubstep"
        image="/img/DJFly.webp"
      ></CardArtiste>
      <CardArtiste
        nom="F.E.M"
        cat="Techno, techno de Détroit, Musique électronique"
        image="/img/FEM.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Fakear"
        cat="Électro, World, Chill-Out"
        image="/img/Fakear.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Laurent Garnier"
        cat="Techno, techno de Détroit, electro, acid house, nu jazz"
        image="/img/LaurentGarnier.webp"
      ></CardArtiste>
      <CardArtiste
        nom="French Kiwi Juice"
        cat="Electro, nu jazz, R&B"
        image="/img/FrenchKiwiJuice.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Gesaffelstein"
        cat="Techno, electro, synthpop, electronic body music"
        image="/img/Gesaffelstein.webp"
      ></CardArtiste>
      <CardArtiste
        nom="The Hacker"
        cat="Techno, electro, synthétiseur"
        image="/img/TheHacker.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Koudlam"
        cat="Musique électronique , New Wave , Post-Punk , Synthpop"
        image="/img/Koudlam.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Igorrr"
        cat="Breakcore, death metal, trip hop, black métal"
        image="/img/Igorr.webp"
      ></CardArtiste>
      <CardArtiste
        nom="L.B. One"
        cat="Deep house, électro, techno"
        image="/img/LBOne.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Madeon"
        cat="Electro house, pop, nu-disco"
        image="/img/Madeon.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Mondkopf"
        cat="Musique électronique"
        image="/img/Mondkopf.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Marst"
        cat="Musique électronique, Techno, House"
        image="/img/Marst.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Panda Dub"
        cat="Dub, électro, techno"
        image="/img/PandaDub.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Perturbator"
        cat="Électronique, Metal, Synthwave, Darksynth"
        image="/img/Perturbator.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Max Season"
        cat="Hip-hop, RnB, Pop"
        image="/img/MaxSeason.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Petit Biscuit"
        cat="Musique électronique, deep house, indie dance, ambient, downtempo"
        image="/img/PetitBiscuit.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Kiddy Smile"
        cat="Electro, House"
        image="/img/KiddySmile.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Bob Sinclar"
        cat="French touch, house, dance, electro house, rap"
        image="/img/BobSinclar.webp"
      ></CardArtiste>
      <CardArtiste
        nom="DJ Snake"
        cat="EDM trap, electro house, moombahton, hip-hop, rap"
        image="/img/DJSnake.webp"
      ></CardArtiste>-->
    </div>
  </main>
</template>

<script>
import CardArtiste from "../components/CardArtiste.vue";
import ligneMdl from "../components/icons/ligneMdl.vue";
import ligne1 from "../components/icons/ligne1.vue";
import ligne2 from "../components/icons/ligne2.vue";
import ligne3 from "../components/icons/ligne3.vue";

import { getFirestore, collection, onSnapshot } from "firebase/firestore";

export default {
  components: { CardArtiste, ligneMdl, ligne1, ligne2, ligne3 },
  data() {
    return {
      listeArtistes: [],
      nom: null,
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "Artistes");
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        console.log("query", query);
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("listeArtistes", this.listeArtistes);
      });
    },
  },
};
</script>