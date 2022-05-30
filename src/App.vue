<template>
  <header class="flex justify-between items-center bg-white mx-2 my-1">
    <LogoRedLand></LogoRedLand>
    <h1 class="text-4xl font-chalkduster">
      <span class="text-Custom-red">Red</span> Land
    </h1>
    <h2 class="text-Custom-bordeaux font-monaco text-3xl">Programmation</h2>
    <h2 class="text-Custom-gray font-monaco text-3xl">Artistes</h2>
    <h2 class="text-Custom-red font-monaco text-3xl">Festival</h2>
    <h2 class="text-Custom-black font-monaco text-3xl">Contact</h2>
  </header>
</template>

<script>
import LogoRedLand from "./components/icons/LogoRedLand.vue";

export default {
  name: "App",
  components: {
    LogoRedLand,
  },
};
</script>

