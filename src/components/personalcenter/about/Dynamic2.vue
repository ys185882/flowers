<template>
	<div class="Box">
		<div class="dynamic2">
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
						<span>公司动态</span>
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
				<div class="navlogo">
					<img src="../../../assets/personalcenter/about/huali_banner_logo.png" alt="">
				</div>
				<div class="logo" v-for="n in 10">
					<div>
						<router-link to="/personalcenter/about/Approval">
							<h3>花礼网再次获得国家集高新技术企业认定</h3>
							<p>
								<el-row>
									<el-col :span="12" class="left">
										<span>2020.04.07</span>
									</el-col>
									<el-col :span="12" class="right">
										<span>
											查看详情<i class="el-icon-arrow-right"></i>
										</span>
									</el-col>
								</el-row>
							</p>
						</router-link>
					</div>
				</div>
			</section>
	    <div class="Footer">
	      <el-row>
	        <el-col :span="6">
	          <router-link to="/personalcenter/about/About2" class="Links">
	            <p>关于我们</p>
	          </router-link>
	        </el-col>
	        <el-col :span="6">
	          <router-link to="/personalcenter/about/Culture2" class="Links">
	            <p>企业文化</p>
	          </router-link>
	        </el-col>
	        <el-col :span="6">
						<router-link to="/personalcenter/about/Dynamic2" class="Dynamic">
							<p>公司动态</p>
						</router-link>
					</el-col>
	        <el-col :span="6">
	        	<router-link to="/personalcenter/about/Media2" class="Links">
		          <p>媒体报道</p>
	          </router-link>
	        </el-col>
	      </el-row>
	    </div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Dynamic2',
	data(){
		return {
			show:false
		}
	},
	methods: {
    back(){
       this.$router.go(-1);
    }
	}
}
</script>
<style scoped lang="less">
	.Box{
		padding-bottom:170px;
		background-color:white;
		.dynamic2{
			height:100%;
			margin:auto;
			max-width:640px;
			background-color:white;
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
			nav{
				background-color:white;
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:20px;
				padding:20px 0;
				line-height: 50%;
				border-bottom:1px solid #e9ecf0;
				span{
					font-size:25px;
					i{
						font-size:40px;
						line-height: 50%;
					}
				}
			}
			.navlogo{
				text-align:center;
				line-height:25rem;
				background-image:url(../../../assets/personalcenter/about/banner_bg.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center center;
				height: 23rem;
			}
			.logo{
				margin:auto;
				width:90%;
				padding:30px 0;
				border-bottom:1px solid #e9ecf0;
				h3{
					color:black;
				}
				p{
					margin-top:30px;
					font-size: 12px;
					color:#b4babf;
					.right{
						text-align:right;
					}
				}
			}
			.foot{
				img{
					width:100%;
				}
			}
			.Footer{
		    background-color:#f7f9fa;
		    width:100%;
		    max-height:80px;
		    text-align: center;
		    position: fixed;
		    bottom:0;
		    left:0;
		    .el-col{
		    	border:1px solid #e9ecf0;
		    }
		    .Dynamic{
		    	color:#ff734c;
		    }
				p{
		    	font-size:12px;
					padding:12px;
					background-color:#f7f9fa;
				}
				.Links{
					display: inline-block;
					width:100%;
					color:black;
				}
		  }
		}
	}
</style>