<template>
	<div class="flowersBox">
	<el-row class="fz">
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>认准龙头企业
		</el-col>
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>15年品牌
		</el-col>
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>3小时送花
		</el-col>
		<el-col :span="6">
			<i class="el-icon-circle-check"></i>
			最近条好评
		</el-col>
	</el-row>
	<br>
		<div class="flowers">
			<img src="../assets/flower.png">
			<div>鲜花</div>
		</div>
		<div class="flowers">
			<img src="../assets/flower2.png">
			<div>永生花</div>
		</div>
		<div class="flowers">
			<img src="../assets/dangao.png">
			<div>蛋糕</div>
		</div>
		<div class="flowers">
			<img src="../assets/liwu.png">
			<div>礼物</div>
		</div>
		<div class="flowers">
			<img src="../assets/pay.png">
			<div>企业团购</div>
		</div>
	<br>
	<br>
	<div class="navPhoto">
		<img src="../assets/nav.jpg" alt="">
	</div>
	<el-row class="ybBox">
		<el-col :span="6" class="yb">
			<div>
				<br>
				热销花篮
				<br>
				+月饼组合
				<br>
				￥299
			</div>
			<div>
				<img src="../assets/yb.jpg" alt="">
			</div>
		</el-col>
		<el-col :span="6" class="yb">
			<div>
				<br>
				热销花篮
				<br>
				+月饼组合
				<br>
				￥299
			</div>
			<div>
				<img src="../assets/yb.jpg" alt="">
			</div>
		</el-col>
	</el-row>
	<el-row class="ybBox">
		<el-col :span="6" class="yb">
			<div>
				<br>
				热销花篮
				<br>
				+月饼组合
				<br>
				￥299
			</div>
			<div>
				<img src="../assets/yb.jpg" alt="">
			</div>
		</el-col>
		<el-col :span="6" class="yb">
			<div>
				<br>
				热销花篮
				<br>
				+月饼组合
				<br>
				￥299
			</div>
			<div>
				<img src="../assets/yb.jpg" alt="">
			</div>
		</el-col>
	</el-row>
</div>
</template>
	
<script>
export default{
	name:'Section'
}
</script>
<style lang="less" scoped>
	.fz{
		padding:10px;
		font-size:12px;
	}
	.el-icon-circle-check{
		border-radius: 10px;
		background-color:#435448;
		color:white;
	}
	.flowersBox{
		background-color: white;
	}
	.flowers{
		font-size:12px;
		text-align: center;
		display: inline-block;
		width: 18%;
		img{
			width:80%;
		}
	}
	.navPhoto{
		max-width:640px;
		margin-bottom:-4px;
	}
	.navPhoto img{
		width: 100%;
	}
	.yb,.yb div{
		text-align: center;
		width:50%;
		float:left;
	}
	.yb img{
		width: 100%;
	}
	.ybBox{
		background-color:#a7212a;
	}
	.ybBox .yb{
		background-color:white;
		border:10px solid #a7212a;
	}
</style>