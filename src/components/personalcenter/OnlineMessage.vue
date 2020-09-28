<template>
	<div class="Box">
		<div class="onlinemessage">
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
						<span>在线留言</span>
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
				<div class="nav">
					<el-row>
						<el-col :span="12" class="toggle">
							<router-link to="/personalcenter/consult">
								<span>咨询售后</span>
							</router-link>
						</el-col>
						<el-col :span="12" class="toggle">
							<router-link to="/personalcenter/proposal">
								<span>投诉建议</span>
							</router-link>
						</el-col>
					</el-row>
				</div>
				<router-view></router-view>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:'OnlineMessage',
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
		height:100%;
		background-color:#e9ecf0;
		.onlinemessage{
			margin:auto;
			max-width:640px;
			background-color:white;
			nav{
				background-color:white;
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:20px;
				padding:30px 10px;
				line-height: 50%;
				span{
					font-size:25px;
					i{
						font-size:40px;
						line-height: 50%;
					}
				}
			}
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
		section{
			.nav{
				text-align:center;
				font-size: 25px;
				border-bottom:1px solid#e9ecf0;
				span{
					display:inline-block;
					padding:20px;
				}
			}
			.toggle{
				span{
					color:black;
				}
				.router-link-active{
					padding-bottom:17px;
		      border-bottom:3px solid #ff734c;
		      span{
		      	color:#ff805c;
		      }
				}
			}
		}
	}
</style>