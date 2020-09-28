<template>
	<div class="Box">
		<div class="consult">
			<form action="">
				<input type="text" placeholder="请输入手机号或邮箱" class="phone">
				<textarea placeholder="请输入描述问题"></textarea>
				<div class="btn">
					<button>确认提交</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	name:'consult'
</script>
<style scoped lang="less">
	.Box{
		.consult{
			max-width:640px;
			text-align:center;
			input{
				width:100%;
				padding:30px;
				font-size: 25px;
				outline: none;
				border:none;
				border-bottom:1px solid #e9ecf0;
				box-sizing:border-box;
			}
			textarea{
				width:100%;
				padding:30px;
				font-size: 25px;
				outline: none;
				border:none;
				box-sizing:border-box;
				resize: none;
				height: 300px;
			}
			.btn{
				margin-top:80px;
				button{
				padding:15px 60px;
				border-radius:60px;
				background-color: #ff734c;
				color:white;
				font-size: 25px;
				border:none;
				outline:none;
				}
			}
		}
	}
</style>