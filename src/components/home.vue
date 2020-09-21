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
			<Section></Section>
			<br>
			<Flowerss></Flowerss>
			<br>
			<sendflowers></sendflowers>
			<br>
			<Footer></Footer>
		</div>
	</div>
</template>
<script>
import Section from '@/components/Section'
import Flowerss from '@/components/Flowerss'
import sendflowers from '@/components/sendflowers'
import Footer from '@/components/Footer'
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
		Section,
		Flowerss,
		sendflowers,
		Footer
	}
}
</script>
<style lang="less" scoped>
	*{
		padding:0;
		margin:0;
	}
	.Box{
		background-color:#e9ecf0;
		margin:auto;
		max-width: 640px;
		width: 100%;
		padding-bottom:50px;
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
</style>