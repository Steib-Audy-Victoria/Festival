<template>
  <header>
    <div class="flex justify-between items-center bg-white mx-2 my-1">
      <RouterLink to="/"><LogoRedLand></LogoRedLand></RouterLink>
      <RouterLink to="/">
        <h1 class="text-4xl font-chalkduster">
          <span class="text-Custom-red">Red</span> Land
        </h1>
      </RouterLink>
      <!--Menu Bureau-->
      <div class="hidden lg:block">
        <div class="flex justify-between">
          <RouterLink class="mx-4" to="/programmation">
            <h2 class="text-Custom-bordeaux font-monaco text-3xl">
              Programmation
            </h2>
          </RouterLink>
          <RouterLink class="mx-4" to="/artistes">
            <h2 class="text-Custom-gray font-monaco text-3xl">Artistes</h2>
          </RouterLink>
          <RouterLink class="mx-4" to="/festival">
            <h2 class="text-Custom-red font-monaco text-3xl">Festival</h2>
          </RouterLink>
          <RouterLink class="mx-4" to="/contact">
            <h2 class="text-Custom-black font-monaco text-3xl">Contact</h2>
          </RouterLink>
        </div>
      </div>
      <!--Menu Mobile-->
      <div class="block lg:hidden">
        <button
          class="relative z-50 text-xl"
          aria-haspopup="true"
          aria-controls="menu"
          :aria-expanded="menuOuvert"
          @click="menuOuvert = !menuOuvert"
        >
          <Menu></Menu>
        </button>
        <div
          id="menu"
          class="
            translate-x-full
            motion-safe:duration-1000 motion-safe:transition-transform
            fixed
            inset-0
            bg-white
            pt-32
          "
          :class="{ 'translate-x-0': menuOuvert }"
        >
          <div class="grid grid-cols-1 place-items-center">
            <RouterLink to="/programmation">
              <CardAccueil
                Msg="Programmation"
                class="text-Custom-bordeaux"
              ></CardAccueil>
            </RouterLink>
            <RouterLink to="/artistes">
              <CardAccueil
                Msg="Artistes"
                class="text-Custom-gray"
              ></CardAccueil>
            </RouterLink>
            <RouterLink to="/festival">
              <CardAccueil Msg="Festival" class="text-Custom-red"></CardAccueil>
            </RouterLink>
            <RouterLink to="/contact">
              <CardAccueil
                Msg="Contact"
                class="text-Custom-black"
              ></CardAccueil>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView />

  <footer
    class="
      bg-Custom-gray bg-[url(public/FondFooter.svg)]
      h-60
      bg-no-repeat
      grid
      place-content-center
    "
  >
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
    <div class="flex justify-between items-center mx-40 mt-10">
      <Facebook></Facebook>
      <Instagram></Instagram>
      <Twitter></Twitter>
      <Youtube></Youtube>
    </div>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import LogoRedLand from "./components/icons/LogoRedLand.vue";
import Facebook from "./components/icons/Facebook.vue";
import Instagram from "./components/icons/Instagram.vue";
import Twitter from "./components/icons/Twitter.vue";
import Youtube from "./components/icons/Youtube.vue";
import Menu from "./components/icons/Menu.vue";
import CardAccueil from "./components/CardAccueil.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
  components: {
    LogoRedLand,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Menu,
    CardAccueil,
  },
};
</script>