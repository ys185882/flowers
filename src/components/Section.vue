<template>
	<div class="flowersBox">
	<el-row class="fz">
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>认准龙头企业
		</el-col>
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>15年品牌
		</el-col>
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>3小时送花
		</el-col>
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>
			最近条好评
		</el-col>
	</el-row>
	<br>
		<div class="flowers">
			<img src="../assets/flower.png">
			<div>鲜花</div>
		</div>
		<div class="flowers">
			<img src="../assets/flower2.png">
			<div>永生花</div>
		</div>
		<div class="flowers">
			<img src="../assets/dangao.png">
			<div>蛋糕</div>
		</div>
		<div class="flowers">
			<img src="../assets/liwu.png">
			<div>礼物</div>
		</div>
		<div class="flowers">
			<img src="../assets/pay.png">
			<div>企业团购</div>
		</div>
	<br>
	<br>
	<div class="navPhoto">
		<img src="../assets/nav.jpg" alt="">
	</div>
	<el-row class="ybBox">
		<el-col :span="12" class="yb">
			<div class='hualan'>
				<el-row>
					<el-col :span="12">
						<div>
							<header>热销花篮</header>
							<p>+月饼组合</p>
							<aside>￥299</aside>
						</div>
					</el-col>
					<el-col :span="12">
						<img src="../assets/yb.jpg" alt="">
					</el-col>
				</el-row>
			</div>
		</el-col>
		<el-col :span="12" class="ybs">
			<div class='hualan'>
				<el-row>
					<el-col :span="12">
						<div>
							<header>热销花篮</header>
							<p>+月饼组合</p>
							<aside>￥299</aside>
						</div>
					</el-col>
					<el-col :span="12">
						<img src="../assets/yb.jpg" alt="">
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
	<el-row class="ybBox">
		<el-col :span="12" class="Yb">
			<div class='hualan'>
				<el-row>
					<el-col :span="12">
						<div>
							<header>热销花篮</header>
							<p>+月饼组合</p>
							<aside>￥299</aside>
						</div>
					</el-col>
					<el-col :span="12">
						<img src="../assets/yb.jpg" alt="">
					</el-col>
				</el-row>
			</div>
		</el-col>
		<el-col :span="12" class="Ybs">
			<div class='hualan'>
				<el-row>
					<el-col :span="12">
						<div>
							<header>热销花篮</header>
							<p>+月饼组合</p>
							<aside>￥299</aside>
						</div>
					</el-col>
					<el-col :span="12">
						<img src="../assets/yb.jpg" alt="">
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</div>
</template>
	
<script>
export default{
	name:'Section'
}
</script>
<style lang="less" scoped>
	.fz{
		padding:10px;
		font-size:12px;
	}
	.el-icon-circle-check{
		border-radius: 10px;
		background-color:#435448;
		color:white;
	}
	.flowersBox{
		background-color: white;
		.fz{
			font-size: 20px;
		}
	}
	.flowers{
		font-size:20px;
		text-align: center;
		display: inline-block;
		width: 18%;
		img{
			width:80%;
		}
	}
	.navPhoto{
		max-width:640px;
		margin-bottom:-4px;
	}
	.navPhoto img{
		width: 100%;
	}
	.ybBox{
		background-color:#a7212a;
		.yb{
			padding:15px 2px 5px 20px;
			.hualan{
				border-radius:10px;
				background-color:white;
				width:100%;
				div{
					padding:6px;
					header{
						font-size:25px;
					}
					p{
						font-size: 20px;
						color:#71797f;
					}
					aside{
						margin-top: 20px;
						font-size: 20px;
						color:#ff734c;
					}
				}
				img{
					width:100%;
				}
			}
		}
		.ybs{
			padding:15px 20px 5px 2px;
			.hualan{
				border-radius:10px;
				background-color:white;
				width:100%;
				div{
					padding:6px;
					header{
						font-size:25px;
					}
					p{
						font-size: 20px;
						color:#71797f;
					}
					aside{
						margin-top: 20px;
						font-size: 20px;
						color:#ff734c;
					}
				}
				img{
					width:100%;
				}
			}
		}
		.Yb{
			padding:3px 2px 15px 20px;
			.hualan{
				border-radius:10px;
				background-color:white;
				width:100%;
				div{
					padding:6px;
					header{
						font-size:25px;
					}
					p{
						font-size: 20px;
						color:#71797f;
					}
					aside{
						margin-top: 20px;
						font-size: 20px;
						color:#ff734c;
					}
				}
				img{
					width:100%;
				}
			}
		}
		.Ybs{
			padding:3px 20px 15px 2px;
			.hualan{
				border-radius:10px;
				background-color:white;
				width:100%;
				div{
					padding:6px;
					header{
						font-size:25px;
					}
					p{
						font-size: 20px;
						color:#71797f;
					}
					aside{
						margin-top: 20px;
						font-size: 20px;
						color:#ff734c;
					}
				}
				img{
					width:100%;
				}
			}
		}
	}
</style>