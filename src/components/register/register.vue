<template>
	 <div class="Box">
	 	<nav>
			<el-row>
				<el-col :span="4">
					<div class="backTo">
					    <span @click="back">
							<i class="el-icon-arrow-left"></i>
						</span>
					</div>
				</el-col>
				<el-col :span="16">
					<span>登录注册</span>
				</el-col>
				<el-col :span="4">
					<el-button @click="show = !show" class="elbtn">
						<i class="el-icon-s-unfold"></i>
					</el-button>
			      <transition name="el-fade-in-linear">
			        <div v-show="show" class="transition-box">
			        	<div class="list">
									<router-link to="/components/Home2">
										<div class="home"><i class="el-icon-house"></i>首页</div>
									</router-link>
									<router-link to="/classification/Classs2">
										<div class="classs"><i class="el-icon-search"></i>分类搜索</div>
									</router-link>
									<router-link to="/shoppingcar/ShoppingCar2">
									<div class="shoppingcar"><i class="el-icon-shopping-cart-2"></i>购物车</div>
									</router-link>
									<router-link to="/personalcenter/PersonalCenter2">
										<div class="personal"><i class="el-icon-user"></i>我的</div>
									</router-link>
								</div>
			        </div>
			      </transition>
				</el-col>
			</el-row>
			<div class="logo">
				<img src="../../assets/m_hualogo.png" alt="">
			</div>
			<section>
				<form action="">
					<div class="phone">
						<p>手机号</p>
						<br>
						<br>
						<input type="text" placeholder="请输入手机号" v-model="phones" class="phones">
					</div>
					<div class="yz">
						<p>验证码</p>
						<div class="yzs">
							<input type="text" placeholder="请输入验证码" v-model="yzm">
							<button v-model="huoqu">{{huoqu}}</button>
						</div>
					</div>
					<div class="register">
						<button @click="signin">
							<div>手机号登录/注册</div>
						</button>
					</div>
					<div class="registertext">账号密码登录</div>
				</form>
			</section>
		</nav>
		<div class="mode1">
			<el-divider>其他登录方式</el-divider>
		</div>
		<div class="mode">
			<el-row>
				<el-col :span="8">
					<img src="../../assets/register/QQ.png" alt="">
					<span>QQ</span>
				</el-col>
				<el-col :span="8">
					<img src="../../assets/register/zfb.png" alt="">
					支付宝
				</el-col>
				<el-col :span="8">
					<img src="../../assets/register/yx.png" alt="">
					邮箱注册
				</el-col>
			</el-row>
		</div>
	 </div>
</template>
<script>
export default{
	name:'Register',
	data:() => ({
		show:false,
		phones:'',
		yzm:'',
		huoqu:"获取验证码"
	}),
	methods:{
    back(){
      this.$router.go(-1);
    },
    signin(){
    	if (this.phones.length==0) {
    		this.$alert("请输入手机号");
    	} else if (this.phones.length!=0) {
    		var reg=/^1(3|4|5|6|7|8|9)\d{9}$/;
    		if(!reg.test(this.phones)){
    			this.$alert("请输入正确的手机号");
    		} else if (this.yzm.length!=6){
	    		this.$alert("请输入正确的验证码");
	    	} else {
	    		 this.$router.push('/components/Home')
	    	}
    	}
    }
	}
}
</script>
<style scoped lang="less">
	.Box{
		margin:auto;
		max-width: 640px;
		background-color:white;
		height:100%;
	 	.elbtn{
	 		padding:0;
	 		border:none;
	 		background-color:white;
	 		color:black;
	 	}
		nav{
			background-color:white;
			margin:auto;
			max-width: 640px;
			text-align: center;
			font-size:1.5rem;
			padding:20px 0;
			line-height: 50%;
			.list{
				font-size: 15px;
				width:180px;
				border:1px solid #e9ecf0;
				border-radius:10px;
				position:absolute;
				right:0px;
				top:40px;
				z-index: 10;
				background-color:white;
				div{
					height:30px;
					color:black;
					text-align:left;
					padding:20px;
				}
			}
			i{
				font-size:2rem;
				line-height: 50%;
			}
		}
		.logo{
			text-align: center;
			width:100%;
			margin:60px 0;
			img{
				width:45%;
			}
		}
		section{
			padding:50px;
			margin-top:30px;
			.phone{
				text-align: left;
				margin:40px 0;
				input{
					width:100%;
					height:40px;
					border:none;
					outline: none;
					border-bottom:1px solid #e9ecf0;
					font-size: 25px;
				}
			}
			.yz{
				width: 540px;
				text-align: left;
				.yzs{
					margin:40px 0;
				}
				div{
					border-bottom:1px solid #e9ecf0;
					input{
						width:70%;
						height:40px;
						border:none;
						outline: none;
						font-size: 25px;
					}
					button{
						background-color:white;
						font-size: 25px;
						color:#71797f;
						border:none;
						outline:none;
					}
				}
			}
			.register{
				margin:60px 0;
				button{
					padding:20px 30%;
					background-color:#ff734c;
					color:white;
					font-size: 25px;
					outline:none;
					border:none;
					border-radius:80px;
					div{
						width:190px;
					}
				}
			}
			.registertext{
				color:#71797f;
				font-size: 30px;
				margin-bottom:40px;
			}
		}
		.el-divider__text{
			font-size: 25px;
			color:#cccccc;
		}
		.mode1{
			background-color:white;
		}
		.mode{
			line-height:40px;
			padding:30px;
			text-align:center;
			font-size:25px;
			img{
				width: 20%;
			}
		}
	}
</style>