<template>
  <main>
    <div
      class="
        bg-[url(public/img/AgoriaFond.webp)] bg-auto bg-center bg-no-repeat
        grid
        place-items-center
        w-screen
        h-screen
      "
    >
      <h2 class="text-Custom-bordeaux text-5xl">Agoria</h2>
    </div>
    <div class="text-lg flex justify-evenly text-center my-12 mt-20">
      <div>
        <p class="font-semibold">Jour 1, Scène 1 :</p>
        <p>Vendredi 22 juillet à 17h</p>
      </div>
      <div>
        <p class="font-semibold">Jour 3, Scène 3 :</p>
        <p>Dimanche 24 juillet à 14h</p>
      </div>
    </div>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        place-items-center
        xl:flex xl:justify-evenly
        my-12
        mb-20
      "
    >
      <img
        class="my-2"
        src="/img/AgoriaC1.webp"
        alt="Image de Agoria en Concert"
      />
      <img
        class="my-2"
        src="/img/AgoriaC2.webp"
        alt="Image de Agoria en Concert"
      />
      <img
        class="my-2"
        src="/img/AgoriaC3.webp"
        alt="Image de Agoria en Concert"
      />
    </div>
  </main>
</template>