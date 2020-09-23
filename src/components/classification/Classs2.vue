<template>
  <div class="Box">
    <router-link to="/classification/Search">
      <div class="searchBox">
        <div class="search">
          <i class="el-icon-search"></i>
          <span class="tt">搜素鲜花、蛋糕、礼品</span>
        </div>
      </div>
    </router-link>
    <div class="section">
      <el-row>
        <el-col :span="6">
          <div>
            <router-link to="/classification/Hot" class="hot">热门推荐</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot2" class="hot">鲜花</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot3" class="hot">永生花</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot4" class="hot">蛋糕</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot5" class="hot">特色礼品</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot6" class="hot">礼篮</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot7" class="hot">绿植花卉</router-link>
          </div>
        </el-col>
        <el-col :span="18" class="view">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
    <div class="Footer">
      <el-row>
        <el-col :span="6">
          <router-link to="/components/Home2" class="Links">
            <i class="el-icon-s-home"></i>
            <p>首页</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/classification/Classs2" class="classs">
            <i class="el-icon-search"></i>
            <p>分类</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/shoppingcar/ShoppingCar2" class="Links">
            <i class="el-icon-shopping-cart-2"></i>
            <p>购物车</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/personalcenter/PersonalCenter2" class="Links">
            <i class="el-icon-user"></i>
            <p>我的</p>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name:'Classs'
}
</script>
<style lang="less" scoped>
  *{
    padding:0;
    margin:0;
  }
  .Box{
    background-color:white;
    margin:auto;
    max-width: 640px;
    padding-top:73px;
  }
  .searchBox{
    box-sizing:border-box;
    padding:10px;
    border-bottom:1px solid #f1f3f6;
    width:100%;
    color:#b0b3b6;
    max-width:640px;
    background-color:white;
    position:fixed;
    top:0;
    z-index:10;
    .search{
      margin:auto;
      height:50px;
      border-bottom:1px solid #f3f5f7;
      line-height:50px;
      max-width: 640px;
      border-radius:25px;
      padding:0 20px;
      background-color:#f3f5f7;
    }
  }
  .section{
    text-align: center;
    div{
      padding:20px 0;
      .hot{
        display: inline-block;
        width:95%;
        font-size:25px;
        color:black;
      } 
      .router-link-active{
        border-left:3px solid #ff734c;
        color:#ff805c;
      }
    }
    .view{
      padding:20px;
    }
  }
  .Footer{
    background-color:#f7f9fa;
    width:100%;
    padding:5px;
    max-height:80px;
    text-align: center;
    position: fixed;
    bottom:0;
    left:0;
    .el-icon-s-home,.el-icon-search,.el-icon-shopping-cart-2,.el-icon-user{
      font-size: 25px;
    }
    .classs{
      color:#ff734c;
    }
    .Links{
      display: inline-block;
      width:100%;
      color:black;
    }
  }
</style>