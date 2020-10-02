<template>
	<div class="Box">
		<div class="coupon">
			<nav>
				<el-row>
					<el-col :span="3">
						<div class="backTo">
						  <span @click="back">
								<i class="el-icon-arrow-left"></i>
							</span>
						</div>
					</el-col>
					<el-col :span="18">
						<span>爱情鲜花</span>
					</el-col>
					<el-col :span="3"></el-col>
				</el-row>
			</nav>
		</div>
	</div>
</template>
<script>
export default{
	name:'Coupon',
	methods: {
    back(){
       this.$router.go(-1);
    }
	}
}
</script>
<style scoped lang="less">
.Box{
 	padding-bottom:50px;
 	background-color:#e9ecf0;
 	.coupon{
 		margin:auto;
 		max-width:640px;
 		background-color:#e9ecf0;
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
	}
}
</style>