

export default [
  {
    path: '/shop',
    // component: MSite,
    component: () => import('../pages/shop/shop.vue'),
  },
  {
    path: '/shop/productDetail',
    component: () => import('../pages/productDetail/productDetail.vue')
  }
  
]