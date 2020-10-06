<template>
	<div class="Box">
		<div class="collect">
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
				<img src="../../../assets/collect/1.png" alt="">
				<p>哦噢!～你还没有收藏的商品</p>
			</section>
			<footer>
				<nav>为你推荐</nav>
				<div v-for="n in 10">
					<img src="../../../assets/meiguihua.jpg" alt="">
					<p>￥239</p>
				</div>
			</footer>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Collect',
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
	 	.collect{
	 		max-width:640px;
	 		margin:auto;
			background-color:white;
		 	.elbtn{
		 		padding:0;
		 		border:none;
		 		background-color:#f9f9f9;
		 		color:black;
		 	}
			nav{
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:1.5rem;
				padding:20px 0;
				line-height: 50%;
	 			background-color:#f9f9f9;
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
					font-size: 1rem;
				}
				i{
					font-size:1.3rem;
				}
			}
			section{
				text-align:center;
				img{
					width:80%;
				}
				p{
					font-size: 14px;
					margin-bottom: 30px;
					margin-top:15px;
				}
			}
			footer{
				height:150px;
				padding:0 10px;
				border-top:4px solid #eeeeee;
				nav{
					font-size: 1.1rem;
					text-align:left;
					background-color:white;
				}
				div{
					display:inline-block;
					text-align:center;
					width:60px;
					img{
						width:60px;
					}
				}
			}
		}
	}
</style>