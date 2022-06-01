<template>
  <main>
    <div class="flex justify-center">
      <h2 class="text-Custom-red text-2xl">Création d'un artiste</h2>
    </div>
    <form @submit.prevent="createArtistes">
      <div class="grid grid-cols-2">
        <div>
          <img :src="imageData" />
        </div>
        <div>
          <input
            placeholder="Nom de l'artiste"
            v-model="Artistes.Nom"
            required
          />
          <input
            placeholder="Genre/Catégorie de musique de l'artiste"
            v-model="Artistes.Genre"
            required
          />
          <input type="file" ref="file" id="file" @change="previewImage" />
        </div>
      </div>
      <div>
        <button type="submit">Créer</button>
        <button><router-link to="/artistes">Cancel</router-link></button>
      </div>
    </form>
  </main>
</template>

<script>
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { getStorage, ref, uploadString } from "firebase/storage";

export default {
  name: "CreateArtistesView",
  data() {
    return {
      imageData: null,
      listeArtistes: [],
      participant: {
        Nom: null,
        imgPresentation: null,
      },
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "Artistes");
      const q = query(dbArtistes, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des artistes", this.listeArtistes);
      });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.Artistes.imgPresentation = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createArtistes() {
      const storage = getStorage();
      const refStorage = ref(
        storage,
        "Artistes/" + this.Artistes.imgPresentation
      );
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");
          const db = getFirestore();
          const docRef = addDoc(collection(db, "Artistes"), this.Artistes);
        }
      );
      this.$router.push("/artistes");
    },
  },
};
</script>