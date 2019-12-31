<template>
  <div class="product-detail-wrap" v-if="productDetail.data">
    <!-- 商品信息头部 -->
    <div class="product-detail">
      <!-- 图片 -->
      <div class="g-relative">
        <div class="bar-left go-back iconbar-box" @click="back">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="bar-right iconbar-box iconbar-box">
          <i class="iconfont" :class="isCollected?'icon-icon4':'icon-shoucang'" @click="isCollect"></i>
          <i class="iconfont icon-zhuanfa"></i>
        </div>
        <!-- 轮播图 -->
        <div class="swiper-container" v-if="productDetail.data">
          <div class="swiper-wrapper" v-if="productDetail.data.product">
              <div class="swiper-slide" v-for="(img,index) in productDetail.data.product.previewImages" :key="
              index">
                <img :src="img.imageUrl" alt="">
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 价格 -->
      <div class="price-wrap" v-if="productDetail.data">
        <div class="price-bar" v-if="productDetail.data.product">
          <div class="main-prices">
            <span class="icon" v-if="productDetail.data.discont">折后价</span>
            <span class="price">¥{{productDetail.data.product.max_vipshop_price}}</span>
            <div class="help-prices">
              <span class="market-price">￥{{productDetail.data.product.marketPrice}}</span>
              <span class="discount">{{productDetail.data.product.discount}}</span>
            </div>
          </div>
          <div class="refer-prices">
            <span class="rerfer-price" >唯品价  ¥{{productDetail.data.product.max_vipshop_price}}</span>
          </div>
        </div>
      </div>
      <!-- 商品名称 -->
      <div class="product-name">
        <p class="name-box">
          <span class="name">{{productDetail.data.product.longTitle}}</span>
        </p>
        <!-- <p class="sub-name">羊毛48%	纽扣拼接	对称口袋</p> -->
      </div>
    </div>
    <!-- 商品颜色尺码选择 -->
    <div class="product-sku" v-if="productDetail.data">
      <div class="sku-color" v-if="productDetail.data.product">
        <div class="sku-hd">
          <span class="title">颜色</span>
        </div>
        <div class="vip-grid-select" >
          <div class="grid-option" v-for="(color,index) in productDetail.data.product.productColor" :key="color.id"
          @click="isSelect1(index)" :class="{active:currentIndex1===index}">
            <img :src="color.image" alt="">
            <span class="text">{{color.color}}</span>
            <div class="icon" v-show="currentIndex1===index">
              <i class="iconfont icon-duihao checked"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="sku-size" v-if="productDetail.data">
        <div class="sku-hd">
          <span class="title">尺码</span>
          <span class="link">查看尺码表</span>
        </div>
        <div class="vip-grid-select" v-if="productDetail.data.product">
          <div class="grid-option" v-for="(size,index) in productDetail.data.product.productSize" :key="index"
          @click="isSelect2(index)" :class="{active:currentIndex2===index}">
            <span class="text">{{size}}</span>
            <div class="icon" v-show="currentIndex2===index">
              <i class=" iconfont icon-duihao checked"></i>
            </div>
          </div>
          <!-- <div class="grid-option disable">
            <span class="text">L</span>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 配送至 地址 -->
    <div class="product-address">
      <div class="address-box">
        <span class="title">配送至</span>
        <span class="address">北京市.北京市.昌平区</span>
        <i class="iconfont icon-address"></i>
      </div>
    </div>
    <!-- 运费 -->
    <div class="product-freight" v-if="productDetail.data">
      <div class="freight" v-if="productDetail.data.brand.freight">
        <span class="title">运费</span>
        <span class="text">{{productDetail.data.brand.freight}}</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAGCAYAAADUtS5UAAAAAXNSR0IArs4c6QAAAPpJREFUKBW9krEKwkAMhi9pBSeh4OgmunZx8A26udUH8En6JD6A3dx8AwUXV8XNTaHoIIL2zvwtwXJ09uCaP1+SptcLOedovlj02XZ6Rpbl92O1XN6IyMH3V5qmQdCNJhIfISb1p/JV7PM8L/1c+FmWhcfzZeYcT+ET2e14OFiHVdMyjOQV4IZFC4O84uEvNJXPi93vs2JhSNv5ufDR1DqTSE0VlrpEmGE9abOojWlcT6o+bBvTuJ5UfVgwboJ/asad+g3bmObgTlWrbWMaw52qVgvGGCQbfAr5XyU2NJgm+RaDJJNwIAqe2NA18zNrH4PEZDZk+I4NDfYFOghtioWPVukAAAAASUVORK5CYII=" alt="">
      </div>
    </div>
    <!-- 唯品会服务 -->
    <div class="product-services">
      <div class="services-bar">
        <ul class="services-list">
          <li class="service">
            <i class="iconfont icon-dui"></i>
            <span class="title">唯品会自营</span>
          </li>
          <li class="service">
            <i class="iconfont icon-dui"></i>
            <span class="title">7天无理由退货</span>
          </li>
          <li class="service">
            <i class="iconfont icon-dui"></i>
            <span class="title">退货返10元唯品币</span>
          </li>
          <li class="service">
            <i class="iconfont icon-dui"></i>
            <span class="title">7天可换</span>
          </li>
          <li class="service">
            <i class="iconfont icon-dui"></i>
            <span class="title">买赠唯品币</span>
          </li>
        </ul>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAGCAYAAADUtS5UAAAAAXNSR0IArs4c6QAAAPpJREFUKBW9krEKwkAMhi9pBSeh4OgmunZx8A26udUH8En6JD6A3dx8AwUXV8XNTaHoIIL2zvwtwXJ09uCaP1+SptcLOedovlj02XZ6Rpbl92O1XN6IyMH3V5qmQdCNJhIfISb1p/JV7PM8L/1c+FmWhcfzZeYcT+ET2e14OFiHVdMyjOQV4IZFC4O84uEvNJXPi93vs2JhSNv5ufDR1DqTSE0VlrpEmGE9abOojWlcT6o+bBvTuJ5UfVgwboJ/asad+g3bmObgTlWrbWMaw52qVgvGGCQbfAr5XyU2NJgm+RaDJJNwIAqe2NA18zNrH4PEZDZk+I4NDfYFOghtioWPVukAAAAASUVORK5CYII=" alt="">
      </div>
    </div>
    <!-- 价格走势 -->
    <div class="product-price-chart" v-if="productDetail.data">
      <div class="title">价格走势</div>
      <div class="bg bg-image-v">
        <div class="item-flex v-position1" v-if="productDetail.data.product">
          <span class="m1">历史售卖价</span>
          <span class="p1 m1">¥{{productDetail.data.product.min_market_price}}</span>
        </div>
        <div class="item-flex v-position2" v-if="productDetail.data.product">
          <span class="m2">折后价</span>
          <span class="p2">¥{{productDetail.data.product.salePrice}}</span>
        </div>
        <div class="item-flex v-position3" v-if="productDetail.data.product">
          <span class="m1">活动结束后</span>
          <span class="p1 m1">¥{{productDetail.data.product.min_market_price}}</span>
        </div>
      </div>
    </div>
    <!-- 品牌 -->
    <div class="product-brand" v-if="productDetail.data">
      <div class="brand-hd" v-if="productDetail.data.product">
        <div class="brand">
          <div class="logo">
            <img :src="productDetail.data.product.brandStoreLogo" alt="">
          </div>
          <div class="info">
            <p class="brand-name">
              {{productDetail.data.product.brandStoreName}}
            </p>
            <p class="brand-desc">
              {{productDetail.data.product.brandStoreSlogan}}
            </p>
          </div>
        </div>
         <button class="collection">收藏</button>
      </div>
      <div class="brand-ft">
        <span class="link">查看品牌</span>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div class="product-params" v-if="productDetail.data">
      <div class="title">商品介绍</div>
      <ul class="params-list" v-if="productDetail.data.product">
        <li class="item">
          <span class="name">产地 :</span>
          <span class="params">{{productDetail.data.product.areaOutput}}</span>
        </li>
        <li class="item" v-for="(item,index) in productDetail.data.product.attrSpecProps" :key="index">
          <span class="name">{{item.attributeName}} :</span>
          <span class="params">{{item.values[0].optionName}}</span>
        </li>
      </ul>
      <div class="btn">
        <span>展开全部</span>
        <i class="iconfont icon-xiajiantou"></i>
        <!-- <i class="iconfont icon-shangjiantou"></i> -->
      </div>
    </div>
    <!-- 图文详情 -->
    <div class="product-graphic" v-if="productDetail.data.product">
      <div class="title">图文详情</div>
      <div class="quality-promise">
        <img src="https://h2a.appsimg.com/b.appsimg.com/2017/08/11/161/1502443448261.png!85.webp" alt="">
      </div>

      <img v-for="img in productDetail.data.product.detailImages" 
      :key="img.imageIndex" :src="img.imageUrl" alt="">

    </div>
    <!-- 价格说明 -->
    <div class="product-sale-price-container">
      <div class="product-sale-price">
        <div class="title">价格说明</div>
        <div class="content">
          <p class="item">
        唯品会展示的中间未划横线价格（显示如¥799）为唯品会销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。
          </p>
          <p class="item">
        唯品会展示的中间划横线价格（显示如 ¥2899）为参考价，采集自品牌专柜标价、商品吊牌价、品牌官网价格或由供应商提供的正品零售价；由于地区、时间、货币汇率等的差异及存在品牌方调价、市场行情波动、产品批次等因素，品牌专柜标价、商品吊牌价等可能会与您购物时网页显示的划线价不一致。该价格仅供您参考。
          </p>
          <p class="item">
            
        折扣比为唯品会销售价与参考价的对比（该值四舍五入后采小数点后1位，如¥799/¥2899=0.2756=2.8折），该对比值仅供您参考，不作为结算基数。
      
          </p>
        </div>
      </div>
    </div>
    <!-- 价格到底 -->
    <div class="product-indicator">
      
      —· 已经到底啦，再往上逛逛吧 ·—
    
    </div>
    <!-- 底部 -->
    <div class="m-common-footer">
      <div class="footer_download">
        <span class="download-logo">
          <i class="icon-logo">唯品会</i>
        </span>
        <span class="download-text">唯品会客户端，特卖抢不停</span>
        <span class="download-btn">下载</span>
      </div>
      <div class="footer-nav">
        <p class="f-left">
          <span>唯品会首页</span>
          <span>关于我们</span>
        </p>
        <p class="f-right">
          <span>登录</span>
          <span>注册</span>
        </p>
      </div>
      <p class="copyright">Copyright © 2008-2019 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
      <p class="psb">
        <i class="iconfont icon-guohui"></i>
        <span>粤公网安备 44010302000068号</span>
      </p>
    </div>
    <ShopCart></ShopCart>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import {mapState} from 'vuex'
  import ShopCart from '../../components/shopCart/shopCart'
  export default {
    components:{
      ShopCart
    },
    data(){
      return {
        isSelected:false,
        currentIndex1:0,
        currentIndex2:'',
        isCollected:false
      }
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      }),
      this.$store.dispatch('getProductDetail')
    },
    computed: {
      ...mapState({
        productDetail: state => state.shop.productDetail || {}
      })
    },
    methods:{
      back(){
        this.$router.back()
      },
      isSelect1(index){
        this.currentIndex1 = index
      },
      isSelect2(index){
        this.currentIndex2 = index
      },
      isCollect(){
        this.isCollected = !this.isCollected
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .product-detail-wrap
    background #f3f4f5 
    overflow hidden
    // <!-- 商品信息头部 -->
    .product-detail
      background #ffffff
      .g-relative
        position relative
        height 375px
        width 100%
        .swiper-container
          width 100%
          height 100% 
          .swiper-slide
            img
              width 100%
              height 100%
        .iconbar-box
          position absolute 
          top 10px 
          background-color rgba(0,0,0,.5)
          color #ffffff
          text-align center
          z-index 9
        .bar-left
          left 10px
          width 40px
          height 40px
          border-radius 50%
          .iconfont
            font-size 20px
            line-height 40px
        .bar-right
          right 10px
          width 53px
          height 28px
          padding  0 15px 4px 15px
          border-radius 20px
          .iconfont
            font-size 28px
            line-height 32px
          .icon-zhuanfa
            margin-left 4px
          .icon-icon4 
            color #de3d96
        .product-swipe
          width 100%
          height 100%
          background-color pink
      .price-wrap
        height 56px
        width 100%
        padding-top 12px
        .price-bar
          width 200px
          height 44px
          margin-left 15px
          .main-prices
            width 200px
            height 25px
            display flex
            line-height 25px
            .icon
              background-image: linear-gradient(270deg,#cb78dc,#de3d96)
              border-radius 10px
              font-size 12px
              color #ffffff
              margin-right 5px
            .price
              width 59px
              font-size 25px
            .help-prices
                width 88px
                height 14px
                color #98989f
                font-size 14px
                margin-top 3px
                .discount
                  margin-left 7px
                .market-price
                  text-decoration:line-through
          .refer-prices
            width 79px
            height 14px
            color #98989f
            font-size 14px
            margin-top 6px
      .product-name
        width 345px
        padding 0 15px 15px 15px
      .name-box
        .name
          color #222
          font-size 14px
      .sub-name
        height 14px
        margin-top 6px
        color #98989f
        font-size 12px
    //<!-- 商品颜色尺码选择 -->
    .product-sku
      width 100%
      background #ffffff
      margin-top 8px
      .sku-color
        padding 15px 0 15px 15px
        .sku-hd
          height 14px
          .title
            color #222
            font-size 14px
            font-weight 700
        .vip-grid-select
          display flex
          flex-wrap wrap
          .grid-option
            width 103px
            height 30px
            margin-top 12px
            border 1px solid #c5c5c5 
            box-sizing border-box
            display flex
            line-height 30px
            position relative
            margin-right 15px
            &.active 
              border 1px solid #de3d96
            img
              width 19px
              height 19px
              margin-right 7px
              margin-top 5px
              margin-left 3px
            .text
              color #222
              font-size 12px
              margin-left 12px
            .icon
              width: 0
              height: 0
              position absolute
              right 0
              bottom 0
              border-bottom: 18px solid #de3d96
              border-left: 18px solid transparent
              .iconfont
                color #ffffff
                font-size 12px
                position absolute
                right 0
      .sku-size
        padding 15px 0 15px 15px
        .sku-hd
          height 14px
          .title
            float left 
            color #222
            font-size 14px
            font-weight 700
          .link
            float right
            margin-right 15px
            color #4a90e2
            font 12px PingFangSC-Regular
        .vip-grid-select
          display flex
          .grid-option
            width 120px
            height 30px
            margin-top 12px
            border 1px solid #c5c5c5 
            line-height 30px
            position relative
            margin-right 15px
            box-sizing border-box
            text-align center
            line-height 30px
            &.active 
              border 1px solid #de3d96
            &.disable
              background hsla(0,0%,95%,.7)
            .text
              color #222
              font-size 12px
              text-align center
            .icon
              width: 0
              height: 0
              position absolute
              right 0
              bottom 0
              border-bottom: 18px solid #de3d96
              border-left: 18px solid transparent
              .iconfont
                color #ffffff
                font-size 12px
                position absolute
                right 0
    // 配送至 地址
    .product-address
      width 100%
      height 14px
      padding 20px 15px
      margin-top 8px
      background #ffffff
      .address-box
        height 14px
        .title
          color #222222
          font 14px
          font-weight 700
        .address
          color #585c64
          font-size 12px
          margin 0 5px
        .iconfont 
          color #b9bec7
          font-size 18px
          vertical-align bottom
    .product-freight
      height 29px
      padding 10px 15px
      background #ffffff
      top-border-1px(#eeeeee)
      line-height 29px
      .freight
        .title
          color #222222
          font 14px
          font-weight 700
        .text
          color #585c64
          font-size 12px
          margin 0 5px
        img 
          width 15px
          height 3px 
          float right
          margin-top 15px
    .product-services
      height 79px
      width 100%
      background #ffffff    
      .services-bar
        height 59px
        padding 10px 15px
        margin-top 8px   
        .services-list
          .service
            height 29.6px
            margin-right 15px
            float left
            .iconfont
              width 13px
              height 28px
              font-size 12px
              color #e80080
            .title
              font-size 12px
              margin-left 3px
              color #585c64
        img 
          width 15px
          height 3px
          float right 
    .product-price-chart
      height 194px
      padding 20px 15px
      margin-top 8px
      background #ffffff
      .title
        height 14px
        margin-bottom 20px
        font-size 14px
        color #222
        font-weight 700
      .bg
        height 160px
        background skyblue 
        background-image url(//h2.vipstatic.com/ms2-m.vipstatic.com/static_v2/img/price-chart-v.04d0fbc.png)
        background-size 100% 100%
        position relative
        .item-flex
          position absolute
          span 
            margin-left 4px
          .m1
            color #ada5c5
            font-size 12px
          .p1
            font-size 14px
          .m2
            color #e739c4
            font-size 14px
          .p2
            color #222
            font-size 16px
        .v-position1
          top 13px
          left 10px
        .v-position2
          bottom 19px
          left 140px
        .v-position3
          top 13px
          right 40px
    // 品牌
    .product-brand
      height 126px
      width 100%
      margin-top 7px
      background #ffffff
      .brand-hd
        height 52px
        padding 13px
        bottom-border-1px(#eee)
        .brand
          height 52px
          float left 
          display flex
          .logo
            border 1px solid #eeeeee
            width 52px
            height 52px
            margin-right 10px
            line-height 60px
            img
              width 100%
          .info
            width 165px
            height 38px  
            margin-top 5px
            .brand-name 
              font-size 14px
              color #222222
              width 153px
              height 14px
              padding-right 12px
            .brand-desc
              margin-top 4px
              height 20px
              color #98989f
              font-size 12px
        .collection
          float right
          width 55px
          height 20px
          border 1px solid #de3d96
          border-radius 5px
          text-align center
          color #de3d96
          line-height 20px
          background #ffffff
          margin-top 15px
      .brand-ft
        height 21px
        padding 13px
        text-align center
        .link
          line-height 13px
          color #585c64
          font-size 12px
    //商品介绍
    .product-params
      padding 17px 13px
      margin-top 7px
      background #fff
      .title
        height 12px
        color #222222
        font-weight 700  
        font-size 12px
      .params-list
        padding-bottom 14px
        .item
          height 16px
          margin-top 13px
          .name
            margin-right 13px
            display inline-block
            width 61px
            height 12px
            text-overflow ellipsis
            color #98989f
            overflow hidden
            font-size 12px
            vertical-align bottom 
          .params
            color #585c64
            font-size 12px
            vertical-align bottom 
      .btn
        height 10px
        float right
        span 
          font-size 12px
          color #989898
          padding-right 3px
        .iconfont
          color #989898
          font-size 12px
    // 图文详情
    .product-graphic 
      height 100%
      margin-top 7px
      padding-bottom 17px
      background #ffffff
      display flex
      flex-direction column
      .title       
        height 12px
        padding 17px 13px
        color #222
        font-size 12p
      .quality-promise
        height 74px
        padding 17px
        img 
          width 100%
          height 100%
      img 
        width 100%
        height 100%
    .product-sale-price-container
      height 242px
      background #ffffff
      .product-sale-price
        height 224px
        padding 0 13px 17px
        .title
          height 12px
          color #222
          font-weight 700
          font-size 12px
        .content
          height 176px
          padding-bottom 13px
          .item
            margin-top 13px
            color #585c64
            font-size 11px
            line-height 16px
    .product-indicator
      height 34px
      text-align center
      line-height 34px
      color #98989f
      font-size 12px
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
</style>
