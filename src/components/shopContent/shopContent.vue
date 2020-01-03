<template>
  <!-- 内容 -->
  <div class="content">
    <div class="day">
      <span>剩2天</span>
    </div>
    <div class="productList" v-if="shopProducts.data">
      <div class="product"  @click="productDetail(index)" v-for="(product,index) in shopProducts.data.items" :key="index">
        <div class="u-icon" v-if="product.icons">
          <img :src="product.icons[0].image" alt="">
        </div>
        <div class="img">
          <img :src="product.goodsImageTags.image5.image" alt="">
        </div>
        <div class="product-price-wrap">
          <!-- 普通专享价 -->
          <div class="vip-price-wrap">
            <div class="vip-price-msg">
              <span>{{product.goodsPriceTag.pricePrefix}}</span>
            </div>
            <div class="vip-promotion-price">
              <span class="promotion-price-wrapper">¥{{product.goodsPriceTag.salePrice}}</span>
            </div>
          </div>
          <!-- 市场价折扣 -->
          <div class="grally-price-wrapper">
            <span class="grally-price">
              <span>唯品价¥{{product.goodsPriceTag.referPrice}}</span>
            </span>
            <span class="mark-price">¥{{product.goodsPriceTag.marketPrice}}</span>
            <span class="discount">{{product.goodsPriceTag.discount}}</span>
          </div>
        </div>
        <!-- 商品信息 -->
        <div class="product-name">
          {{product.goodsName}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    // props:['shopProducts'],
    computed: {
      ...mapState({
        shopProducts: state => state.shop.shopProducts
      })
    },
    methods:{
      productDetail(index){
        console.log(index)
        this.$router.push('/shop/productDetail')
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .content
    .day
      width 100%
      height 35px
      color #999999
      font-size 12px
      float right
      line-height 35px
      padding-right 5px
      background white
      span 
        float right
    .productList
      width 100%
      background #f3f4f5
      display flex
      flex-wrap wrap
      justify-content space-around
      &:after
        content ''
        width 178px
        height 0
      .product
        width 178px
        height 330px
        background #ffffff
        position relative
        margin-bottom 10px
        margin 0 4px 10px
        .u-icon
          img 
            position absolute
            top 10px
            right 10px
            width 34px
            height 34px
        .img 
          width 100%
          height 224px
          background-image url('//h2.vipstatic.com/ms2-m.vipstatic.com/static/base/img/loading-goods-a25fb09a3e.png')
          background-size 100% 100%
          img 
            width 100%
            height 224px
        .product-price-wrap
          width 158px
          height 32px
          padding 0 10px 
          margin 10px 0
          .vip-price-wrap
            height 16px
            display flex
            .vip-price-msg
              width 30px
              height 16px
              padding 0 4px
              white-space: nowrap
              line-height 16px
              color #ffffff
              font-size 10px
              background-image: linear-gradient(270deg,#cb78dc,#de3d96)
            .vip-promotion-price
              margin-left 4px
              font-size 16px
              color #222222
          .grally-price-wrapper
            height 12px
            width 100%
            margin-top 4px
            font-size 10px
            color #98989f
            line-height 12px
            span 
              margin-right 4px
            .market-price
                text-decoration:line-through
        .product-name 
          width 158px
          height 17px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          color #585c64
          font-size 12px
          padding 0 10px
          line-height 17px
 
</style>
