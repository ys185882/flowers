<template>
	<div class="Box">
		<div class="boxs">
			<div class="pinwei">
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
							<span>品味之选鲜花</span>
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
					<div class="logo"></div>
					<div class="logos">
						<el-row>
							<el-col :span="9">
								<div class="logosphoto">
									<img src="../../assets/pinweizhixuan/1.jpg" alt="">
									<div class="money">
										<span>￥296</span>
										<button>立即抢购</button>
									</div>
								</div>
							</el-col>
							<el-col :span="15">
								<div class="header">韩式系列/一路向阳</div>
								<div class="huayishi">花艺师打造 韩式花束系列</div>
								<div class="dianpingbox">
									<div class="dianping">花艺师点评</div>
									<div class="txt">花艺师选用阳光灿烂的向日葵，搭配快乐活泼的香槟玫瑰绽放出热情的魅力，承载美好的期盼之情...</div>
								</div>
							</el-col>
						</el-row>
					</div>
					<div class="logoss" v-for="n in 10">
						<el-row>
							<el-col :span="9">
								<div class="logosphoto">
									<img src="../../assets/pinweizhixuan/1.jpg" alt="">
									<div class="money">
										<span>￥296</span>
										<button>立即抢购</button>
									</div>
								</div>
							</el-col>
							<el-col :span="15">
								<div class="header">韩式系列/一路向阳</div>
								<div class="huayishi">花艺师打造 韩式花束系列</div>
								<div class="dianpingbox">
									<div class="dianping">花艺师点评</div>
									<div class="txt">花艺师选用阳光灿烂的向日葵，搭配快乐活泼的香槟玫瑰绽放出热情的魅力，承载美好的期盼之情...</div>
								</div>
							</el-col>
						</el-row>
					</div>
					<footer>
						<div class="onenew">
							<el-row>
								<el-col :span="8">
									<span>帮助</span>
								</el-col>
								<el-col :span="8">
									<span>查单</span>
								</el-col>
								<el-col :span="8">
									<span>花语大全</span>
								</el-col>
							</el-row>
						</div>
						<div class="twonew">
							<el-row>
								<el-col :span="12">
										<span><img src="../../assets/xinpin/iconPhone.png" alt=""></span>
										<br>
										APP
								</el-col>
								<el-col :span="12">
									<span><img src="../../assets/xinpin/iconPc.png" alt=""></span>
									<br>
									电脑版
								</el-col>
							</el-row>
						</div>
						<div class="foot">
							<p>新品鲜花专区</p>
							<p>Copyright © 2005~2020 花礼网(中国鲜花礼品网) 版权所有</p>
						</div>
					</footer>
				</section>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Pinwei',
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
	background-color:white;
	.boxs{
		background-color:#e9ecf0;
		.pinwei{
			height:100%;
			margin:auto;
			max-width:640px;
			background-color:#375f39;
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
				.logo{
					background-image:url(../../assets/pinweizhixuan/banner-pinwei.png);
					background-position:center center;
					background-repeat:no-repeat;
					background-size:contain;
					height:39rem;
				}
				.logos{
					background-color:#f7f9fa;
					padding:20px;
					width:85%;
					margin:-3.5rem auto 3.5rem;
					padding-bottom:1.5rem;
					border-radius:8px;
					.logosphoto{
						border-radius:5px;
						background-color:white;
						img{
							width:100%;
						}
						.money{
							padding:1.5rem .5rem;
							font-size: 1.7rem;
							button{
								float:right;
								background-color:#ff734c;
								font-size:1.2rem;
								padding:7px 5px;
								outline:none;
								border:none;
								color:white;
								border-radius:5px;
							}
						}
					}
					.header{
						padding:1rem;
						font-size: 1.5rem;
					}
					.huayishi{
						padding:1rem;
						font-size: 1.3rem;
						color:#ff734c;
					}
					.dianpingbox{
						border-radius:3px;
						background-color:white;
						margin:1rem;
						.dianping{
							font-size: 1.3rem;
							padding:0.8rem 0.8rem 0rem;
						}
						.txt{
							font-size:1.3rem;
							color:#71797f;
							padding:0.6rem;
						}
					}
				}
				.logoss{
					background-color:#f7f9fa;
					padding:20px;
					width:85%;
					margin:-2rem auto 3.5rem;
					padding-bottom:1.5rem;
					border-radius:8px;
					.logosphoto{
						border-radius:5px;
						background-color:white;
						img{
							width:100%;
						}
						.money{
							padding:1.5rem .5rem;
							font-size: 1.7rem;
							button{
								float:right;
								background-color:#ff734c;
								font-size:1.2rem;
								padding:7px 5px;
								outline:none;
								border:none;
								color:white;
								border-radius:5px;
							}
						}
					}
					.header{
						padding:1rem;
						font-size: 1.5rem;
					}
					.huayishi{
						padding:1rem;
						font-size: 1.3rem;
						color:#ff734c;
					}
					.dianpingbox{
						border-radius:3px;
						background-color:white;
						margin:1rem;
						.dianping{
							font-size: 1.3rem;
							padding:0.8rem 0.8rem 0rem;
						}
						.txt{
							font-size:1.3rem;
							color:#71797f;
							padding:0.6rem;
						}
					}
				}
			}
			footer{
				padding-top:30px;
				background-color:#e9ecf0;
				text-align:center;
				.onenew{
					span{
						margin: auto;
						padding:3px 10px;
						background-color:#e7e6e6;
						font-size: 12px;
					}
				}
				.twonew{
					color:#3c4043;
					font-size: 12px;
					padding-bottom:20px;
					border-bottom:1px solid #eeeeee;
					margin:30px 0 0px;
					span{
						display: inline-block;
						border:1px solid #4d4d4d;
						border-radius:20px;
						width:30px;
						img{
							width:80%;
						}
					}
				}
				.foot{
					color:#cccccc;
					font-size: 12px;
					padding:20px 0;
				}
			}
		}
	}
}
</style>