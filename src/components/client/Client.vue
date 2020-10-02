<template>
	<div class="Box">
		<div class="client">
			<el-row>
				<el-col :span="4">
					<div class="backTo">
					  <span @click="back">
							<i class="el-icon-arrow-left"></i>
						</span>
					</div>
				</el-col>
			</el-row>
			<p class="logo">Hua.com花礼网</p>
			<p class="logos">花心思 只为你</p>
			<button>下载花礼网APP</button>
			<p class="money">领取100元App专享礼金</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Client',
		methods: {
	    back(){
	       this.$router.go(-1);
	    }
		}
	}
</script>
<style scoped lang="less">
	.Box{
		background-color:#0f453b;
		.client{
			text-align:center;
			max-width:640px;
			margin:auto;
			height:82.5rem;
			background-image:url(../../assets/client/m_appdownload_bg.png);
			background-position:center center;
			background-repeat:no-repeat;
			i{
				font-size: 50px;
				border-radius:40px;
				background-color:#9eb3ae;
			}
			.logo{
				font-size: 3.5rem;
				color:white;
				margin-top: 100px;
			}
			.logos{
				font-size: 1.7rem;
				color:white;
				margin-top: 10px;
			}
			button{
				background-color:#ff7347;
				color:white;
				font-size: 2rem;
				border-radius:40px;
				padding:20px 60px;
				border:none;
				outline:none;
				margin:60px 0 20px 0;
			}
			.money{
				color:white;
				font-size: 2rem;
			}
		}
	}
</style>