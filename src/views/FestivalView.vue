<template>
  <main class="dark:bg-black">
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
      <h2 class="text-Custom-bordeaux text-5xl">Festival</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <div class="text-lg m-12 lg:ml-12 dark:text-white">
        <p class="mb-12">
          <span class="font-semibold">Festival de musique électronique</span>, à
          strasbourg, du vendredi 22 juillet au dimanche 24 juillet, avec 3
          scènes.
        </p>
        <p class="mb-12">
          Avec des artistes de musique électronique, de techno, de Hip-Hop, de
          électropop, de électroclash, de synthétiseur et de synthpop, de Deep
          House, ...
        </p>
        <p class="font-semibold mb-12">Liste des artistes :</p>
        <div class="mb-12">
          <div v-for="Artistes in listeArtistes" :key="Artistes.id">
            <p class="text-black dark:text-white text-lg ml-8">
              {{ Artistes.Nom }}
            </p>
          </div>
        </div>
        <!--<div class="grid grid-cols-2 mb-12">
          <ul class="list-disc ml-20">
            <li>Agoria</li>
            <li>Bob Sinclar</li>
            <li>DJ Snake</li>
            <li>Petit Biscuit</li>
            <li>Fakear</li>
            <li>Brodinski</li>
            <li>Gesaffelstein</li>
            <li>Madeon</li>
            <li>Danger</li>
            <li>The Hacker</li>
            <li>Perturbator</li>
            <li>Igorrr</li>
            <li>DJ Fly</li>
          </ul>
          <ul class="list-disc ml-20">
            <li>L.B. One</li>
            <li>Marst</li>
            <li>Max Season</li>
            <li>Laurent Garnier</li>
            <li>French Kiwi Juice</li>
            <li>Koudlam</li>
            <li>F.E.M</li>
            <li>David Carretta</li>
            <li>DJ Shalom, Catman</li>
            <li>Electrosexual</li>
            <li>Mondkopf</li>
            <li>Panda Dub</li>
            <li>Kiddy Smile</li>
          </ul>
        </div>-->
        <div>
          <img class="my-4" src="/img/Festival1.webp" alt="image du festival" />
          <img class="my-4" src="/img/Festival2.webp" alt="image du festival" />
        </div>
      </div>
      <div>
        <img
          class="my-4"
          src="/img/Festival_col1.webp"
          alt="image du festival"
        />
        <img
          class="my-4"
          src="/img/Festival_col2.webp"
          alt="image du festival"
        />
        <img
          class="my-4"
          src="/img/Festival_col3.webp"
          alt="image du festival"
        />
        <img
          class="my-4"
          src="/img/Festival_col4.webp"
          alt="image du festival"
        />
        <img
          class="my-4"
          src="/img/Festival_col5.webp"
          alt="image du festival"
        />
        <img
          class="my-4"
          src="/img/Festival_col6.webp"
          alt="image du festival"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

export default {
  return: {
    listeArtistes: [],
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