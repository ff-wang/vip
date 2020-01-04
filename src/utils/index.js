import Vue from 'vue'
// 保存商品到sessionStorang中
// productIdStr_key:{}
export function saveCartProducts(productId, cartProducts) {
  // 根据cartPrducts生成包含所有count数量的对象容器
  const cartCounts = cartProducts.reduce((pre, product) => {
    // 向pre中添加属性.
    pre[product.productId] = product.count
    // 返回pre
    return pre
  }, {})
  // 保存到sessionStorage
  sessionStorage.setItem(productId + '_key', JSON.stringify(cartCounts))
  console.log(productId)
}

export function getCartProducts(productDetail) {
  const cartProducts =[]
  //读取sessionStorage中的cartFoods
  const cartCounts = JSON.parse(sessionStorage.getItem(productDetail.productId + '_key')) || {}
  console.log(productDetail.productId)
  //遍历出所有需要制定的count的food
  cartProducts.forEach(product=>{
    const count = cartCounts[product.productId]
    if (count>0) {
      Vue.set(product,'count',count)
      cartProducts.push(product)
    }
  })
  return cartProducts
}