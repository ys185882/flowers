<template>
	<div class="Box">
		<nav>
			<el-row>
				<el-col :span="1">
					<div class="backTo">
					    <span @click="back">
							<i class="el-icon-arrow-left"></i>
						</span>
					</div>
				</el-col>
				<el-col :span="23">
					<span>购物车</span>
				</el-col>
			</el-row>
			<div class="photo">
				<img src="../../assets/shoppingcar/m_shopping_empty_cart.png" alt="">
			</div>
			<div class="tt">购物车内暂时没有商品</div>
			<div>
				<button>去逛逛</button>
			</div>
		</nav>
		<section>
			<div class="title">猜你喜欢</div>
			<el-row>
				<el-col :span="12">
					<div class="Head">
						<img src="../../assets/meiguihua.jpg" alt="">
						<div class="Textbox">
							<div class="Text">一往情深·精品玫瑰礼盒精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</div>
							<p class="money">￥239</p>
						</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="Head">
						<img src="../../assets/meiguihua.jpg" alt="">
						<div class="Textbox">
							<div class="Text">一往情深·精品玫瑰礼盒精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</div>
							<p class="money">￥239</p>
						</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="Head">
						<img src="../../assets/meiguihua.jpg" alt="">
						<div class="Textbox">
							<div class="Text">一往情深·精品玫瑰礼盒精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</div>
							<p class="money">￥239</p>
						</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="Head">
						<img src="../../assets/meiguihua.jpg" alt="">
						<div class="Textbox">
							<div class="Text">一往情深·精品玫瑰礼盒精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</div>
							<p class="money">￥239</p>
						</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="Head">
						<img src="../../assets/meiguihua.jpg" alt="">
						<div class="Textbox">
							<div class="Text">一往情深·精品玫瑰礼盒精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</div>
							<p class="money">￥239</p>
						</div>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="Head">
						<img src="../../assets/meiguihua.jpg" alt="">
						<div class="Textbox">
							<div class="Text">一往情深·精品玫瑰礼盒精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</div>
							<p class="money">￥239</p>
						</div>
					</div>
				</el-col>
			</el-row>
		</section>
    <div class="Footer">
      <el-row>
        <el-col :span="6">
          <router-link to="/components/Home" class="Links">
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
					<router-link to="/shoppingcar/ShoppingCar" class="shopping">
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
		<footer>已经到底喽...</footer>
	</div>
</template>
<script>
export default{
	name:'ShoppingCar',
	methods:{
	    back(){
	        this.$router.go(-1);
	    },
	}
}
</script>
<style scoped lang="less">
	 .Box{
		max-width: 640px;
		margin:auto;
	 	padding-bottom:50px;
	 	background-color:#e9ecf0;
	 }
	nav{
		background-color:white;
		margin:auto;
		max-width: 640px;
		text-align: center;
		font-size:30px;
		padding:20px;
		line-height: 50%;
		i{
			font-size:40px;
			line-height: 50%;
		}
		.photo{
			margin-top:100px;
			img{
				width:40%;
			}
		}
		.tt{
			margin:40px 0;
			font-size: 20px;
		}
		button{
			padding:10px 60px;
			border:none;
			outline: none;
			color:white;
			background-color:#ff734c;
			font-size:20px;
			font-weight: bold;
			border-radius:60px;
		}
	}
	section{
		background-color:white;
		padding:20px;
		.title{
			font-size:20px;
			margin:20px 0;
		}
		.Head{
			margin:10px;
			border-radius:10px;
			text-align: center;
			width:90%;
	    box-shadow: 0 0 6px rgba(0,0,0, .12);
			img{
				width:100%;
			}
			.Textbox{
				font-size:20px;
				padding:10px;
				.Text{
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				p{
					margin:5px 0;
					text-align: left;
					color:#ff734c;
				}
			}
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
    .shopping{
    	color:#ff734c;
    }
		.Links{
			display: inline-block;
			width:100%;
			color:black;
		}
  }
	footer{
		background-color:white;
		padding:10px 0 20px 0;
		font-size: 20px;
		text-align: center;
		color:#71797f;
	}
</style>