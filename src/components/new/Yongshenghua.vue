<template>
	<div class="Box">
		<div class="yongshenghua" v-for="n in 15">
			<el-row>
				<el-col :span="9">
					<img src="../../assets/xinpin/2.jpg" alt="">
				</el-col>
				<el-col :span="15">
					<div class="two">
						<div class="header">永生花蓝牙音箱小夜灯</div>
						<div class="huise">永生花礼盒</div>
						<div class="huayishi">创意新品 永生花蓝牙音箱</div>
						<div class="money">
							<span>￥398</span>
							<button>立即抢购</button>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	name:'Yongshenghua'
</script>
<style scoped lang="less">
.Box{
	padding:25px;
	.yongshenghua{
		margin:20px 0;
		padding:20px;
		background-color:#f7f9fa;
		img{
			width:100%;
		}
		.two{
			padding:10px 0 10px 20px;
			.header{
				font-size:1.5rem;
				color:#3d4d42;
			}
			.huise{
				color:#71797f;
				font-size: 1.3rem;
				margin:20px 0;
			}
			.huayishi{
				font-size: 1.3rem;
				color:#ff734c;
			}
			.money{
				margin-top: 20px;
				span{
					font-size:1.5rem;
				}
				button{
					outline: none;
					border:none;
					background-color:#ff734c;
					color:white;
					font-size: 1.2rem;
					padding:5px 5px;
					border-radius:3px;
					float:right;
				}
			}
		}
	}
}
</style>