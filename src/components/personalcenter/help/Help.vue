<template>
	<div class="Box">
		<div class="Help">
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
						<span>帮助中心</span>
					</el-col>
					<el-col :span="4"></el-col>
				</el-row>
			</nav>
			<section v-for="n in 5">
				<el-row>
					<el-col :span="8" class="one">
						<img src="../../../assets/personalcenter/help.png" alt="">
						<div>常见问题<i class="el-icon-arrow-right"></i></div>
					</el-col>
					<el-col :span="8" class="two">
						<div class="bor">鲜花3小时送达</div>
						<div>异地送花</div>
					</el-col>
					<el-col :span="8" class="three">
						<div class="bor">提前半天预定</div>
						<div>鲜花免费配送</div>
					</el-col>
				</el-row>
			</section>
			<footer>
				<el-row>
					<el-col :span="8" class="one">
						<img src="../../../assets/personalcenter/help.png" alt="">
						<div>常见问题<i class="el-icon-arrow-right"></i></div>
					</el-col>
					<el-col :span="8" class="two">
						<div class="bor">鲜花3小时送达</div>
						<div>异地送花</div>
					</el-col>
					<el-col :span="8" class="three">
						<div class="bor">提前半天预定</div>
						<div>鲜花免费配送</div>
					</el-col>
				</el-row>
			</footer>
			<div class="foot">
				在线客服<span>(8：00-21：00)</span>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Help',
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
	 	background-color:#f7f9fa;
	 	.Help{
	 		margin:auto;
	 		max-width:640px;
	 		background-color:white;
			nav{
				background-color:white;
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:20px;
				padding:20px 0;
				line-height: 50%;
				border-bottom:6px solid #f7f9fa;
				span{
					font-size:25px;
					i{
						font-size:40px;
						line-height: 50%;
					}
				}
			}
			section{
				font-size:1.3rem;
				text-align:center;
				border-bottom:6px solid #f0efed;
				.one{
					height: 12rem;
					padding-top:3.5rem;
					border-right:2px solid #f0efed;
				}
				.two{
					color:#71797f;
					div{
						border-right:2px solid #f0efed;
						height:6rem;
						line-height:6rem;
					}
					.bor{
						border-bottom:2px solid #f0efed;
					}
				}
				.three{
					color:#71797f;
					div{
						border-lefts:2px solid #f0efed;
						height:6rem;
						line-height:6rem;
					}
					.bor{
						border-bottom:2px solid #f0efed;
					}
				}
			}
			footer{
				font-size:1.3rem;
				text-align:center;
				border-bottom:6px solid #f7f9fa;
				.one{
					height: 12rem;
					padding-top:3.5rem;
					border-right:2px solid #f0efed;
				}
				.two{
					color:#71797f;
					div{
						border-right:2px solid #f0efed;
						height:6rem;
						line-height:6rem;
					}
					.bor{
						border-bottom:2px solid #f0efed;
					}
				}
				.three{
					color:#71797f;
					div{
						border-lefts:2px solid #f0efed;
						height:6rem;
						line-height:6rem;
					}
					.bor{
						border-bottom:2px solid #f0efed;
					}
				}
			}
			.foot{
				font-size: 1.3rem;
				padding:30px;
				padding-left:90px;
				background-image:url(../../../assets/personalcenter/kefu.png);
				background-repeat: no-repeat;
				background-position:center left 30px;
				span{
					color:#71797f;
				}
				i{
					font-size:2rem;
					float:right;
				}
			}
	 	}
	}
</style>