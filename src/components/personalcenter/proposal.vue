<template>
	<div class="Box">
		<div class="consult">
			<form action="">
				<input type="text" placeholder="请输入手机号或邮箱" class="phone">
				<input type="text" placeholder="请输入订单号">
				<div class="textarea">
					<textarea placeholder="请输入描述问题"></textarea>
					<div>0/500</div>
				</div>
				<div class="file">
					<input type="file">
					<span>请上传照片，最多3张，每张不超过5m，支持jpg、png</span>
				</div>
				<div class="btn">
					<button>确认提交</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	name:'proposal'
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
			.textarea{
				background-color:white;
				border-bottom:1px solid #e9ecf0;
				padding:30px;
				box-sizing:border-box;
				font-size: 20px;
				textarea{
				font-size: 25px;
				width:100%;
				outline: none;
				border:none;
				resize: none;
				height: 100px;
				}
				div{
					color:#b4babf;
					text-align:right;
				}
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
			.file{
				padding:20px;
				background-color:white;
				input{
					border:none;
				}
				span{
					font-size: 1.5rem;
					color:#71797f;
				}
			}
		}
	}
</style>