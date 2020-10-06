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
				<el-col :span="22">
					<span>个人中心</span>
				</el-col>
				<el-col :span="1"></el-col>
			</el-row>
		</nav>
		<div class="headerbox">
			<div class="header">
				<img src="../../assets/personalcenter/headerphoto.jpg" alt="">
				<span>国服增幅王</span>
				<br>
				<button><i></i>注册会员</button>
			</div>
			<div class="sectionbox">
				<div class="section">
					<el-row class="first">
						<el-col :span="12">我的订单</el-col>
						<el-col :span="12">
							<router-link to="/personalcenter/order/Allorder">
								<div class="all">
									全部订单
									<i class="el-icon-arrow-right"></i>
								</div>
							</router-link>
						</el-col>
					</el-row>
					<el-row class="two">
						<el-col :span="8">
							<router-link to="/personalcenter/order/Payment">
								<img src="../../assets/personalcenter/myinfo_pendingpay.png" alt="">
								<div>待付款</div>
							</router-link>
						</el-col>
						<el-col :span="8">
							<router-link to="/personalcenter/order/Delivery">
								<img src="../../assets/personalcenter/myinfo_distribution.png" alt="">
								<div>今日配送</div>
							</router-link>
						</el-col>
						<el-col :span="8">
							<router-link to="/personalcenter/order/Evaluates">
								<img src="../../assets/personalcenter/myinfo_evaluation.png" alt="">
								<div>待评价</div>
							</router-link>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<section>
			<div class="First">
				<el-row>
					<el-col :span="6">
						<router-link to="/personalcenter/coupon/coupon">
							<img src="../../assets/personalcenter/youhui.png" alt="">
							<div>优惠券</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to ="/personalcenter/equitycard/EquityCard">
							<img src="../../assets/personalcenter/quanyi.png" alt="">
							<div>权益卡</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/balance/Balance">
							<img src="../../assets/personalcenter/yue.png" alt="">
							<div>余额</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/integral/Integral">
							<img src="../../assets/personalcenter/zuanshi.png" alt="">
							<div>会员积分</div>
						</router-link>
					</el-col>
				</el-row>
			</div>
			<div class="Two">
				<el-row>
					<el-col :span="6">
						<router-link to="/personalcenter/address/Address">
							<img src="../../assets/personalcenter/dizhi.png" alt="">
							<div>收货地址</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/dirthday/Dirthday">
							<img src="../../assets/personalcenter/naozhong.png" alt="">
							<div>生日纪念提醒</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/collect/Collect">
							<img src="../../assets/personalcenter/colle.png" alt="">
							<div>我的收藏</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<img src="../../assets/personalcenter/biao.png" alt="">
						<div>浏览记录</div>
					</el-col>
				</el-row>
			</div>
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
					<router-link to="/shoppingcar/ShoppingCar" class="Links">
						<i class="el-icon-shopping-cart-2"></i>
						<p>购物车</p>
					</router-link>
				</el-col>
        <el-col :span="6">
        	<router-link to="/personalcenter/PersonalCenter" class="personal">
	          <i class="el-icon-user"></i>
	          <p>我的</p>
          </router-link>
        </el-col>
      </el-row>
    </div>
		<footer>
			<div class="Ft">
				<el-row class="ft">
					<el-col :span="6">
						<router-link to="/personalcenter/Customerservice">
							<img src="../../assets/personalcenter/kefu.png" alt="">
							<div>联系客服</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/help/Help">
							<img src="../../assets/personalcenter/help.png" alt="">
							<div>帮助中心</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/about/About">
							<img src="../../assets/personalcenter/guanyu.png" alt="">
							<div>关于花礼</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/set/Sets">
							<img src="../../assets/personalcenter/shezhi.png" alt="">
							<div>设置</div>
						</router-link>
					</el-col>
				</el-row>
			</div>
		</footer>
	</div>
</template>
<script>
export default{
	name:'PersonalCenter',
	methods:{
	    back(){
	        this.$router.go(-1);
	    },
	}
}
</script>
<style scoped lang="less">
	 .Box{
	 	padding-bottom:50px;
	 	background-color:#e9ecf0;
	 	a{
	 		color:black;
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
		i{
			font-size:30px;
			line-height: 50%;
		}
	}
	.headerbox{
		margin:auto;
		max-width:640px;
		background-image: url(../../assets/backgroundv3.png);
		background-size: contain;
		background-position:center center;
		background-repeat:no-repeat;
		padding:20px 0;
		height:186px;
		.header{
			width:200px;
			height:100%;
			margin:40px auto -50px;
			img{
				width:40%;
				border-radius:50%;
				float:left;
			}
			span{
				color:white;
				margin:10px;
				float:left;
			}
			button{
				float:left;
				margin-left:10px;
				background-color:#fe6600;
				color:white;
				border:none;
				outline:none;
				height:20px;
				width:80px;
				border-radius:20px;
			}
		}
		.sectionbox{
			background-color:white;
			margin:0 20px;
			border-radius:10px;
			font-size:25px;
			.section{
				.all{
					color:black;
					text-align: right;
				}
				.first{
					padding:20px;
					border-bottom:1px solid #e9ecf0;
				}
				.two{
					font-size: 20px;
					padding:20px;
					text-align:center;
				}
			}
		}
	}
	section{
		font-size:20px;
		text-align: center;
		max-width:640px;
		margin:auto;
		.First{
			max-width: 100%;
			margin:20px 20px 0 20px;
			background-color:white;
			margin-top:200px;
			padding:30px;
			border-radius:10px 10px 0 0;
			border-bottom:1px solid #e9ecf0;
			img{
				width:25%;
			}
			a{
				color:black;
			}
		}
		.Two{
			max-width: 100%;
			margin:0 20px;
			background-color:white;
			padding:30px;
			border-radius:0 0 10px 10px;
			img{
				width:25%;
			}
		}
	}
	footer{
		font-size:20px;
		text-align: center;
		max-width:640px;
		margin:auto;
		.Ft{
			max-width:100%;
			margin:20px 20px 80px 20px;
			padding:30px;
			border-radius:10px;
			background-color:white;
			img{
				width:25%;
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
    z-index:20;
    .el-icon-s-home,.el-icon-search,.el-icon-shopping-cart-2,.el-icon-user{
      font-size: 25px;
    }
    .personal{
      color:#ff734c;
    }
    .Links{
      display: inline-block;
      width:100%;
      color:black;
    }
  }
</style>