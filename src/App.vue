<template>
  <div id="app">
    <el-backtop target="#app" :bottom="100" class="top">
	    <div>
			<i class="el-icon-top"></i>
	    </div>
    </el-backtop>
    <router-view/>
    <div class="Footer">
      <el-row>
        <el-col :span="6">
          <router-link to="/">
            <i class="el-icon-s-home"></i>
            <p>首页</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/classification/Classs">
            <i class="el-icon-search"></i>
            <p>分类</p>
          </router-link>
        </el-col>
        <el-col :span="6">
					<router-link to="/shoppingcar/ShoppingCar">
						<i class="el-icon-shopping-cart-2"></i>
						<p>购物车</p>
					</router-link>
				</el-col>
        <el-col :span="6">
        	<router-link to="/personalcenter/PersonalCenter">
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
  name: 'App'
}
</script>

<style lang="less">
	*{
		padding:0;
		margin:0;
	}
	html,body{
		background-color:#e9ecf0;
		height: 100%;
	}
	a {
	  text-decoration: none;
	}
	#app{
		height:100%;
		overflow-y: scroll;
		.router-link-active {
		  text-decoration: none;
		}
		.top{
			width:62px;
			height:62px;
			div{
				font-size: 40px;
	      height: 100%;
	      width: 100%;
	      border-radius:31px;
	      box-shadow: 0 0 6px rgba(0,0,0, .12);
	      text-align: center;
	      line-height: 62px;
	      color: black;
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
			.Link{
				display: inline-block;
				width:100%;
				color:black;
			}
	    .router-link-active{
	     	color:#ff805c;
	    }
	  }
	}
</style>
