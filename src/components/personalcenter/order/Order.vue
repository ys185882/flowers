<template>
	<div class="Box">
		<div class="order">
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
						<span>我的订单</span>
					</el-col>
					<el-col :span="1"></el-col>
				</el-row>
			</nav>
			<section>
				<el-row>
					<el-col :span="6">
						<router-link to="/personalcenter/order/Allorder">全部</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/order/Payment">待付款</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/order/Delivery">今日配送</router-link>
					</el-col>
					<el-col :span="6">
						<router-link to="/personalcenter/order/Evaluates">待评价</router-link>
					</el-col>
				</el-row>
			</section>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Order',
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
	 	.order{
	 		max-width:640px;
	 		margin:auto;
			nav{
				background-color:white;
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:1.5rem;
				padding:20px 0;
				line-height: 50%;
				i{
					font-size:2.5rem;
					line-height: 50%;
				}
			}
			section{
				text-align:center;
				background-color:white;
				a{
					display:inline-block;
					color:black;
					font-size: 1.5rem;
					padding:20px 15px;
				}
	      .router-link-active{
	        border-bottom:5px solid #ff734c;
	        color:#ff805c;
	      }
			}
	 	}
	 }
</style>