<template>
	<div class="home">
		<div class="Box">
			<el-row :span="24" class="headerLogo">
				<div class="Cl">
					<i class="el-icon-search"></i>
				</div>
				<img src="../assets/m_hualogo.png">
				<div class="people">
					<i class="el-icon-headset"></i>
				</div>
			</el-row>
			<el-row :span="24" class="Main">
				<wc-swiper class="wc-swiper">
					<wc-slide v-for="item in items" :key="item">
						<img :src="item" alt="">
					</wc-slide>
				</wc-swiper>
			</el-row>
			<br>
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
			<br>
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
			<div>
				<el-row>
					<el-col :span="12" class="hot">
						<div></div>
						<div></div>
					</el-col>
					<el-col :span="12" class="onsale">
						<div></div>
						<div></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Home',
	data(){
		return {
			items: [
			"/static/lunbotu/1.jpg",
			"/static/lunbotu/2.jpg",
			"/static/lunbotu/3.jpg",
			"/static/lunbotu/4.jpg",
			"/static/lunbotu/5.jpg"
		]}
	}
}
</script>
<style scoped>
	*{
		padding:0;
		margin:0;
	}
	.Box{
		margin:auto;
		max-width: 640px;
		width: 100%;
	}
	.headerLogo{
		padding:0 20px;
		max-height: 51px;
		background-color: #435448;
		line-height: 51px;
		text-align: center;
		max-width: 100%;
		max-height: 82px;
	}
	.Cl{
		float:left;
	}
	.headerLogo img{
		max-width:80%;
		height: 21px;
	}
	.people{
		float:right;
	}
	.Cl i,.people i{
		color:white;
	}
	.wc-swiper img{
		width: 100%;
		touch-action: none;
	}
	.el-icon-circle-check{
		border-radius: 10px;
		background-color:#435448;
		color:white;
	}
	.flowers{
		text-align: center;
		display: inline-block;
		width: 18%;
	}
	.navPhoto{
		margin:-4px;
	}
	.navPhoto img,.flowers img{
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
		font-size: 20px;
	}
/*	.fz{
		font-size: 10px;
	}*/
</style>