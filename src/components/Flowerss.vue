<template>
	<div>
		<div class="Flowers">
			<div class="one">| 一秒选花</div>
			<el-row>
				<el-col :span="8">
					<img src="../assets/m_home_use_lover.png" alt="">
				</el-col>
				<el-col :span="8">
					<img src="../assets/m_home_use_elder.png" alt="">
				</el-col>
				<el-col :span="8">
					<img src="../assets/m_home_use_friends.png" alt="">
				</el-col>
			</el-row>
		</div>
		<div class="flowerS">
			<el-row>
				<el-col :span="6">
					<div>
						生日祝福
						<img src="../assets/m_home_use_birthday2.png" alt="">
					</div>
				</el-col>
				<el-col :span="6">
					<div>
						表白求婚
						<img src="../assets/m_home_use_profess2.png" alt="">
					</div>
				</el-col>
				<el-col :span="6">
					<div>
						开业服务
						<img src="../assets/m_home_use_business2.png" alt="">
					</div>
				</el-col>
				<el-col :span="6">
					<div>
						周年纪念
						<img src="../assets/m_home_use_anniversary2.png" alt="">
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="Hot">
			<el-row>
				<el-col :span="12" class="hot">
					<div>
						热销榜
						<br>
						集万千宠爱
					</div>
					<div class="hots">
						大家都在买
					</div>
				</el-col>
				<el-col :span="12" class="onsale">
					<div>
						特价专区
						<br>
						超值好货
					</div>
					<div class="onsales"></div>
				</el-col>
			</el-row>
		</div>
		<el-row class="new">
			<el-col :span="8">
				<img src="../assets/xinpinlaixi.jpg" alt="">
				<p>新品来袭</p>
			</el-col>
			<el-col :span="8">
				<img src="../assets/pinweizhixuan.jpg" alt="">
				<p>品味之选</p>
			</el-col>
			<el-col :span="8">
				<img src="../assets/shejishizhenxuan.jpg" alt="">
				<p>设计师臻选</p>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default{
	name:'Flowerss'
}
</script>
<style lang="less" scoped>
	.Flowers{
		text-align: center;
		font-size: 25px;
	}
	.one{
		width: 150px;
	}
	.Flowers img,.flowerS img{
		width: 95%;
	}
	.flowerS{
		text-align: center;
	}
	.flowerS div{
		background-color:#f7f9fa;
		font-size: 15px;
	}
	.hot{
		background-image: url(../assets/m_home_ranklist2.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height:130px;
	}
	.onsale{
		background-image: url(../assets/m_home_special2.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height:130px;	
	}
	.Hot{
		width:100%;
	}
	.new{
		width:100%;
		text-align: center;
		background-color:white;
		img{
			width:95%;
		}
		p{
			background-color:#4d4f53;
			color:white;
		}
	}
</style>