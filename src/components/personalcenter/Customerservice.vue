<template>
	<div class="Box">
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
					<span>客服</span>
				</el-col>
				<el-col :span="1">
					<i class="el-icon-s-unfold"></i>
				</el-col>
			</el-row>
		</nav>
		<section>
			<div class="customer">
				<img src="../../assets/personalcenter/customer/wxguanjia-kf.png" alt="">
				<span>专属秘书|喜棠</span>
			</div>
			<div class="tt">Hi，我是您的专属秘书喜棠，添加我的微信，我将帮您催单，有什么需求时，1对1帮您走绿色通道。</div>
			<div class="text">
				<span>微信号：Huali__duebass</span>
				<button>加我微信</button>
			</div>
			<el-row>
				<el-col :span="12">
					<div class="online">
						<i></i>
						<p>在线客服</p>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="phone">
						<i></i>
						<p>400电话</p>
					</div>
				</el-col>
			</el-row>
			<div class="onlinemessage">
				<i></i>
				<span>在线留言</span>
				<i></i>
			</div>
			<div class="time">客服服务时间为：08:30-21:00</div>
		</section>
	</div>
</template>
<script>
export default{
	name: 'Customerservice',
	methods: {
	    back(){
	       this.$router.go(-1);
	    }
	}
}
</script>
<style scoped lang="less">
	.Box{
		max-width:640px;
		margin:auto;
		height:100%;
	}
	nav{
		background-color:white;
		margin:auto;
		max-width: 640px;
		text-align: center;
		font-size:20px;
		padding:20px 0;
		line-height: 50%;
		span{
			font-size:25px;
			i{
				font-size:40px;
				line-height: 50%;
			}
		}
	}
	section{
		.customer{
			padding:0 20px;
			img{
				width:60px;
			}
			span{
				font-size: 25px;
			}
		}
		.tt{
			background-image: url(../../assets/personalcenter/customer/wxguanjia_wode_bg.png);
			font-size:1.3rem;
			background-position: top center;
			background-size: contain;
			background-repeat: no-repeat;
			width:90%;
			height: 4.8rem;
			padding:1.28rem;
			margin:0 auto;
		}
		.text{
			font-size:25px;
			button{
				border-radius:5px;
				font-size: 25px;
				color:white;
				padding:10px  40px;
				border:none;
				outline:none;
				background-color:#ff734c
			}
		}
	}
</style>