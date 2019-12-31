<template>
  <div>
    <div class="cart-box">
      <button class="icon">
        <i class="iconfont icon-gouwuche"></i>
      </button>
      <button class="vip-button-large">加入购物车</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
  .vip-button-large
    height 42px
    width 252px
    background #de3d96
    border none 
    text-align center
    line-height 42px
    color #ffffff
</style>
