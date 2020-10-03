<template>
	<div class="Box">
		<div class="nouse">
			<img src="../../../assets/coupon/coupon_empty.png" alt="">
			<div>暂无优惠券</div>
			<p>据说下单后有机会获得大额券哦~</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Nouse'
	}
</script>
<style scoped lang="less">
	.Box{
		.nouse{
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
			p{
				font-size: 1.3rem;
				color:#71797f;
				margin:10px;
			}
		}
	}
</style>