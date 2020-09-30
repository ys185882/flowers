<template>
	<div class="Box">
		<div class="gift" v-for="n in 15">
			<el-row>
				<el-col :span="9">
					<img src="../../assets/xinpin/3.jpg" alt="">
				</el-col>
				<el-col :span="15">
					<div class="two">
						<div class="header">山进潘多拉便携式无线蓝牙音箱/迷你低音炮复古收音机</div>
						<div class="huise">原创艺术音箱 享受听觉盛宴</div>
						<div class="huayishi">潘多拉音乐魔盒 蓝牙音箱</div>
						<div class="money">
							<span>￥339</span>
							<button>立即抢购</button>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	name:'Gift'
</script>
<style scoped lang="less">
.Box{
	padding:25px;
	.gift{
		margin:20px 0;
		padding:20px;
		background-color:#f7f9fa;
		img{
			width:100%;
		}
		.two{
			padding:10px 0 10px 20px;
			.header{
				white-space: nowrap;
				overflow:hidden;
				text-overflow: ellipsis;
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