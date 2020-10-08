<template>
	<div class="Box">
		<div class="purchase">
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
						<span>购物车</span>
					</el-col>
					<el-col :span="4">
						<el-button @click="show = !show" class="elbtn">
						<i class="el-icon-s-unfold"></i>
						</el-button>
			      <transition name="el-fade-in-linear">
			        <div v-show="show" class="transition-box">
			        	<div class="list">
									<router-link to="/components/Home">
										<div class="home"><i class="el-icon-house"></i>首页</div>
									</router-link>
									<router-link to="/classification/Classs">
										<div class="classs"><i class="el-icon-search"></i>分类搜索</div>
									</router-link>
									<router-link to="/shoppingcar/ShoppingCar">
									<div class="shoppingcar"><i class="el-icon-shopping-cart-2"></i>购物车</div>
									</router-link>
									<router-link to="/personalcenter/PersonalCenter">
										<div class="personal"><i class="el-icon-user"></i>我的</div>
									</router-link>
								</div>
			        </div>
			      </transition>
					</el-col>
				</el-row>
			</nav>
			<section>
				<el-row>
					<el-col :span="3">
						<div class="che">
							<input type="checkbox" @click="chk" :checked="check">
						</div>
					</el-col>
					<el-col :span="7">
						<div class="imgphoto">
							<img src="../../assets/hotsale/1.jpg" alt="">
						</div>
					</el-col>
					<el-col :span="14">
						<div class="footbox">
							<p>[鲜花]留住好时光+月饼礼盒</p>
							<div>
								<span class="num">数量</span>
								<div>
									<span class="jian" @click="jian">
										<i class="el-icon-delete"></i>
									</span>
									<input type="text" class="inp" v-model="number">
									<span class="jia" @click="jia">
										+
									</span>
								</div>
							</div>
							<div class="price">￥299</div>
						</div>
					</el-col>
				</el-row>
			</section>
			<footer>
				<el-row>
					<el-col :span="16">
						<div class="sum">
							合计：<span>￥{{price*this.num}}</span>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="jiesuan">
							去结算({{num}})
						</div>
					</el-col>
				</el-row>
			</footer>
		</div>
	</div>
</template>
<script>
export default{
	name:'Purchase',
	data:() => ({
		show:false,
		number:1,
		price:299,
		check:true,
		num:'1'
	}),
	methods: {
    back(){
       this.$router.go(-1);
    },
    jia(){
    	this.number+=1;
    	if(this.check){
    		this.num=this.number;
    	} else {
    		this.num=0;
    	}
    },
    jian(){
    	if(this.number>1){
    		this.number-=1;
    	}
    	if(this.check){
    		this.num=this.number;
    	} else {
    		this.num=0;
    	}
    },
    chk(){
    	this.check=!this.check;
    	if(!this.check){
    		this.num=0;
    	} else{
    		this.num=this.number;
    	}
    }
	}
}
</script>
<style scoped lang="less">
.Box{
	background-color:white;
	max-width:640px;
	margin:auto;
		.purchase{
			height:100%;
			margin:auto;
			max-width:640px;
			background-color:white;
		 	.elbtn{
		 		padding:0;
		 		border:none;
		 		background-color:white;
		 		color:black;
		 	}
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
			nav{
				background-color:white;
				margin:auto;
				max-width: 640px;
				text-align: center;
				font-size:20px;
				padding:20px 0;
				line-height: 50%;
				border-bottom:1px solid #e9ecf0;
				span{
					font-size:25px;
					i{
						font-size:40px;
						line-height: 50%;
					}
				}
			}
			section{
				padding:10px;
				.che{
					text-align:center;
					line-height:170px;
				}
				.imgphoto{
					img{
						width:100%;
					}
				}
				.footbox{
					padding:0 10px;
					p{
						font-size: 1.5rem;
					}
					div{
						.num{
							font-size: 1.4rem;
						}
						div{
							border:1px solid #e9ecf0;
							background-color:#f7f9fa;
							display: inline-block;
							.jian{
								border-right:1px solid #e9ecf0;
							}
							.inp{
								text-align:center;
								outline:none;
								border:none;
								background-color:#f7f9fa;
								width:5rem;
							}
							.jia{
								border-left:1px solid #e9ecf0;
							}
						}
					}
					.price{
						color:#ff734c;
						margin-top:32%;
						font-size: 1.4rem;
					}
				}
			}
			footer{
				width:100%;
				position:fixed;
				bottom:0;
				left:0;
				.sum{
					background-color:white;
					font-size: 1.5rem;
					height:84px;
					line-height:84px;
					padding:0 20px;
					span{
						color:#ff734c;
					}
				}
				.jiesuan{
					background-color:#f46e49;
					font-size: 2rem;
					color:white;
					height:84px;
					text-align:center;
					line-height:84px;
				}
			}
		}
	}
</style>