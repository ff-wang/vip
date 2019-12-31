/* 
包含n个接口请求函数的模块
*/
import ajax from './ajax'

// 获取指定shop商品
export const reqShopProducts = () => ajax('/gethomebottomList')

// 获取指定shop商品的详情 羽绒详情
export const reqProductsDetail = () => ajax('/getshopYuRongFirst')