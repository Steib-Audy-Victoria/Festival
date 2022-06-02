import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import Page404 from '../views/Page404.vue'
import CreateArtistesView from '../views/CreateArtistesView.vue'
import DeleteArtistesView from '../views/DeleteArtistesView.vue'
import UpdateArtistesView from '../views/UpdateArtistesView.vue'
import GuideView from '../views/GuideView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programmation',
      name: 'programmation',
      component: ProgrammationView
    },
    {
      path: '/artistes',
      name: 'artistes',
      component: ArtistesView
    },
    {
      path: '/festival',
      name: 'festival',
      component: FestivalView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/concert',
      name: 'concert',
      component: ConcertView
    },
    {
      path: '/artiste',
      name: 'artiste',
      component: ArtisteView
    },
    {
      path: '/mentionsLegales',
      name: 'mentionsLegales',
      component: MentionsLegalesView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404
    },
    {
      path: '/createArtistes',
      name: 'createArtistes',
      component: CreateArtistesView
    },
    {
      path: '/deleteArtistes/:id',
      name: 'deleteArtistes',
      component: DeleteArtistesView
    },
    {
      path: '/updateArtistes/:id',
      name: 'updateArtistes',
      component: UpdateArtistesView
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView
    },

  ]
})

export default router
