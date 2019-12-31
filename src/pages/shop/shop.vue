<template>
<div id="warp">
  <div id="shopContainer">
    <!-- 头部 -->
    <header>
      <div class="back">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="title">
        <span>六福珠宝-年末好货钜惠才能发放</span>
      </div>
      <div class="icon">
        <i class="iconfont" :class="isCollected?'icon-icon4':'icon-shoucang'" @click="isCollect"></i>
        <i class="iconfont icon-zhuanfa" @click="share()"></i>
      </div>
    </header>
    <!-- 导航 -->
    <ul class="nav">
      <li @click="select" :class="{active:isChoosed}">
        <div class="outcircle" :class="{active:isChoosed}">
          <div class="incircle" :class="{active:isChoosed}"></div>
        </div>
        <span :class="{active:isChoosed}">有货商品</span>
      </li>
      <li @click="isChangPriceDiscont(true)">
        <div class="icon">
          <i class="iconfont icon-shangjiantou"></i>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <span :class="{active:isSelectedPrice}">价格</span>
      </li>
      <li @click="isChangPriceDiscont(false)">
        <div class="icon">
          <i class="iconfont icon-shangjiantou"></i>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <span :class="{active:isSelectedDiscunt}">折扣</span>
      </li>
      <li>
        <div class="icon">
          <i class="iconfont icon-shaixuan"></i>
        </div>
        <span>筛选</span>
      </li>
    </ul>
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
          <img :src="product.goodsImageTags.image5.image" alt="">
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
    <!-- 遮罩 -->
    <div class="mask"></div>
  </div>
  <!-- 分享 -->
  <div class="popup share-popup" v-if="isShow">
    <div class="share-panel">
      <div class="share-bar">
        <div class="icon ">
          <i class="iconfont icon-qqkongjian"></i>
          <p>QQ空间</p>
        </div>
        <div class="icon">
          <i class="iconfont icon-fuzhilianjie"></i>
          <p>复制</p>
        </div>
      </div>
      <div class="share-btn-cancel"><p>取消</p></div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        isChoosed:false,//点击有货商品
        isSelectedPrice:false,//点击价格
        isSelectedDiscunt:false,//点击折扣
        isCollected:false,
        isShow:false //是否显示分享
      }
    },
    computed: {
      ...mapState({
        shopProducts: state => state.shop.shopProducts || {}
      })
    },
    mounted(){
      this.$store.dispatch('getShop')
    },
    methods:{
      share(){
        this.isShow = !this.isShow
      },
      isCollect(){
        this.isCollected = !this.isCollected
      },
      select(){
        this.isChoosed = !this.isChoosed
      },
      isChangPriceDiscont(option){
        if (option===true) {
          this.isSelectedPrice = !this.isSelectedPrice
          this.isSelectedDiscunt = false
        }else{
          this.isSelectedDiscunt = !this.isSelectedDiscunt
          this.isSelectedPrice = false
        }
      },
      productDetail(index){
        console.log(index)
        this.$router.push('/shop/productDetail')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#warp
  position relative
  height 667px
  #shopContainer
    position relative
    header 
      width 100%
      height 44px
      display flex
      line-height 44px
      color #555
      background #fbfbfa
      border-bottom 1px solid #eeeeee
      .back
        width 52px
        height 100%
        text-align center
        .iconfont 
          font-size 22px
      .title
        width 76%
        font-size 22px
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        margin-right 5px
      .icon
        margin-left 3px
        .iconfont 
          font-size 30px
          margin-right 6px
        .icon-icon4
          color #dd3d97
    .nav
      width 100%
      height 36px
      border-bottom  1px solid #cccccc
      background #ffffff
      li 
        box-sizing border-box
        float left
        padding 0 19px
        border-right  1px solid #cccccc
        font-size 15px
        line-height 36px
        background-image url('//h2.vipstatic.com/ms2-m.vipstatic.com/static/base/img/loading-goods-a25fb09a3e.png')
        .outcircle
          float left
          width 14px
          height 14px
          border 1px solid #aaaaaa
          border-radius 50%
          margin-top 10px
          &.active
            border 1px solid #de3d96
          .incircle
            width 8px
            height 8px
            border 1px solid #aaaaaa
            margin 2px
            border-radius 50%
            &.active
              background-color #de3d96
              border 1px solid #de3d96
        span 
          display block
          float left
          margin-left 3px
          &.active
            color #de3d96 
        .icon
          float left
          margin-right 6px
          .iconfont
            width 5px
            height 5px
            display block
            font-size 10px
            margin-bottom 2px
            color #cccccc
          .icon-shaixuan
            font-size 18px
            margin-right 8px
            color #aaaaaa
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
        .product
          width 178px
          height 330px
          background #ffffff
          position relative
          margin-bottom 10px
          float left 
          margin 0 4px 10px
          .u-icon
            img 
              position absolute
              top 10px
              right 10px
              width 34px
              height 34px
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
    .mask
      width 100%
      height 100%
      background rgba(0,0,0,.6)
      position absolute
      left 0 
      top 0
      z-index 10
      display none
    .footer-nav
      height 12px
      padding 8.7px 8.7px 0
      color #585c64
      font-size 12px
      span
        margin 0 4.3px
      .f-left
        float left 
      .f-right
        float right 
    .copyright
      display block
      color #ccc
      padding 8px
      margin-top 5px
      height 37px
      font-size 11px
      text-align center
    .psb
      text-align center
      color #ccc
      font-size 11px
      .iconfont
        font-size 16px
    .m-common-footer
      height 157px
      .footer_download
        height 37px
        padding 8.7px 13px
        bottom-border-1px(#ccc)
        .download-logo
          width 36px
          height 36px
          display inline-block
          background #ea4c88
          border-radius 10px
          margin-right 8px
          color #ffffff
          font-size 11px
          text-align center
          line-height 36px
        .download-text
          color #222
          font-size 12px
        .download-btn
          display inline-block
          width 21px
          height 24px
          float right
          padding 0 19px 1px
          margin-top 7px
          border 1px solid #cf3e8e
          color #cf3e8e
          font-size 10px
          background-color #f3f4f5
          text-align center
          line-height 24px
          border-radius 2px
  .popup
    position fixed
    bottom 0
    width 100%
    height 142px
    background pink 
    transition 1s
    // display none
    .share-panel
      height 100%
      .share-bar
        height 94px
        background hsla(0,0%,100%,.95)
        .icon
          float left 
          margin 10px
          width 93px
          height 80px
          text-align center
          .iconfont
            font-size 40px
            vertical-align middle
            line-height 60px
          .icon-qqkongjian
            color orange 
          p
            font-size 12px
            
      .share-btn-cancel
        height 48px
        color #157efb
        background #ffffff
        text-align center
        line-height 48px
        font-size 16px

</style>
