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
      <h2 class="text-Custom-bordeaux text-4xl">Artistes</h2>
    </div>
    <div class="grid grid-cols-2 place-items-center">
      <CardArtiste
        nom="Agoria"
        cat="Techno, techno de Détroit, deep house, ambient"
        image="public/img/Agoria.webp"
      ></CardArtiste>
      <CardArtiste
        nom="David Carretta"
        cat="Electro, electroclash, EBM"
        image="public/img/DavidCarretta.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Brodinski"
        cat="Hip-hop, Techno, French touch"
        image="public/img/Brodinski.webp"
      ></CardArtiste>
      <CardArtiste
        nom="DJ Shalom, Catman"
        cat="Musique électronique, funk, jazz, musiques improvisées"
        image="public/img/Catman.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Danger"
        cat="Synthwave , Darkwave"
        image="public/img/Danger.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Electrosexual"
        cat="Electro, electropop, techno, new wave"
        image="public/img/Electrosexual.webp"
      ></CardArtiste>
      <CardArtiste
        nom="DJ Fly"
        cat="Electro, hip-hop, dubstep"
        image="public/img/DJFly.webp"
      ></CardArtiste>
      <CardArtiste
        nom="F.E.M"
        cat="Techno, techno de Détroit, Musique électronique"
        image="public/img/FEM.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Fakear"
        cat="Électro, World, Chill-Out"
        image="public/img/Fakear.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Laurent Garnier"
        cat="Techno, techno de Détroit, electro, acid house, nu jazz"
        image="public/img/LaurentGarnier.webp"
      ></CardArtiste>
      <CardArtiste
        nom="French Kiwi Juice"
        cat="Electro, nu jazz, R&B"
        image="public/img/FrenchKiwiJuice.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Gesaffelstein"
        cat="Techno, electro, synthpop, electronic body music"
        image="public/img/Gesaffelstein.webp"
      ></CardArtiste>
      <CardArtiste
        nom="The Hacker"
        cat="Techno, electro, synthétiseur"
        image="public/img/TheHacker.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Koudlam"
        cat="Musique électronique , New Wave , Post-Punk , Synthpop"
        image="public/img/Koudlam.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Igorrr"
        cat="Breakcore, death metal, trip hop, black métal"
        image="public/img/Igorr.webp"
      ></CardArtiste>
      <CardArtiste
        nom="L.B. One"
        cat="Deep house, électro, techno"
        image="public/img/LBOne.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Madeon"
        cat="Electro house, pop, nu-disco"
        image="public/img/Madeon.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Mondkopf"
        cat="Musique électronique"
        image="public/img/Mondkopf.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Marst"
        cat="Musique électronique, Techno, House"
        image="public/img/Marst.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Panda Dub"
        cat="Dub, électro, techno"
        image="public/img/PandaDub.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Perturbator"
        cat="Électronique, Metal, Synthwave, Darksynth"
        image="public/img/Perturbator.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Max Season"
        cat="Hip-hop, RnB, Pop"
        image="public/img/MaxSeason.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Petit Biscuit"
        cat="Musique électronique, deep house, indie dance, ambient, downtempo"
        image="public/img/PetitBiscuit.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Kiddy Smile"
        cat="Electro, House"
        image="public/img/KiddySmile.webp"
      ></CardArtiste>
      <CardArtiste
        nom="Bob Sinclar"
        cat="French touch, house, dance, electro house, rap"
        image="public/img/BobSinclar.webp"
      ></CardArtiste>
      <CardArtiste
        nom="DJ Snake"
        cat="EDM trap, electro house, moombahton, hip-hop, rap"
        image="public/img/DJSnake.webp"
      ></CardArtiste>
    </div>
  </main>
</template>

<script>
import CardArtiste from "../components/CardArtiste.vue";

export default {
  components: { CardArtiste },
};
</script>