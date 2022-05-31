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
      <h2 class="text-Custom-bordeaux text-4xl">Contact</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <section>
        <h2 class="text-3xl text-Custom-bordeaux text-center my-4">
          Formulaire de contact
        </h2>
        <form action="#" class="flex flex-col m-2">
          <input
            class="border-Custom-bordeaux border rounded-lg placeholder:p-1 m-2"
            type="text"
            name="email"
            id="email"
            placeholder="E-mail ..."
          />
          <input
            class="border-Custom-bordeaux border rounded-lg placeholder:p-1 m-2"
            type="text"
            name="nom"
            id="nom"
            placeholder="Nom ..."
          />
          <input
            class="border-Custom-bordeaux border rounded-lg placeholder:p-1 m-2"
            type="text"
            name="prenom"
            id="prenom"
            placeholder="Prénom ..."
          />
          <textarea
            class="border-Custom-bordeaux border rounded-lg placeholder:p-1 m-2"
            name="message"
            placeholder="Message ..."
            id="message"
            cols="30"
            rows="5"
          ></textarea>
          <div class="flex justify-center m-3">
            <button
              class="bg-Custom-bordeaux rounded-lg text-white w-max p-1 px-3"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </section>
      <section>
        <h2 class="text-3xl text-Custom-bordeaux text-center my-4">
          Google map
        </h2>
        <img src="public/img/map.webp" alt="image de la map" />
        <div class="flex justify-center items-center my-6">
          <livre class="mr-2"></livre>
          <p class="text-lg font-semibold underline">Lien vers google map</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import livre from "../components/icons/livre.vue";
export default {
  components: { livre },
};
</script>