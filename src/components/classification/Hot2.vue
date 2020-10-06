<template>
	<div class="box">
		<div class="photo">
			<img src="/static/lunbotu/5.jpg" alt="">
		</div>
		<div v-for="n in 5">
			<el-row class="lover">
				<el-col :span="8">
					<router-link to="/components/LoveFlowers2">
						<img src="../../assets/Class/m_category_hot_Lover.png" alt="">
						<div>送恋人鲜花</div>
					</router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/components/LoveFlowers2">
						<img src="../../assets/Class/m_category_hot_Lover.png" alt="">
						<div>送恋人鲜花</div>
					</router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/components/LoveFlowers2">
						<img src="../../assets/Class/m_category_hot_Lover.png" alt="">
						<div>送恋人鲜花</div>
					</router-link>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
export default{
	name:'Hot2'
}
</script>
<style scoped lang="less">
	.photo{
		width:100%;
		img{
			width: 100%;
		}
	}
	.lover{
		margin:20px;
		img{
			width:90%;
		}
		div{
			color:black;
		}
	}
	.box{
		height:500px;
		overflow: auto;
	}
</style>