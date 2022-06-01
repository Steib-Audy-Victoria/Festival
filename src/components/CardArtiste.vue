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
        <RouterLink
          :to="{ name: 'deleteArtistes', params: { id: Artistes.id } }"
          ><suppr
        /></RouterLink>
        <RouterLink
          :to="{ name: 'updateArtistes', params: { id: Artistes.id } }"
          ><modif
        /></RouterLink>
      </div>
      <Fleche />
    </div>
  </div>
</template>

<script>
import Fleche from "../components/icons/Fleche.vue";
import suppr from "../components/icons/suppr.vue";
import modif from "../components/icons/modif.vue";

import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  components: { Fleche, suppr, modif },
  props: {
    nom: String,
    image: String,
    cat: String,
  },
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