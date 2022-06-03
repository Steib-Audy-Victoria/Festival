<template>
  <main>
    <div class="flex justify-center my-20">
      <h2 class="text-Custom-red text-4xl">Mise à jour d'un artiste</h2>
    </div>
    <form @submit.prevent="updateArtistes">
      <div class="grid grid-cols-2">
        <div class="mx-16">
          <img :src="imageData" />
        </div>
        <div class="flex flex-col">
          <input
            class="my-4"
            placeholder="Nom de l'artiste"
            v-model="Artistes.Nom"
            required
          />
          <input
            class="my-4"
            placeholder="Genre / Catégorie de musique de l'artiste"
            v-model="Artistes.Genre"
            required
          />
          <input
            class="my-4"
            type="file"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
      </div>
      <div class="flex justify-evenly my-10">
        <button
          class="
            border border-Custom-red
            hover:bg-Custom-red hover:text-white
            p-2
            rounded-lg
            text-lg
          "
          type="submit"
        >
          Modifier
        </button>
        <button
          class="
            border border-Custom-red
            hover:bg-Custom-red hover:text-white
            p-2
            rounded-lg
            text-lg
          "
        >
          <router-link to="/artistes">Cancel</router-link>
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
  deleteObject,
} from "firebase/storage";

export default {
  name: "UpdateArtistesView",
  data() {
    return {
      imageData: null,
      listeArtistes: [],
      Artistes: {
        Nom: null,
        imgPresentation: null,
      },
      refArtistes: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artistes", this.$route.params.id);
    this.getArtistes(this.$route.params.id);
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
      });
    },

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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.Artistes.imgPresentation = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateArtistes() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "Artistes/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "Artistes/" + this.Artistes.imgPresentation);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            console.log(
              "Uploaded a base64 string",
              this.Artistes.imgPresentation
            );
          }
        );
      }
      const firestore = getFirestore();
      await updateDoc(
        doc(firestore, "Artistes", this.$route.params.id),
        this.Artistes
      );
      this.$router.push("/artistes");
    },
  },
};
</script>