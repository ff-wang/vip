/* 
商家模块相关数据管理
*/
// import Vue from 'vue'
import {
  RECEIVE_SHOP_RODUCTS,
  RECEIVE_PRODUCT_DEATIL
} from '../mutation-types'

import {
  // reqGoods,
  // reqRatings,
  // reqInfo,
  reqShopProducts,
  reqProductsDetail
} from '../../api'

export default  {
  state: { 
    shopProducts: {}, // 当前商家
    productDetail: {}, // 当前商家商品详情
  },
  mutations: {

    /* 
    1. 接收一个新的数据
    2. 重置数据: 利用形参默认值
    */
    [RECEIVE_SHOP_RODUCTS] (state, {shopProducts={}}) {
      state.shopProducts = shopProducts
    },
    [RECEIVE_PRODUCT_DEATIL](state,{productDetail={}}){
      state.productDetail = productDetail
    }
  
  },
  actions: {
    /* 
    根据id获取对应的商家的异步action
    */
    async getShop({commit}) {
      // 发请求获取对应商家并更新数据
      const result = await reqShopProducts()
      if(result.code===0) {
        const shopProducts = result.data
        commit(RECEIVE_SHOP_RODUCTS, {shopProducts})
      }
    },
    async getProductDetail({commit}) {
      // 发请求获取对应商家商品详情
      const result = await reqProductsDetail()
      console.log(result)
      if(result.code===0) {
        const productDetail = result.data
        commit(RECEIVE_PRODUCT_DEATIL, {productDetail})
      }
    }
  },
  getters: { 
    /* 
    调用时机: 
      1. 初始显示
      2. 依赖数据发生改变   ===> 效率低
    */
    
  }
}