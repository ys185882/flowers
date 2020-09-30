<template>
	<div class="Box">
		<div class="designerselector">
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
						<span>设计师臻选鲜花</span>
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
			</nav>
			<section>
				<div class="logo">
					<img src="../../assets/designer/bannertitle.png" alt="">
					<p>送出的每束花均由资深花艺师亲手制作</p>
					<p>30多个核心城市已开通服务,其他城市陆续开通中…</p>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<div class="logos">
						<div class="flower">精选稀有花材，给你不一样的视觉享受</div>
						<div class="camera">送前花束实拍，效果提前知道</div>
						<div class="chat">VIP客服一对一服务,全程尽享尊贵体验</div>
					</div>
				</div>
				<div class="sec" v-for="n in 10">
					<p class="gaoduan">高端花盒系列</p>
					<img src="../../assets/designer/9012297.jpg" alt="">
					<div class="flowerbox">
						<div class="header">
							<div class="titbox">
								<p class="tit">赤道花园</p>
								<p class="meigui">红佛玫瑰<span>76cm长形礼盒</span></p>
							</div>
							<div class="rmbbox">
								<div class="rmb">RMB</div>
								<div class="num">599</div>
							</div>
						</div>
						<div class="sect">采撷最娇艳的玫瑰，经设计师妙手点拨，将芬芳馥郁的气息融入，轻轻打开，芬芳扑面袭来，沉醉在那花香醉人的奇幻世界。</div>
					</div>
				</div>
				<div class="secs" v-for="n in 10">
					<p class="gaoduan">主题花束系列</p>
					<img src="../../assets/designer/9012323.jpg" alt="">
					<div class="flowerbox">
						<div class="header">
							<div class="titbox">
								<p class="tit">火热的爱</p>
								<p class="meigui">爱情系列枝热情奔放</p>
							</div>
							<div class="rmbbox">
								<div class="rmb">RMB</div>
								<div class="num">499</div>
							</div>
						</div>
						<div class="sect">饱满圆润的花头，紧促的拥抱在一起，红玫瑰与多头红玫瑰的组合，大大小小的花苞们，像极了轻盈的泡泡，花瓣就像裙裾一样层层叠叠，正是我向往中的那片花海，红玫表达的爱简单直接而炙热，除了爱你还是爱你。此花束适合送给热恋中人。</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:'DesignerSelector',
		data(){
			return {
				show:false
			}
		},
		methods: {
	    back(){
	       this.$router.go(-1);
	    }
		}
	}
</script>
<style scoped lang="less">
.Box{
 	padding-bottom:50px;
 	background-color:#e9ecf0;
 	.designerselector{
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
			font-size:15px;
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
		}
		section{
			padding-bottom:4rem;
			.logo{
				background-image:url(../../assets/designer/flower.png);
				background-position:center center;
				background-repeat:no-repeat;
				background-size:contain;
				height:65rem;
				text-align:center;
				img{
					margin:8rem 0 0 0;
					width:50%;
				}
				p{
					font-size:1.5rem;
					color:white;
					border-bottom:1px solid white;
					margin:0 3.3rem;
					padding:20px 0;
				}
			}
			.logos{
				font-size:1.5rem;
				color:white;
				padding:20px 0;
				.flower{
					background-image:url(../../assets/designer/iconflower.png);
					background-position:center left 30px;
					background-repeat:no-repeat;
					background-size:25px;
				}
				.camera{
					background-image:url(../../assets/designer/iconcamera.png);
					background-position:center left 30px;
					background-repeat:no-repeat;
					background-size:25px;
					padding:30px 0;
				}
				.chat{
					background-image:url(../../assets/designer/iconchat.png);
					background-position:center left 30px;
					background-repeat:no-repeat;
					background-size:25px;
				}
			}
			.sec{
				background-image:url(../../assets/designer/bgblack.jpg);
				background-position:center left;
				background-size:contain;
				text-align:center;
				.gaoduan{
					font-size: 1.5rem;
					color:white;
					padding:50px 0;
				}
				img{
					width:90%;
				}
				.flowerbox{
					text-align:left;
					color:white;
					width:90%;
					margin:auto;
					background-color:#494949;
					margin-top:-3px;
					.header{
						border-left:5px solid #bcbcbc;
						padding:10px;
						margin-left:10px;
						height:70px;
						.titbox{
							float:left;
							width:60%;
							.tit{
								font-size: 1.5rem;
							}
							.meigui{
								font-size: 1.8rem;
								span{
									margin-left:10px;
									font-size: 1.3rem;
								}
							}
						}
						.rmbbox{
							float:right;
							background-color:black;
							font-size: 1.5rem;
							text-align:center;
							width:4.5rem;
							height:4.5rem;
						}
					}
					.sect{
						padding:10px;
						color:#bcbcbc;
						font-size: 1.3rem;
					}
				}
			}
			.secs{
				background-image:url(../../assets/designer/bgwhite.jpg);
				background-position:center left;
				background-size:contain;
				text-align:center;
				.gaoduan{
					font-size: 1.5rem;
					color:black;
					padding:50px 0;
				}
				img{
					width:90%;
				}
				.flowerbox{
					text-align:left;
					color:black;
					width:90%;
					margin:auto;
					background-color:white;
					margin-top:-3px;
					.header{
						border-left:5px solid #777777;
						padding:10px;
						margin-left:10px;
						height:70px;
						.titbox{
							float:left;
							width:60%;
							.tit{
								font-size: 1.5rem;
							}
							.meigui{
								font-size: 1.8rem;
							}
						}
						.rmbbox{
							float:right;
							color:white;
							background-color:black;
							font-size: 1.5rem;
							text-align:center;
							width:4.5rem;
							height:4.5rem;
						}
					}
					.sect{
						padding:10px;
						color:#777777;
						font-size: 1.3rem;
					}
				}
			}
		}
	}
}
</style>