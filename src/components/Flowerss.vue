<template>
	<div class="Box">
		<div class="Flowers">
			<div class="one">一秒选花</div>
			<el-row>
				<el-col :span="8">
					<router-link to="/components/LoveFlowers">
						<img src="../assets/m_home_use_lover.png" alt="">
					</router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/components/LoveFlowers">
						<img src="../assets/m_home_use_elder.png" alt="">
					</router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/components/LoveFlowers">
						<img src="../assets/m_home_use_friends.png" alt="">
					</router-link>
				</el-col>
			</el-row>
		</div>
		<div class="flowerS">
			<el-row>
				<el-col :span="6">
					<router-link to="/components/LoveFlowers">
						<div>
							<p class="p1">生日祝福</p>
						</div>
					</router-link>
				</el-col>
				<el-col :span="6">
					<router-link to="/components/LoveFlowers">
						<div>
							<p class="p2">表白求婚</p>
						</div>
					</router-link>
				</el-col>
				<el-col :span="6">
					<router-link to="/components/LoveFlowers">
						<div>
							<p class="p3">开业服务</p>
						</div>
					</router-link>
				</el-col>
				<el-col :span="6">
					<router-link to="/components/LoveFlowers">
						<div>
							<p class="p4">周年纪念</p>
						</div>
					</router-link>
				</el-col>
			</el-row>
		</div>
		<div class="Hot">
			<el-row>
				<el-col :span="12" class="hotss">
					<div class="htoBox">
						<p>热销榜</p>
						<span>集万千宠爱</span>
						<div class="buybox">
							<button>大家都在买</button>
							<span>热销22.0万束</span>
						</div>
					</div>
				</el-col>
				<el-col :span="12" class="onsale">
					<div class="htoBox">
						<p>特价专区</p>
						<span>超值好货</span>
						<div class="buybox">
							<button>大家都在买</button>
							<span>热销22.0万束</span>
						</div>
					</div>
					<div class="onsales"></div>
				</el-col>
			</el-row>
		</div>
		<el-row class="new">
			<el-col :span="8">
				<div class="news1">
					<div class="p7"></div>
					<div class="foot">新品来袭</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="news2">
					<div class="p8"></div>
					<div class="foot">品味之选</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="news3">
					<div class="p9"></div>
					<div class="foot">设计师臻选</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default{
	name:'Flowerss'
}
</script>
<style lang="less" scoped>
	.Box{
		background-color:white;
	}
	.Flowers{
		margin-top:-20px;
		text-align: center;
		font-size: 25px;
		padding-top:10px;
	}
	.one{
		border-left:5px solid #435448;
		margin:0 0 20px 20px;
		width: 150px;
	}
	.Flowers{
		img{
			width:95%;
		}
	}
	.flowerS{
		margin-top:20px;
		text-align: center;
		div{
			margin:auto;
			padding:2px;
			font-size: 15px;
			img{
				width:90%;
			}
			.p1{
				color:black;
				font-size: 1.5rem;
				padding:10px 0;
				width:95%;
				background-image:url(../assets/m_home_use_birthday2.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position:center center;
				height:10rem;
				border-radius:10px;
				background-color:#f7f9fa;
			}
			.p2{
				color:black;
				font-size: 1.5rem;
				padding:10px 0;
				width:95%;
				background-image:url(../assets/m_home_use_profess2.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position:center center;
				height:10rem;
				border-radius:10px;
				background-color:#f7f9fa;
			}
			.p3{
				color:black;
				font-size: 1.5rem;
				padding:10px 0;
				width:95%;
				background-image:url(../assets/m_home_use_business2.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position:center center;
				height:10rem;
				border-radius:10px;
				background-color:#f7f9fa;
			}
			.p4{
				color:black;
				font-size: 1.5rem;
				padding:10px 0;
				width:95%;
				background-image:url(../assets/m_home_use_anniversary2.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position:center center;
				height:10rem;
				border-radius:10px;
				background-color:#f7f9fa;
			}
		}
	}
	.onsale{
		border:1px solid #e9ecf0;
		background-image: url(../assets/m_home_special2.png);
		background-repeat: no-repeat;
		background-size: contain;
		background-position:center center;
		padding:2rem;
		height:19.7rem;
		.htoBox{
			width:100%;
			height:100%;
			overflow:hidden;
			p{
				font-size: 1.5rem;
			}
			span{
				font-size: 1.3rem;
				color:#71797f;
			}
			.buybox{
				margin-top:150px;
				width:300px;
				button{
					color:white;
					padding:5px 10px;
					background-color:#ff734c;
					outline: none;
					border:none;
					border-radius:20px;
				}
				span{
					margin-left:10%;
					font-size: 1rem;
					color:black;
				}
			}
		}
	}
	.Hot{
		width:100%;
		.hotss{
			border:1px solid #e9ecf0;
			background-image: url(../assets/m_home_ranklist2.png);
			background-repeat: no-repeat;
			background-size: contain;
			background-position:center center;
			padding:2rem;
			height:19.7rem;
			.htoBox{
				width:100%;
				height:100%;
				overflow:hidden;
				p{
					font-size: 1.5rem;
				}
				span{
					font-size: 1.3rem;
					color:#71797f;
				}
				.buybox{
					margin-top:150px;
					width:300px;
					button{
						color:white;
						padding:5px 10px;
						background-color:#ff734c;
						outline: none;
						border:none;
						border-radius:20px;
					}
					span{
						margin-left:10%;
						font-size: 1rem;
						color:black;
					}
				}
			}
		}
	}
	.new{
		margin:20px 0;
		width:100%;
		background-color:white;
		.news1{
			margin:10px 0 10px 10px;
			background-image:url(../assets/xinpinlaixi.jpg);
		}
		.news2{
			margin:10px;
			background-image: url(../assets/pinweizhixuan.jpg);
		}
		.news3{
			margin:10px 10px 10px 0;
			background-image:url(../assets/shejishizhenxuan.jpg);
		}
		.p7{
			background-repeat: no-repeat;
			background-size: contain;
			background-position:center center;
			padding:2rem;
			height:11rem;
			text-align: center;
		}
		.foot{
			margin-top:-22px;
			text-align:center;
			width:100%;
			background-color:#333031;
			color:white;
			box-sizing:border-box;
			padding:10px;
			font-size: 20px;
		}
		.p8{
			background-repeat: no-repeat;
			background-size: contain;
			background-position:center center;
			padding:2rem;
			height:11rem;
			text-align: center;		}
		.p9{
			background-repeat: no-repeat;
			background-size: contain;
			background-position:center center;
			padding:2rem;
			height:11rem;
			text-align: center;		}
	}
</style>