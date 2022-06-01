<template>
  <main>
    <div class="flex justify-center my-20">
      <h2 class="text-Custom-red text-4xl">Suppression d'un artiste</h2>
    </div>
    <form @submit.prevent="deleteArtistes">
      <div class="grid grid-cols-2">
        <div class="mx-16">
          <img :src="photoActuelle" />
        </div>
        <div class="flex flex-col">
          <input
            class="my-4"
            placeholder="Nom de l'artiste"
            v-model="Artistes.Nom"
            disabled
          />
          <input
            class="my-4"
            placeholder="Genre / Catégorie de musique de l'artiste"
            v-model="Artistes.Genre"
            disabled
          />
        </div>
      </div>
      <div class="flex justify-evenly my-10">
        <button
          class="border border-Custom-red p-2 rounded-lg text-lg"
          type="submit"
        >
          Supprimer
        </button>
        <button class="border border-Custom-red p-2 rounded-lg text-lg">
          <RouterLink to="/artistes">Cancel</RouterLink>
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import { getFirestore, doc, getDoc, deleteDoc } from "firebase/firestore";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export default {
  name: "DeleteArtistesView",
  data() {
    return {
      Artistes: {
        Nom: null,
        imgPresentation: null,
      },

      refArtistes: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtistes(this.$route.params.id);
  },

  methods: {
    async getArtistes(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artistes", id);
      this.refArtistes = await getDoc(docRef);
      if (this.refArtistes.exists()) {
        this.Artistes = this.refArtistes.data();
        this.photoActuelle = this.Artistes.imgPresentation;
      } else {
        this.console.log("Artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(
        storage,
        "Artistes/" + this.Artistes.imgPresentation
      );
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteArtistes() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "Artistes", this.$route.params.id));

      const storage = getStorage();
      let docRef = ref(storage, "Artistes/" + this.Artistes.imgPresentation);
      deleteObject(docRef);

      this.$router.push("/artistes");
    },
  },
};
</script>