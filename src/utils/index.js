import Vue from 'vue'
export function saveCollected(shopId, cartFoods) {
  // 根据cartFoods生成包含所有count数量的对象容器
  const cartCounts = cartFoods.reduce((pre, food) => {
    // 向pre中添加属性
    pre[food.id] = food.count
    // 返回pre
    return pre
  }, {})
  // 保存到sessionStorage
  sessionStorage.setItem(shopId + '_key', JSON.stringify(cartCounts))
}

export function getCartFoods(shop) {
  const cartFoods =[]
  //读取sessionStorage中的cartFoods
  const cartCounts = JSON.parse(sessionStorage.getItem(shop.id + '_key')) || {}
  //遍历出所有需要制定的count的food
  shop.goods.forEach(good=>{
    good.foods.forEach(food=>{
      const count = cartCounts[food.id]
      if (count>0) {
        Vue.set(food,'count',count)
        cartFoods.push(food)
      }
    })
  })
  return cartFoods
}