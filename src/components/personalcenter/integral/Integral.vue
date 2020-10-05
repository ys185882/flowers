<template>
	<div class="Box">
		<div class="integral">
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
						<span>积分</span>
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
				<div class="boxs">
						积分规则
				</div>
				<p>300<span>积分</span></p>
				<p class="num">积分兑换</p>
			</section>
			<footer>
				<div class="bosx">
					<el-row>
						<el-col :span="23">
							<span>积分明细</span>
						</el-col>
						<el-col :span="1">
							<i class="el-icon-arrow-right"></i>
						</el-col>
					</el-row>
				</div>
				<div class="boxss">
					<el-row>
						<el-col :span="21">
							<span>完善个人资料赠送积分</span>
							<div class="time">2020/9/22 11：06：09</div>
						</el-col>
						<el-col :span="3">
							<p>+300</p>
						</el-col>
					</el-row>
				</div>
			</footer>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Integral',
		data:() => ({
			show:false
		}),
		methods:{
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
	 	.integral{
	 		max-width:640px;
	 		margin:auto;
		 	.elbtn{
		 		padding:0;
		 		border:none;
		 		background-color:white;
		 		color:black;
		 	}
			nav{
				background-color:white;
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:1.5rem;
				padding:20px 0;
				line-height: 50%;
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
				i{
					font-size:2rem;
					line-height: 50%;
				}
			}
			section{
				color:white;
				background-color:#fe7800;
				.boxs{
					padding:10px 10px 0px 20px;
					text-align:right;
					font-size:0.8rem;
				}
				p{
					padding:10px 10px 10px 20px;
					text-align:left;
					font-size:3rem;
					span{
							font-size:1.2rem;
					}
				}
				.num{
					margin-top: 20px;
					font-size: 0.9rem;
					text-align:center;
					background-color:#fe6600;
					padding:10px;
				}
			}
			footer{
				background-color:white;
				.bosx{
					padding:10px;
					border-bottom:1px solid #e4e4e4;
				}
				.boxss{
					padding:10px;
					font-size: 0.8rem;
					.time{
						color:#bcbcbc;
					}
					p{
						padding:10px;
						color:#ff6600;
						font-size:1.2rem;
					}
				}
			}
		}
	}
</style>