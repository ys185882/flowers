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
				<span>Hi,欢迎来到花礼网</span>
				<br>
				<router-link to="/">
					<button>登录/注册</button>
				</router-link>
			</div>
			<div class="sectionbox">
				<div class="section">
					<el-row class="first">
						<el-col :span="12">我的订单</el-col>
						<el-col :span="12">
							<router-link to="/">
								<div class="all">
									全部订单
									<i class="el-icon-arrow-right"></i>
								</div>
							</router-link>
						</el-col>
					</el-row>
					<el-row class="two">
						<el-col :span="8">
							<router-link to="/">
								<img src="../../assets/personalcenter/myinfo_pendingpay.png" alt="">
								<div>待付款</div>
							</router-link>
						</el-col>
						<el-col :span="8">
							<router-link to="/">
								<img src="../../assets/personalcenter/myinfo_distribution.png" alt="">
								<div>今日配送</div>
							</router-link>
						</el-col>
						<el-col :span="8">
							<router-link to="/">
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
						<router-link to="/">
							<img src="../../assets/personalcenter/youhui.png" alt="">
							<div>优惠券</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/">
							<img src="../../assets/personalcenter/quanyi.png" alt="">
							<div>权益卡</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/">
							<img src="../../assets/personalcenter/yue.png" alt="">
							<div>余额</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/">
							<img src="../../assets/personalcenter/zuanshi.png" alt="">
							<div>会员积分</div>
						</router-link>
					</el-col>
				</el-row>
			</div>
			<div class="Two">
				<el-row>
					<el-col :span="6">
						<img src="../../assets/personalcenter/dizhi.png" alt="">
						<router-link to="/">
							<div>收货地址</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<img src="../../assets/personalcenter/naozhong.png" alt="">
						<router-link to="/">
							<div>生日纪念提醒</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<img src="../../assets/personalcenter/colle.png" alt="">
						<router-link to="/">
							<div>我的收藏</div>
						</router-link>
					</el-col>
					<el-col :span="6">
						<img src="../../assets/personalcenter/biao.png" alt="">
						<router-link to="/">
							<div>浏览记录</div>
						</router-link>
					</el-col>
				</el-row>
			</div>
		</section>
		<div class="Footer">
      <el-row>
        <el-col :span="6">
          <router-link to="/" class="Links">
            <i class="el-icon-s-home"></i>
            <p>首页</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/classification/Classs2" class="Links">
            <i class="el-icon-search"></i>
            <p>分类</p>
          </router-link>
        </el-col>
        <el-col :span="6">
					<router-link to="/shoppingcar/ShoppingCar2" class="Links">
						<i class="el-icon-shopping-cart-2"></i>
						<p>购物车</p>
					</router-link>
				</el-col>
        <el-col :span="6">
        	<router-link to="/personalcenter/PersonalCenter2">
	          <i class="el-icon-user personal"></i>
	          <p class="personal">我的</p>
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
						<router-link to="/">
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
						<router-link to="/">
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
  *{
  	color:black;
  }
	.Box{
	 	padding-bottom:50px;
	 	background-color:#e9ecf0;
	}
	nav{
		background-color:white;
		margin:auto;
		max-width: 640px;
		text-align: center;
		font-size:20px;
		padding:20px 0;
		line-height: 50%;
		span{
			font-size:25px;
			i{
				font-size:40px;
				line-height: 50%;
			}
		}
	}
	.headerbox{
		margin:auto;
		max-width:640px;
		background-color:orange;
		padding:20px 0;
		height:150px;
		.header{
			width:200px;
			height:100%;
			margin:auto;
			text-align:center;
			span{
				color:white;
				font-size:20px;
			}
			button{
				margin-top:20px;
				width:180px;
				height:60px;
				background-color:white;
				border:none;
				outline:none;
				border-radius:30px;
				font-size:20px;
			}
		}
		.sectionbox{
			background-color:white;
			margin:0 20px;
			border-radius:10px;
			font-size:25px;
			.section{
				.all{
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