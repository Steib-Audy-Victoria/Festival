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

    <div class="flex flex-col">
      <div class="flex justify-center m-2">
        <RouterLink to="/createArtistes"
          ><button
            class="
              border border-Custom-red
              hover:bg-Custom-red hover:text-white
              text-lg
              p-2
              rounded-lg
            "
          >
            Création d'un artiste
          </button></RouterLink
        >
      </div>
      <div class="flex justify-center items-center gap-2">
        <input
          class="border border-Custom-red rounded-lg"
          type="text"
          v-model="filter"
        />
        <button type="button" title="Filtrage"><loupe /></button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <section v-for="Artistes in filterByName" :key="Artistes.id">
        <div
          class="
            flex
            justify-between
            items-center
            rounded-xl
            bg-white
            m-4
            p-4
            text-black
            hover:bg-Custom-bordeaux hover:text-white
            w-card_artiste
          "
          style="box-shadow: -3px 4px 8px 1px #6e2e2b"
        >
          <img
            :src="Artistes.imgPresentation"
            class="w-28 h-28 rounded-lg object-cover"
          />
          <div class="flex flex-col justify-start items-center">
            <p class="text-4xl font-semibold text-center px-3">
              {{ Artistes.Nom }}
            </p>
            <p class="text-lg text-left px-3">
              {{ Artistes.Genre }}
            </p>
          </div>
          <div class="flex flex-col gap-10">
            <div class="flex justify-evenly">
              <RouterLink
                :to="{ name: 'deleteArtistes', params: { id: Artistes.id } }"
                ><suppr
              /></RouterLink>
              <RouterLink
                :to="{ name: 'updateArtistes', params: { id: Artistes.id } }"
                ><modif
              /></RouterLink>
            </div>
            <RouterLink to="/artiste"><Fleche /></RouterLink>
          </div>
        </div>
      </section>

      <!--<RouterLink to="/artiste" 
        ><CardArtiste
          v-for="Artistes in listeArtistes"
          :key="Artistes.id"
          :nom="Artistes.Nom"
          :cat="Artistes.Genre"
          :image="Artistes.imgPresentation"
        ></CardArtiste
      ></RouterLink>-->
      <!--<CardArtiste
        nom="Agoria"
        cat="Techno, techno de Détroit, deep house, ambient"
        image="/img/Agoria.webp"
      ></CardArtiste><CardArtiste
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
import Fleche from "../components/icons/Fleche.vue";
import suppr from "../components/icons/suppr.vue";
import modif from "../components/icons/modif.vue";
import loupe from "../components/icons/loupe.vue";

import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  components: {
    CardArtiste,
    ligneMdl,
    ligne1,
    ligne2,
    ligne3,
    Fleche,
    suppr,
    modif,
    loupe,
  },
  data() {
    return {
      listeArtistes: [],
      nom: null,
      filter: "",
    };
  },
  computed: {
    orderByName: function () {
      return this.listeArtistes.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    filterByName: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByName.filter(function (Artistes) {
          return Artistes.Nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByName;
      }
    },
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
        this.listeArtistes.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "Artistes/" + personne.imgPresentation);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.imgPresentation = url;
              console.log("personne", personne);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeArtistes", this.listeArtistes);
      });
    },
  },
};
</script>