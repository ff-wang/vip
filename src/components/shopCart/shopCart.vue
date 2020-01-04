<template>
  <div>
    <div class="cart-box">
      <button class="icon">
        <i class="iconfont icon-gouwuche">
          <span class="num-brage" v-if="isAdd">{{cartProducts[0].count}}</span>
        </i>
        <span v-if="isAdd" class="text-box">
          <span>{{minute}}</span>
          <span>:</span>
          <span>{{second}}</span>
        </span>
      </button>
      <button class="vip-button-large" @click="addProduct">加入购物车</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import throttle from 'lodash/throttle'
  import { mapState } from 'vuex'
  export default {
    data(){
      return {
        isAdd:false,
        minute: 19, //分
        second: 59 //秒
      }
    },
    computed:{
      ...mapState({
        cartProducts: state => state.shop.cartProducts,
        productDetail:state => state.shop.productDetail
      })
    },
    methods:{
      // 添加购物车
      addProduct:throttle(function () {
        clearInterval(secondTime)
        clearInterval(minuteTime)
        this.minute = 19
        this.second = 59
        // 点击显示number
        this.isAdd = true
        // let count = 0
        // number添加
        if(this.productDetail&&this.productDetail.data){
          const product  = this.productDetail.data.product
          this.$store.commit('addCartProductCount',{product})

        }
        // 秒
        const secondTime = setInterval(() => {
          this.second = this.second -1
          if (this.second < 0) {
            this.second = 5
            if (this.minute <= 0) {
              clearInterval(secondTime)
              this.second = ''
              this.isAdd = false
            }
          }
        },1000)
        // 分
        const minuteTime = setInterval(() => {
          this.minute = this.minute -1
          if (this.minute <= 0) {
            clearInterval(minuteTime)
            this.minute = ''
            this.isAdd = false
          }
        }, 60000);
      },1000, {trailing: false})
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cart-box
  height 42px
  padding 12px 15px
  position fixed
  bottom 0
  background #ffffff
  width 100%
  display flex
  clearFix()
  .icon
    width 86px
    height 42px
    text-align center
    line-height 42px
    border none
    margin-right 5px
    border 1px solid #eeeeee
    background #ffffff
    .iconfont 
      font-size 22px
      color #585c64
      position relative
      .num-brage
        width 16px
        height 16px
        border-radius 50%
        background #de3d96
        color white
        position absolute
        right -7px
        top -7px
        font-size 10px
        text-align center
        line-height 16px
    .text-box
      margin-left 5px
  .vip-button-large
    height 42px
    width 252px
    background #de3d96
    border none 
    text-align center
    line-height 42px
    color #ffffff
</style>
