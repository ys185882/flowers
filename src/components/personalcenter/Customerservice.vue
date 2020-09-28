<template>
	<div class="Box">
		<div class="Customerservice">
			<nav>
				<el-row>
					<el-col :span="4">
						<div class="backTo">
						  <span @click="back">
								<i class="el-icon-arrow-left"></i>
							</span>
						</div>
					</el-col>
					<el-col :span="16">
						<span>客服</span>
					</el-col>
					<el-col :span="4">
						<el-button @click="show = !show" class="elbtn">
						<i class="el-icon-s-unfold"></i>
						</el-button>
			      <transition name="el-fade-in-linear">
			        <div v-show="show" class="transition-box">
			        	<div class="list">
									<router-link to="/components/Home2">
										<div class="home"><i class="el-icon-house"></i>首页</div>
									</router-link>
									<router-link to="/classification/Classs2">
										<div class="classs"><i class="el-icon-search"></i>分类搜索</div>
									</router-link>
									<router-link to="/shoppingcar/ShoppingCar2">
									<div class="shoppingcar"><i class="el-icon-shopping-cart-2"></i>购物车</div>
									</router-link>
									<router-link to="/personalcenter/PersonalCenter2">
										<div class="personal"><i class="el-icon-user"></i>我的</div>
									</router-link>
								</div>
			        </div>
			      </transition>
					</el-col>
				</el-row>
			</nav>
			<section>
				<div class="customer">
					<img src="../../assets/personalcenter/customer/wxguanjia-kf.png" alt="">
					<span>专属秘书|喜棠</span>
				</div>
				<div class="tt">Hi，我是您的专属秘书喜棠，添加我的微信，我将帮您催单，有什么需求时，1对1帮您走绿色通道。</div>
				<div class="text">
					<span>微信号：Huali__duebass</span>
					<button>加我微信</button>
				</div>
				<el-row>
					<el-col :span="12">
						<div class="online">
							<i class="el-icon-headset">
								<p>在线客服</p>
							</i>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="phone">
							<i class="el-icon-phone">
								<p>400电话</p>
							</i>
						</div>
					</el-col>
				</el-row>
				<div class="onlinemessage">
					<router-link to="/personalcenter/OnlineMessage">
						<i class="el-icon-s-comment"></i>
						<span>在线留言</span>
						<i class="el-icon-arrow-right"></i>
					</router-link>
				</div>
				<div class="time">客服服务时间为：08:30-21:00</div>
			</section>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Customerservice',
		data:() => ({
			show:false
		}),
		methods: {
	    back(){
	       this.$router.go(-1);
	    }
		}
	}
</script>
<style scoped lang="less">
	.Box{
		background-color:#e9ecf0;
		.Customerservice{
			height:100%;
			margin:auto;
			max-width:640px;
			background-color:white;
		 	.elbtn{
		 		padding:0;
		 		border:none;
		 		background-color:white;
		 		color:black;
		 	}
			.list{
				font-size: 15px;
				width:180px;
				border:1px solid #e9ecf0;
				border-radius:10px;
				position:absolute;
				right:0px;
				top:40px;
				z-index: 10;
				background-color:white;
				div{
					height:30px;
					color:black;
					text-align:left;
					padding:20px;
				}
			}
		}
	}
	nav{
		background-color:white;
		margin:auto;
		max-width: 640px;
		text-align: center;
		font-size:20px;
		padding:20px 0;
		line-height: 50%;
		border-bottom:1px solid #e9ecf0;
		span{
			font-size:25px;
			i{
				font-size:40px;
				line-height: 50%;
			}
		}
	}
	section{
		margin-top:20px;
		.customer{
			padding:0 20px;
			img{
				width:60px;
			}
			span{
				font-size: 25px;
			}
		}
		.online{
			margin-top:20px;
			height: 17.5rem;
			line-height:23rem;
			text-align:center;
			border:1px solid #e9ecf0;
			i{
				font-size:80px;
				color:#ff734c;
				p{
					margin-top:20px;
					font-size: 25px;
					color:black;
				}
			}
		}
		.phone{
			margin-top:20px;
			height: 17.5rem;
			line-height:23rem;
			text-align:center;
			border:1px solid #e9ecf0;
			i{
				font-size:80px;
				color:#ff734c;
				p{
					margin-top:20px;
					font-size: 25px;
					color:black;
				}
			}
		}
		.onlinemessage{
			padding:20px;
			font-size:25px;
			i{
				color:black;
			}
			span{
				color:black;
			}
			.el-icon-arrow-right{
				float:right;
			}
		}
		.tt{
			background-image: url(../../assets/personalcenter/customer/wxguanjia_wode_bg.png);
			font-size:1.3rem;
			background-position: top center;
			background-size: contain;
			background-repeat: no-repeat;
			width:90%;
			height: 4.8rem;
			padding:1.28rem;
			margin:0 auto;
		}
		.text{
			height:53px;
			padding:0 20px;
			font-size:25px;
			button{
				float:right;
				border-radius:5px;
				font-size: 25px;
				color:white;
				padding:10px  40px;
				border:none;
				outline:none;
				background-color:#ff734c
			}
		}
		.time{
			background-color:#e9ecf0;
			padding-top:60px;
			font-size:25px;
			text-align:center;
		}
	}
</style>