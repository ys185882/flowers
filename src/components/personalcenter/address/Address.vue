<template>
	<div class="Box">
		<div class="address">
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
						<span>收货地址</span>
					</el-col>
					<el-col :span="1"></el-col>
				</el-row>
			</nav>
			<section>
				<div>
					<img src="../../../assets/address/1.png" alt="">
				</div>
				<p>您暂无收货地址哦...</p>
			</section>
			<footer>
				<div>
					<button>+新建地址</button>
				</div>
			</footer>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Address',
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
		.address{
			max-width:640px;
			margin:auto;
			background-color:white;
			text-align:center;
			nav{
				background-color:white;
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:16px;
				padding:20px 0;
				line-height: 50%;
				i{
					font-size:20px;
					line-height: 50%;
				}
			}
			section{
				padding-bottom:500px;
				div{
					img{
						width:130px;
						margin-top: 130px;
					}
				}
				p{
					font-size: 12px;
				}
			}
			footer{
				width:640px;
				position:fixed;
				bottom:0;
				text-align:center;
				background-color:white;
				div{
					padding:10px 0;
					button{
						padding:10px 0;
						width:80%;
						background-color:#ff734c;
						color:white;
						border-radius:60px;
						outline:none;
						border:none;
					}
				}
			}
		}
	}
</style>