<template>
	<div class="Box">
		<div class="dirthday">
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
						<span>生日/纪念日提醒</span>
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
				<img src="../../../assets/dirthday/1.jpg" alt="">
			</section>
			<footer>
				<button>+添加提醒</button>
			</footer>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Dirthday',
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
	 	.dirthday{
	 		max-width:640px;
	 		margin:auto;
			background-color:white;
		 	.elbtn{
		 		padding:0;
		 		border:none;
		 		background-color:#ff6600;
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
	 			background-color:#ff6600;
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
				span{
					color:white;
				}
				i{
					font-size:2rem;
					color:white;
				}
			}
			section{
				img{
					width:100%;
				}
			}
			footer{
				text-align:center;
				border:1px solid #dddddd;
				padding:10px 0;
				width:100%;
				position:fixed;
				bottom:0;
				background-color:white;
				button{
					width:80%;
					background-color:#fe6d0c;
					padding:10px 0;
					font-size: 1.1rem;
					color:white;
					border:none;
					outline:none;
					border-radius:5px;
				}
			}
		}
	}
</style>