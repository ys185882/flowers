<template>
	 <div class="Box">
	 	<nav>
			<el-row>
				<el-col :span="1">
					<i class="el-icon-arrow-left"></i>
				</el-col>
				<el-col :span="22">
					<span>登录注册</span>
				</el-col>
				<el-col :span="1">
					<i class="el-icon-s-unfold"></i>
				</el-col>
			</el-row>
		</nav>
	 </div>
</template>
<script>
export default{
	name:'Register'
}
</script>
<style scoped lang="less">
	.Box{
	 	padding-bottom:50px;
	 }
	nav{
		background-color:white;
		margin:auto;
		max-width: 640px;
		text-align: center;
		font-size:20px;
		padding:20px 0;
		line-height: 50%;
		i{
			font-size:30px;
			line-height: 50%;
		}
	}
</style>