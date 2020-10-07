<template>
	<div class="Box">
		<div class="set">
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
						<span>设置</span>
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
				<div class="person">
					个人资料
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="account">
					账号和绑定
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="pwd">
					修改密码
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="suggest">
					反馈建议
					<i class="el-icon-arrow-right"></i>
				</div>
			</section>
			<footer>
				<router-link to="/components/Home2">
					<button>退出</button>
				</router-link>
			</footer>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Set',
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
	 	.set{
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
				.person{
					padding:30px 20px;
					font-size: 1.5rem;
					background-color:white;
					margin:20px;
					border-radius:8px;
					i{
						float:right;
					}
				}
				.account{
					padding:30px 20px;
					font-size: 1.5rem;
					background-color:white;
					margin:20px;
					border-radius:8px;
					i{
						float:right;
					}
				}
				.pwd{
					padding:30px 20px;
					font-size: 1.5rem;
					background-color:white;
					margin:20px;
					border-radius:8px;
					i{
						float:right;
					}
				}
				.suggest{
					padding:30px 20px;
					font-size: 1.5rem;
					background-color:white;
					margin:20px;
					border-radius:8px;
					i{
						float:right;
					}
				}
			}
			footer{
				margin-top: 60px;
				text-align:center;
				button{
					background-color: #394d3f;
					color:white;
					border-radius:5px;
					padding:15px 120px;
					font-size: 1.5rem;
					border:none;
					outline:none;
				}
			}
		}
	}
</style>