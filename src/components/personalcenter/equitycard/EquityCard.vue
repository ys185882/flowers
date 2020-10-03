<template>
	<div class="Box">
		<div class="equitycard">
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
						<span>我的权益卡</span>
					</el-col>
					<el-col :span="1"></el-col>
				</el-row>
			</nav>
			<section>
				<img src="../../../assets/equitycard/1.png" alt="">
				<div>您还没有可用的权益卡哦...</div>
				<p>
					<button>购买权益卡</button>
				</p>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:'EquityCard',
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
	 	.equitycard{
	 		max-width:640px;
	 		margin:auto;
			border-bottom:2px solid #f3f5f7;
			background-color:white;
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
				img{
					margin:80px;
					width:50%;
				}
				div{
					font-size: 1.5rem;
					margin:20px 0;
				}
				p{
					margin:30px 0 100px;
					button{
						padding:10px 20px;
						border-radius:40px;
						background-color:#ff734c;
						font-size: 1.5rem;
						color:white;
						outline:none;
						border:none;
					}
				}
			}
		}
	}
</style>