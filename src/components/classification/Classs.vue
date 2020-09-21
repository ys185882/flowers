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
            <router-link to="/classification/Hot" class="hot">鲜花</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot" class="hot">永生花</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot" class="hot">蛋糕</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot" class="hot">特色礼品</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot" class="hot">礼篮</router-link>
          </div>
          <div>
            <router-link to="/classification/Hot" class="hot">绿植花卉</router-link>
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
          <router-link to="/">
            <i class="el-icon-s-home home"></i>
            <p class="home">首页</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/classification/Classs" class="Link">
            <i class="el-icon-search classs"></i>
            <p class="classs">分类</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <i class="el-icon-shopping-cart-2"></i>
          <p>购物车</p>
        </el-col>
        <el-col :span="6">
          <i class="el-icon-user"></i>
          <p>我的</p>
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
    margin:auto;
    max-width: 640px;
    padding-top:73px;
  }
  .searchBox{
    color:#b0b3b6;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background-color:white;
    padding:10px;
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
        font-size:20px;
        color:black;
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
    .home{
      color:black;
    }
    .classs{
      color:#ff734c;
    }
  }
</style>