<template>
	<div class="Box">
		<div class="evaluate">
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
						<span>最近评价(386880)</span>
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
			</nav>
			<section class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
				<div v-for="i in count" class="infinite-list-item">
					<img src="../assets/132.jpg" alt=""><span>郭*巍</span>
					<div>非常好看，朋友很高兴很满意，谢谢现在买花都在你家买啦！定点采购哈哈</div>
					<div class="wz"><i class="el-icon-location-outline"></i>北京西城区</div>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Evaluate',
		data: () => ({
			show:false,
			count:4
		}),
		methods: {
	    back () {
	       this.$router.go(-1);
	    },
	    load () {
	    	if(this.$el.scrollTop+this.$el.offsetHeight>this.$el.scrollHeight){
	    		this.count += 2
	    	}
	    }
		}
	}
</script>
<style scoped lang="less">
	.Box{
		background-color:#e9ecf0;
		.evaluate{
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
		}
	}
	nav{
		background-color:#fafafa;
		margin:auto;
		max-width: 640px;
		text-align: center;
		font-size:25px;
		padding:20px 0;
		line-height: 50%;
		border-bottom:1px solid #e9ecf0;
		span{
			font-size:15px;
			i{
				font-size:20px;
				line-height: 50%;
			}
		}
	}
	section{
		border-bottom:1px solid #f5f5f5;
		padding:20px 40px;
		font-size: 20px;
		img{
			width:32px;
			height:32px;
			border-radius:16px;
		}
		div{
			margin:15px 0;
		}
		span{
			font-size: 15px;
			color:#777777;
		}
		.wz{
			font-size: 15px;
			color:#777777;
		}
	}
</style>