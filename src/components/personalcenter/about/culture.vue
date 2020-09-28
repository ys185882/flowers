<template>
	<div class="Box">
		<div class="culture">
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
						<span>企业文化</span>
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
			<section>
				<div class="logophoto">
					<img src="../../../assets/personalcenter/about/culture/m_culture_banner.png" alt="">
				</div>
				<div class="culturebox">
					<div class="culturechinese">企业文化</div>
					<div class="cultureenglish">CORPORATE CULTURE</div>
					<div class="vision">
						<span>成为最受尊敬的鲜花礼品互联网平台</span>
					</div>
					<div class="mission">
						<span>提升国人幸福感</span>
					</div>
					<div class="value">
						<span>务实、进取、创新</span>
					</div>
				</div>
				<div class="rule">
					<div class="ruletitle">价值观细则</div>
					<div class="ws">
						<h1>务实</h1>
						<ul>
							<p>· 诚实正直，言行一致</p>
							<p>· 正确安排工作优先级，优化流程，以结果为导向</p>
							<p>· 重视细节，精益求精</p>
							<p>· 踏实专注，上班只做工作有关的事情</p>
							<p>· 勇于承认错误，敢于承担责任，并及时改正</p>
						</ul>
					</div>
					<div class="jq">
						<img src="../../../assets/personalcenter/about/culture/m_culture_radius_left.png" alt="">
						<div class="jqs">
							<h1>进取</h1>
							<ul>
								<p>· 尽职尽责高效执行，今天的事情不推到明天</p>
								<p>· 重视协作，积极付出，勇于承担</p>
								<p>· 主动融入团队，有主人翁意识</p>
								<p>· 正面积极影响团队</p>
								<p>· 学习型组织，每天都在进步</p>
							</ul>
						</div>
					</div>
					<div class="cx">
						<h1>创新</h1>
						<ul>
							<p>· 开放心态，合理评估不同观点的价值</p>
							<p>· 以用户为中心，重视着眼于用户需求的微创新</p>
							<p>· 快速创新，在试错中不断完善产品和服务</p>
							<p>· 精心策划的创新，结果失败的也要鼓励</p>
							<p>· 好创意不问出处</p>
						</ul>
					</div>
				</div>
			</section>
	    <div class="Footer">
	      <el-row>
	        <el-col :span="6">
	          <router-link to="/personalcenter/about/About" class="Links">
	            <p>关于我们</p>
	          </router-link>
	        </el-col>
	        <el-col :span="6">
	          <router-link to="/personalcenter/about/Culture" class="Culture">
	            <p>企业文化</p>
	          </router-link>
	        </el-col>
	        <el-col :span="6">
						<router-link to="/personalcenter/about/Dynamic" class="Links">
							<p>公司动态</p>
						</router-link>
					</el-col>
	        <el-col :span="6">
	        	<router-link to="/personalcenter/about/Media" class="Links">
		          <p>媒体报道</p>
	          </router-link>
	        </el-col>
	      </el-row>
	    </div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Culture',
	data(){
		return {
			show:false
		}
	},
	methods: {
    back(){
       this.$router.go(-1);
    }
	}
}
</script>
<style scoped lang="less">
	.Box{
		padding-bottom:40px;
		background-color:white;
		.culture{
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
				.logophoto{
					img{
						width:100%;
					}
				}
				.culturebox{
					.culturechinese{
						font-size:2.5rem;
					}
					.cultureenglish{
						font-size:1.5rem;
					}
					.vision{
						margin:50px auto 0;
						width:80%;
						background-image:url(../../../assets/personalcenter/about/m_culture-yj.png);
						background-repeat:no-repeat;
						line-height:132px;
						span{
							margin-left:150px;
							font-size:1.3rem;
						}
					}
					.mission{
						margin:0px auto 0;
						width:80%;
						background-image:url(../../../assets/personalcenter/about/m_culture-sm.png);
						background-repeat:no-repeat;
						line-height:132px;
						span{
							margin-left:150px;
							font-size:1.3rem;
						}
					}
					.value{
						margin:0px auto 0;
						width:80%;
						background-image:url(../../../assets/personalcenter/about/m_culture-jzg.png);
						background-repeat:no-repeat;
						line-height:132px;
						span{
								margin-left:150px;
							font-size:1.3rem;
						}
					}
				}
				.rule{
					margin-top:50px;
					.ruletitle{
						text-align:center;
						font-weight:bold;
						font-size:1.5rem;
						background-image:url(../../../assets/personalcenter/about/culture/m_culture_radius_right.png);
						background-size: contain;
						background-repeat:no-repeat;
						background-position:right 0;
						height: 6rem;
					}
					.ws{
						background-color:#fff1ed;
						padding:25px 20px 25px 20%;
						width:65%;
						border-radius:0 30px 30px 0;
						p{
							font-size: 1.3rem;
						}
					}
					.jq{
						margin:30px 0;
						img{
							margin-top:150px;
							float:left;
						}
						.jqs{
							position:relative;
							left:12%;
							background-color:#e9ecf0;
							padding:25px 20% 25px 25px;
							width:65%;
							border-radius:30px 0 0 30px;
							p{
								font-size: 1.3rem;
							}
						}
					}
					.cx{
						background-color:#fff1ed;
						padding:25px 20px 25px 20%;
						width:65%;
						border-radius:0 30px 30px 0;
						p{
							font-size: 1.3rem;
						}
					}
				}
			}
			.Footer{
		    background-color:#f7f9fa;
		    width:100%;
		    max-height:80px;
		    text-align: center;
		    position: fixed;
		    bottom:0;
		    left:0;
		    .el-col{
		    	border:1px solid #e9ecf0;
		    }
		    .Culture{
		    	color:#ff734c;
		    }
				p{
		    	font-size:12px;
					padding:12px;
					background-color:#f7f9fa;
				}
				.Links{
					display: inline-block;
					width:100%;
					color:black;
				}
		  }
		}
	}
</style>