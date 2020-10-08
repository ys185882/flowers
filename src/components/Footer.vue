<template>
	<div>
		<div class="FooterBox">
			<el-row class="aside">
				<el-col :span="6">
					<button>企业团购</button>
				</el-col>
				<el-col :span="6">
					<router-link to="/DesignerSelector/DesignerSelector">
						<button>设计师款</button>
					</router-link>
				</el-col>
				<el-col :span="6">
					<button>同城鲜花</button>
				</el-col>
				<el-col :span="6">
					<button>花语大全</button>
				</el-col>
			</el-row>
			<br>
			<el-row class="aside">
				<el-col :span="6">
					<button>花礼优势</button>
				</el-col>
				<el-col :span="6">
					<button>勇敢爱</button>
				</el-col>
				<el-col :span="6">
					<button>常见问题</button>
				</el-col>
				<el-col :span="6">
					<router-link to="/personalcenter/about/About">
						<button>关于我们</button>
					</router-link>
				</el-col>
			</el-row>
			<br>
			<br>
			<el-row class="phone">
				<el-col :span="12">
					<button>
						<i class="el-icon-mobile-phone"></i>
					</button>
					<div>客户端</div>
				</el-col>
				<el-col :span="12">
					<button>
						<i class="el-icon-headset"></i>
					</button>
					<div>客服</div>
				</el-col>
			</el-row>
		</div>
		<div class="Text">
			<p>Copyright © 2005~2020 花礼网（中国鲜花礼品网）版权所有</p>
			<p>中国鲜花网领先品牌，鲜花速递专家！</p>
			<p>深圳市百易信息技术有限公司  粤ICP备09171662号</p>
		</div>
    <div class="Footer">
      <el-row>
        <el-col :span="6">
          <router-link to="/components/Home" class="Homes">
            <i class="el-icon-s-home"></i>
            <p>首页</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/classification/Classs" class="Links">
            <i class="el-icon-search"></i>
            <p>分类</p>
          </router-link>
        </el-col>
        	<el-col :span="6">
				<router-link to="/shoppingcar/ShoppingCar" class="Links">
					<i class="el-icon-shopping-cart-2"></i>
					<p>购物车</p>
				</router-link>
			</el-col>
        <el-col :span="6">
        	<router-link to="/personalcenter/PersonalCenter" class="Links">
	          <i class="el-icon-user"></i>
	          <p>我的</p>
          </router-link>
        </el-col>
      </el-row>
    </div>
	</div>
</template>
<script>
export default{
	name:'Footer'
}
</script>
<style scoped lang="less">
	.FooterBox{
		background-color:white;
		padding:20px 10px;
	}
	.aside{
		text-align: center;
		button{
			outline: none;
			border:none;
			padding:5px 15px;
			font-size: 12px;
			background-color:#e9ecf0;
		}
	}
	.phone{
		text-align: center;
			font-size: 14px;
		button{
			outline:none;
			border:none;
			height:40px;
			width: 40px;
			border-radius:20px;
			margin-bottom: 10px;
		}
	}
	.Text{
		text-align: center;
		background-color:white;
		font-size: 12px;
		color:#b4babf;
		padding:20px;
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
    .Homes{
    	color:#ff734c;
    }
		.Links{
			display: inline-block;
			width:100%;
			color:black;
		}
  }
</style>