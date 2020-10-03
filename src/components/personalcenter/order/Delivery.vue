<template>
	<div class="Box">
		<div class="delivery">
			<section>
				<img src="../../../assets/allorder/order_empty.png" alt="">.
				<br>
				<span>还没有相关订单哦...</span>
				<br>
				<router-link to="/components/Home">
					<button>去首页看看</button>
				</router-link>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Delivery',
		methods:{
		    back(){
		        this.$router.go(-1);
		    },
		}
	}
</script>
<style scoped lang="less">
	 .Box{
	 	padding-bottom:50px;
	 	background-color:#e9ecf0;
	 	.delivery{
	 		background-color:white;
	 		max-width:640px;
	 		margin:auto;
	 		section{
	 			text-align:center;
	 			img{
	 				margin-top:40px;
	 			}
	 			span{
	 				display:inline-block;
	 				margin:30px 0;
	 				font-size: 1.7rem;
	 			}
	 			button{
	 				margin-bottom:60px;
	 				padding:15px 30px;
	 				border-radius:50px;
	 				border:none;
	 				outline:none;
	 				font-size: 1.5rem;
	 				color:white;
	 				background-color:#ff734c;
	 			}
	 		}
	 	}
	 }
</style>