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
    <shopContent :shopProducts="products"></shopContent>
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
    <!-- 遮罩 -->
    <div class="mask" v-if="isShow" @click="share()"></div>
  </div>
  <!-- 分享 -->
  <div class="popup share-popup" v-if="isShow">
    <div class="share-panel">
      <div class="share-bar">
        <a class="icon" href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fm.vip.com%2Fbrand-100488547-0-0-0-1-0-1-20.html%3FbrandId%3D100488547%26tra_from%3Dm%253Ai%253A1572513420337_081a77a1b755eeb988a52a1948f870ae%253Ac%253Anature%253Awxclick%253Abrand_main_100488547_9_1%26from%3Dm%26device%3Di%26cid%3D1572513420337_081a77a1b755eeb988a52a1948f870ae%26f%3Dnature%253A0%253Abrand_main%26other%3Dwxclick%26mref%3Dbrand_main_100488547_9_1%26cid%3D1572513420337_081a77a1b755eeb988a52a1948f870ae%26share_type%3Dschedule%26msns%3Dshop_wap-0-qzone&title=%E7%B2%BE%E9%80%89%E5%93%81%E7%89%8C%EF%BC%8C100%25%E6%AD%A3%E5%93%81%E4%BF%9D%E8%AF%81+&summary=%E7%88%B1%E6%AD%A5ECCO%E7%94%B7%E5%A5%B3%E9%9E%8B%E4%B8%93%E5%9C%BA-%E5%93%81%E7%89%8C%E7%9F%A9%E7%8C%AE%EF%BC%8C%E5%94%AF%E5%93%81%E4%BC%9A%E4%B8%93%E4%BA%AB+&pics=%2F%2Fh2.appsimg.com%2Fa.appsimg.com%2Fupload%2Fbrand%2Fupcb%2F2019%2F12%2F26%2F158%2Fias_157734658295962_304x384_80.jpg&showcount=0">
          <i class="iconfont icon-qqkongjian"></i>
          <p>QQ空间</p>
        </a>
        <div class="icon">
          <i class="iconfont icon-fuzhilianjie"></i>
          <p>复制</p>
        </div>
      </div>
      <div class="share-btn-cancel" @click="isShow=false"><p>取消</p></div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import shopContent from '../../components/shopContent/shopContent'
  export default {
    components:{
      shopContent
    },
    data(){
      return{
        isChoosed:false,//点击有货商品
        isSelectedPrice:false,//点击价格
        isSelectedDiscunt:false,//点击折扣
        isCollected:false,
        isShow:false, //是否显示分享
        // shopProducts:{}//是否有货返回的数据
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
      // 点击分享
      share(){
        this.isShow = !this.isShow
      },
      // 收藏
      isCollect(){
        this.isCollected = !this.isCollected
      },
      // 选择是否有货
      select(){
        this.isChoosed = !this.isChoosed
        if (this.isChoosed && this.shopProducts.data) {
          const filterShopProducts = this.shopProducts.data.items.filter(item=>item.goodsAvailable)
          this.shopProducts.data.items = filterShopProducts
        }else{
          this.$store.dispatch('getShop')
        }
      },
      // 点击价格 折扣
      isChangPriceDiscont(option){ 
        // 如果点击价格 
        if (option===true) {
          this.isSelectedPrice = !this.isSelectedPrice
          this.isSelectedDiscunt = false
        }else{
          // 如果点击折扣
          this.isSelectedDiscunt = !this.isSelectedDiscunt
          this.isSelectedPrice = false
        }
      },
      productDetail(index){
        console.log(index)
        this.$router.push('/shop/productDetail')
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#warp
  position relative
  height 667px
  #shopContainer
    position absolute
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
      display flex
      justify-content space-around
      li 
        box-sizing border-box
        padding 0 19px
        border-right  1px solid #cccccc
        font-size 15px
        line-height 36px
        text-align center
        // background-image url('//h2.vipstatic.com/ms2-m.vipstatic.com/static/base/img/loading-goods-a25fb09a3e.png')
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
            margin-bottom 1px
            color #cccccc
          .icon-shaixuan
            font-size 18px
            margin-right 8px
            color #aaaaaa
        &:last-child
          border none 
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
    .mask
      width 100%
      height 100%
      background rgba(0,0,0,.6)
      position absolute
      left 0 
      top 0
      z-index 10
      // display none
  .popup
    position fixed
    bottom 0
    width 100%
    height 142px
    background pink 
    transition 1s
    z-index 20
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
