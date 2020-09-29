<template>
	<div class="sendflowers">
		<div v-for="n in 8">
			<div class="title">送恋人/爱情鲜花</div>
			<el-row>
				<el-col :span="12">
					<img src="../assets/meiguihua.jpg" alt="" class="photo">
				</el-col>
				<el-col :span="12">
					<p class="one">一往情深</p>
					<p class="of">精品玫瑰礼盒：19枝红玫瑰，勿忘我0.1扎</p>
					<button>年销售冠军</button>
					<div class="champion">经典爆款，年销售冠军！</div>
					<div class="shopping">
						<el-row>
							<el-col :span="20" class="pd">
								<div>￥239 <s>￥315</s></div>
								<div class="xs">已销售12.8万件</div>
							</el-col>
							<el-col :span="4">
								<i class="el-icon-shopping-cart-2"></i>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<img src="../assets/meiguihua.jpg" alt="" class="photo">
				</el-col>
				<el-col :span="12">
					<p class="one">一往情深</p>
					<p class="of">精品玫瑰礼盒：19枝红玫瑰，勿忘我0.1扎</p>
					<button>年销售冠军</button>
					<div class="champion">经典爆款，年销售冠军！</div>
					<div class="shopping">
						<el-row>
							<el-col :span="20" class="pd">
								<div>￥239 <s>￥315</s></div>
								<div class="xs">已销售12.8万件</div>
							</el-col>
							<el-col :span="4">
								<i class="el-icon-shopping-cart-2"></i>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<img src="../assets/meiguihua.jpg" alt="" class="photo">
				</el-col>
				<el-col :span="12">
					<p class="one">一往情深</p>
					<p class="of">精品玫瑰礼盒：19枝红玫瑰，勿忘我0.1扎</p>
					<button>年销售冠军</button>
					<div class="champion">经典爆款，年销售冠军！</div>
					<div class="shopping">
						<el-row>
							<el-col :span="20" class="pd">
								<div>￥239 <s>￥315</s></div>
								<div class="xs">已销售12.8万件</div>
							</el-col>
							<el-col :span="4">
								<i class="el-icon-shopping-cart-2"></i>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<img src="../assets/meiguihua.jpg" alt="" class="photo">
				</el-col>
				<el-col :span="12">
					<p class="one">一往情深</p>
					<p class="of">精品玫瑰礼盒：19枝红玫瑰，勿忘我0.1扎</p>
					<button>年销售冠军</button>
					<div class="champion">经典爆款，年销售冠军！</div>
					<div class="shopping">
						<el-row>
							<el-col :span="20" class="pd">
								<div>￥239 <s>￥315</s></div>
								<div class="xs">已销售12.8万件</div>
							</el-col>
							<el-col :span="4">
								<i class="el-icon-shopping-cart-2"></i>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<img src="../assets/meiguihua.jpg" alt="" class="photo">
				</el-col>
				<el-col :span="12">
					<p class="one">一往情深</p>
					<p class="of">精品玫瑰礼盒：19枝红玫瑰，勿忘我0.1扎</p>
					<button>年销售冠军</button>
					<div class="champion">经典爆款，年销售冠军！</div>
					<div class="shopping">
						<el-row>
							<el-col :span="20" class="pd">
								<div>￥239 <s>￥315</s></div>
								<div class="xs">已销售12.8万件</div>
							</el-col>
							<el-col :span="4">
								<i class="el-icon-shopping-cart-2"></i>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
			<div class="more">
				<router-link to="/components/LoveFlowers">
					<button>查看更多</button>
				</router-link>
			</div>
		</div>
		<div class="enterprise">
			<img src="../assets/m_home_qiyetuangou.png" alt="">
		</div>
		<div class="we">
			<p>为什么选择我们</p>
			<el-row>
				<el-col :span="8">
					<img src="../assets/m_details_brand_01.png" alt="">
					<div>获评鲜花龙头企业</div>
				</el-col>
				<el-col :span="8">
					<img src="../assets/m_details_brand_02.png" alt="">
					<div>1~3小时送花上门</div>
				</el-col>
				<el-col :span="8">
					<img src="../assets/m_details_brand_03.png" alt="">
					<div>赛事冠军花艺师团队</div>
				</el-col>
			</el-row>
			<br>
			<br>
			<el-row>
				<el-col :span="8">
					<img src="../assets/m_details_brand_04.png" alt="">
					<div>严选花材</div>
				</el-col>
				<el-col :span="8">
					<img src="../assets/m_details_brand_05.png" alt="">
					<div>12道严苛品控标准</div>
				</el-col>
				<el-col :span="8">
					<img src="../assets/m_details_brand_06.png" alt="">
					<div>500万用户信赖好评</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
export default{
	name:'sendflowers'
}
</script>
<style scoped lang="less">
	.sendflowers{
		font-size: 15px;
		background-color:white;
		.title{
			font-size:30px;
			text-align: center;
			padding:20px;
		}
		.one{
			padding:0 10px;
			font-size: 30px;
		}
		.of{
			padding:0 10px;
			font-size: 25px;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
		button{
			color:white;
			background-color:#ff734c;
			border-radius:20px;
			outline:none;
			border:none;
			font-size: 15px;
			padding:5px 10px;
			margin:10px;
		}
		.photo{
			width: 95%;
		}
		.champion{
			font-size: 20px;
			padding:25px 10px;
			border-top:1px solid #e9ecf0;
			border-bottom:1px solid #e9ecf0;
		}
		.shopping{
			padding:20px 10px;
			i{
				padding-top:25px;
				font-size: 40px;
			}
			.pd{
				padding-top:10px;
				div{
					font-size:30px;
					color:#ff734c;
				}
				s{
					font-size: 20px;
					color:#71797f;
				}
				.xs{
					font-size: 20px;
					color:#71797f;
				}
			}
		}
		.more{
			padding:20px;
			text-align: center;
			button{
				padding:8px 40px;
				background-color:white;
				outline:none;
				border:1px solid black;
				border-radius:3px;
				color:black;
				font-size:20px;
			}
		}
		.enterprise{
			img{
				width:100%;
			}
		}
		.we{
			padding-bottom:20px;
			text-align: center;
			p{
				font-size:20px;
				padding:20px;
			}
			img{
				width: 60%;
			}
		}
	}
</style>