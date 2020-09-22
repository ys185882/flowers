<template>
	<div class="Box">
		<nav>
			<el-row>
				<el-col :span="1">
					<i class="el-icon-arrow-left"></i>
				</el-col>
				<el-col :span="23">
					<span>购物车</span>
				</el-col>
			</el-row>
			<div class="register">
				登录后将同步您的购物车商品
				<button>登录</button>
			</div>
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
		<footer>已经到底喽...</footer>
	</div>
</template>
<script>
export default{
	name:'ShoppingCar2'
}
</script>
<style scoped lang="less">
	 .Box{
		max-width: 640px;
		margin:auto;
	 	padding-bottom:50px;
	 }
	nav{
		background-color:white;
		margin:auto;
		max-width: 640px;
		text-align: center;
		font-size:30px;
		padding:20px;
		line-height: 50%;
		.register{
			border:1px solid #ff734c;
			font-size:20px;
			text-align: center;
			height: 67px;
			width:100%;
			background-color:#fff0ec;
			button{
				padding:10px 30px;
				background-color: #fff0ec;
				color:#ff734c;
				border:1px solid #ff734c;
				border-radius:30px;
			}
		}
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
	footer{
		background-color:white;
		padding:10px 0 20px 0;
		font-size: 20px;
		text-align: center;
		color:#71797f;
	}
</style>