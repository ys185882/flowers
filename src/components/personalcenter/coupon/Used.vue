<template>
	<div class="Box">
		<div class="used">
			<img src="../../../assets/coupon/coupon_empty.png" alt="">
			<div>暂无优惠券</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Used'
	}
</script>
<style scoped lang="less">
	.Box{
		.used{
			background-color:#e9ecf0;
			max-width:640px;
			margin:auto;
			text-align:center;
			img{
				margin-top: 50px;
			}
			div{
				font-size: 1.5rem;
			}
		}
	}
</style>