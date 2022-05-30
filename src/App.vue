<template>
  <header class="flex justify-between items-center bg-white mx-2 my-1">
    <RouterLink to="/"><LogoRedLand></LogoRedLand></RouterLink>
    <RouterLink to="/">
      <h1 class="text-4xl font-chalkduster">
        <span class="text-Custom-red">Red</span> Land
      </h1>
    </RouterLink>
    <RouterLink to="/programmation">
      <h2 class="text-Custom-bordeaux font-monaco text-3xl">Programmation</h2>
    </RouterLink>
    <RouterLink to="/artistes">
      <h2 class="text-Custom-gray font-monaco text-3xl">Artistes</h2>
    </RouterLink>
    <RouterLink to="/festival">
      <h2 class="text-Custom-red font-monaco text-3xl">Festival</h2>
    </RouterLink>
    <RouterLink to="/contact">
      <h2 class="text-Custom-black font-monaco text-3xl">Contact</h2>
    </RouterLink>
  </header>

  <footer class="bg-Custom-gray bg-[url(src/assets/FondFooter.svg)] h-60">
    <nav>
      <ul
        class="flex justify-center items-center text-white list-disc text-2xl"
      >
        <RouterLink to="/programmation">
          <li class="mx-6">Programmation</li>
        </RouterLink>
        <RouterLink to="/artistes"><li class="mx-6">Artistes</li></RouterLink>
        <RouterLink to="/festival"><li class="mx-6">Festival</li></RouterLink>
        <RouterLink to="/contact"><li class="mx-6">Contact</li></RouterLink>
        <RouterLink to="/mentionsLegales"
          ><li class="mx-6">Mentions Légales</li></RouterLink
        >
      </ul>
    </nav>
    <div class="flex justify-between items-center mx-40">
      <Facebook></Facebook>
      <Instagram></Instagram>
      <Twitter></Twitter>
      <Youtube></Youtube>
    </div>
  </footer>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import LogoRedLand from "./components/icons/LogoRedLand.vue";
import Facebook from "./components/icons/Facebook.vue";
import Instagram from "./components/icons/Instagram.vue";
import Twitter from "./components/icons/Twitter.vue";
import Youtube from "./components/icons/Youtube.vue";

export default {
  name: "App",
  components: {
    LogoRedLand,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
  },
};
</script>

