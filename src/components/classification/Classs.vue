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
</style>