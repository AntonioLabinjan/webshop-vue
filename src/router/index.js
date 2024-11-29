import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductPage from '@/views/ProductPage.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import CartPage from '@/views/CartPage.vue';
import HotOffers from '@/views/HotOffers.vue';
import SupportSite from '@/views/SupportSite.vue';
import FilteredProductsPage from '@/components/FilteredProductsPage.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: HomePage,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
  },
  {
    path: '/hot',
    name: 'HotOffers',
    component: HotOffers,
    props: true,
  },
  {
path: '/support',
name: 'SupportSite',
component: SupportSite,

  },

  /*
  {

    path: '/product',
    name: 'ProductPage',
    component: ProductPage,
  },
  */
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/filtered-products',
      name: 'filtered-products',
      component: FilteredProductsPage,
      props: route => ({ query: route.query }),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
