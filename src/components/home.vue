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
			<Section></Section>
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
						<div>
							热销榜
							<br>
							集万千宠爱
						</div>
						<div></div>
					</el-col>
					<el-col :span="12" class="onsale">
						<div>
							特价专区
							<br>
							超值好货
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="Footer">
			<el-row>
				<el-col :span="6">
					<i class="el-icon-s-home"></i>
					<p>首页</p>
				</el-col>
				<el-col :span="6">
					<i class="el-icon-search"></i>
					<p>分类</p>
				</el-col>
				<el-col :span="6">
					<i class="el-icon-shopping-cart-2"></i>
					<p>购物车</p>
				</el-col>
				<el-col :span="6">
					<i class="el-icon-user"></i>
					<p>我的</p>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
import Section from '@/components/Section'
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
	},
	components:{
		Section
	}
}
// console.log(sections)
</script>
<style scoped lang="less">
	*{
		padding:0;
		margin:0;
	}
	.Box{
		background-color:#e9ecf0;
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
	.Footer{
		border:;
		padding-top:10px;
		max-height:80px;
		text-align: center;
		.el-icon-s-home{
			display:inline-block;
			height:50%;
			width:50%;
		}
	}
/*	.fz{
		font-size: 10px;
	}*/
</style>