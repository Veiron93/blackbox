import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

// каталог
import Category from '../views/Catalog/Category.vue'
import CategoryAll from '../views/Catalog/CategoryAll.vue'
import Product from '../views/Catalog/Product.vue'

// акции
import IndexActions from '../views/Actions/Index.vue'
import ShowActions from '../views/Actions/Show.vue'

// страницы с ошибками
import NotFound from '../views/Errors/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/actions',
    name: 'actions',
    component: IndexActions
  },
  {
    path: '/actions/1',
    name: 'action',
    component: ShowActions
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/catalog/category/all',
    name: 'category-all',
    component: CategoryAll
  },
  {
    path: '/catalog/category/:id',
    name: 'category',
    component: Category
  },
  {
    path: '/catalog/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/delivery',
    name: 'delivery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Delivery.vue')
  },
  { 
    path: '/404', 
    name: '404', 
    component: NotFound, 
  }, { 
    path: '*', 
    redirect: '/404' 
  }
]

const router = new VueRouter({
  routes
})

export default router
