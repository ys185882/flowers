<template>
	<div class="Box">
		<div class="LoveFlowers">
			<nav>
				<el-row>
					<el-col :span="6">
						<div class="backTo">
						  <span @click="back">
								<i class="el-icon-arrow-left"></i>
							</span>
						</div>
					</el-col>
					<el-col :span="12">
						<span>爱情鲜花</span>
					</el-col>
					<el-col :span="3">
						<i class="el-icon-headset"></i>
					</el-col>
					<el-col :span="3">
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
				<div class="logo">
					<el-row>
						<el-col :span="6">
							综合
						</el-col>
						<el-col :span="6">
							销量
						</el-col>
						<el-col :span="6">
							价格
						</el-col>
						<el-col :span="6">
							新品
						</el-col>
					</el-row>
				</div>
				<div class="logos">
					<div>
						<button>送女友</button>
					</div>
					<div>
						<button>送男性</button>
					</div>
					<div>
						<button>送朋友</button>
					</div>
					<div>
						<button>送长辈</button>
					</div>
					<div>
						<button class="ct" @click="drawer = true">爱情鲜花</button>
					</div>
				</div>
			</nav>
			<section class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
				<div v-for="i in count" class="infinite-list-item">
					<el-row>
						<el-col :span="12">
							<div class="imgbox">
								<img src="../assets/LoveFlowers/1.jpg" alt="">
								<div class="one">
									<span>用心爱你·99枝：33枝戴安娜＋66枝红玫瑰</span>
									<p>￥568</p>
								</div>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="imgbox">
								<img src="../assets/LoveFlowers/2.jpg" alt="">
								<div class="two">
									<div>全新韩式系列</div>
									<span>韩式系列/初心不负</span>
									<p>￥228</p>
								</div>
							</div>
						</el-col>
					</el-row>
				</div>
			</section>
			<el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" size='90%' class="drawer">
				<div class="drawerbox">
					<p>人群</p>
				  <el-row>
				 		<el-col :span="8">
				 			<button>送女友</button>
				 		</el-col>
				 		<el-col :span="8">
				 			<button>送男性</button>
				 		</el-col>
				 		<el-col :span="8">
				 			<button>送朋友</button>
				 		</el-col>
				  </el-row>
				  <el-row>
				 		<el-col :span="8">
				 			<button>送长辈</button>
				 		</el-col>
				  </el-row>
				</div>
				<div class="drawerbox" v-for="n in 4">
					<p>场合</p>
				  <el-row v-for="n in 3">
				 		<el-col :span="8">
				 			<button>爱情鲜花</button>
				 		</el-col>
				 		<el-col :span="8">
				 			<button>生日鲜花</button>
				 		</el-col>
				 		<el-col :span="8">
				 			<button>探病慰问</button>
				 		</el-col>
				  </el-row>
				</div>
			</el-drawer>
		</div>
	</div>
</template>

<script>
export default{
	name:'LoveFlowers',
	data(){
		return {
			show:false,
			drawer:false,
			count:0
		}
	},
	methods: {
    back(){
       this.$router.go(-1);
    },
    load () {
      this.count += 2
    }
	}
}
</script>

<style scoped lang="less">
.Box{
 	padding-bottom:50px;
 	background-color:#e9ecf0;
 	.LoveFlowers{
 		margin:auto;
 		max-width:640px;
 		background-color:#e9ecf0;
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
		nav{
			background-color:white;
			margin:auto;
			max-width: 640px;
			text-align: center;
			font-size:20px;
			padding:20px 0;
			line-height: 50%;
			.el-icon-headset{
				font-size: 30px;
			}
			span{
				font-size:25px;
				i{
					font-size:40px;
					line-height: 50%;
				}
			}
			.logo{
				font-size: 15px;
				padding:40px;
				border-bottom:1px solid #e9ecf0;
				text-align:center;
			}
			.logos{
				height:30px;
				padding:20px 0;
				div{
					width:20%;
					float:left;
					button{
					background-color:#f7f9fa;
					padding:5px 15px;
					font-size: 20px;
					border:none;
					outline: none;
					}
					.ct{
						border:1px solid #ff734c;
						color:#ff734c;
						background-color:white;
						border-radius:5px;
					}
				}
			}
		}
		section{
			margin-top:30px;
			background-color:#e9ecf0;
			.imgbox{
				height:437.6px;
				border-radius:5px;
				margin:auto;
				background-color:white;
				width:90%;
				margin:20px 0;
				img{
					width:100%;
				}
				.one{
					padding:10px;
					span{
						font-size:20px;
					}
					p{
						margin:10px 0;
						color:#ff734c;
						font-size: 20px;
					}
				}
				.two{
					padding:10px;
					div{
						text-align:center;
						border:1px solid #ff734c;
						color:#ff734c;
						border-radius:20px;
						width:110px;
					}
					span{
						font-size:20px;
					}
					p{
						margin:10px 0;
						color:#ff734c;
						font-size: 20px;
					}
				}
			}
		}
		.drawer{
			overflow:scroll;
			text-align:center;
			.drawerbox{
				padding:20px;
				p{
					text-align:left;
					margin:0 0 30px 20px;
					font-size:1.5rem;
				}
				button{
					border:none;
					width:90%;
					padding:10px;
					background-color:#f7f9fa;
					font-size:1.4rem;
					border-radius:5px;
					margin-bottom:10px;
				}
			}
		}
	}
}
</style>