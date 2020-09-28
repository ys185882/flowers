<template>
	<div class="Box">
		<div class="about">
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
						<span>关于我们</span>
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
				<div class="navlogo">
					<img src="../../../assets/personalcenter/about/huali_banner_logo.png" alt="">
				</div>
				<div class="abouttitle">关于花礼网</div>
				<div class="littletitle">BRAND PROFILE</div>
				<div class="img">
					<img src="../../../assets/personalcenter/about/profile.png" alt="">
				</div>
				<p class="tt">
					花礼网Hua.com（原中国鲜花礼品网），国内领先的鲜花行业品牌服务商，隶属于深圳市百易信息技术有限公司。2005年8月正式上线，以“花心思，只为你”为品牌理念，已为千万用户提供优质鲜花礼品配送服务。全国连锁2000多个城市（直辖市、省会、地级市及县城）1-3小时送花上门，并可指定日期和时间范围配送，让心意准时到达。
					<br>
					<br>
					花礼网主营鲜花、永生花、蛋糕、巧克力、创意和实用礼品。花礼网拥有一支金牌花艺师团队，花心思持续打造具有设计感的原创鲜花和永生花作品；精选优质蛋糕及礼品品牌服务商，以严谨的态度为消费者提供好品质、好价格、好服务的贴心体验。
				</p>
				<p class="text">
					2013-2016三次获得行业殊荣：中国电子商务协会评定为<b>鲜花礼品行业龙头企业</b>；2016年11月被认定为<b>国家级高新技术企业</b>；2018年被授予世界电子商务大会“<b>电子商务最具品牌价值奖</b>”。
				</p>
				<div class="lunbo">
					 <el-carousel :interval="4000" type="card" height="200px">
				    <el-carousel-item v-for="item in items" :key="item">
				      <img :src="item" alt="">
				    </el-carousel-item>
				  </el-carousel>
				  <div>认证成为“中国花卉协会会员”</div>
				</div>
				<div class="sec">
					<header>
						<div class="chinese">核心优势</div>
						<div class="english">CORE STRENGTHS</div>
					</header>
					<div class="one">
						<p>01</p>
						<div>
							<img src="../../../assets/personalcenter/about/group_point1.png" alt="">
						</div>
						<footer>
							<p class="jiacu">12道品控标准+送前实拍</p>
							<p class="ttt">行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化。</p>
						</footer>
					</div>
					<div class="two">
						<p>02</p>
						<div>
							<img src="../../../assets/personalcenter/about/group_point2.png" alt="">
						</div>
						<footer>
							<p class="jiacu">实力花艺团队</p>
							<p class="ttt">国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。</p>
						</footer>
					</div>
					<div class="one">
						<p>03</p>
						<div>
							<img src="../../../assets/personalcenter/about/group_point3.png" alt="">
						</div>
						<footer>
							<p class="jiacu">1-3小时极速送花</p>
							<p class="ttt">门店覆盖全国2000+城市，由当地门店新鲜制作，专人专车送货上门，最快1小时送达，快人一步！</p>
						</footer>
					</div>
					<div class="two">
						<p>04</p>
						<div>
							<img src="../../../assets/personalcenter/about/group_point4.png" alt="">
						</div>
						<footer>
							<p class="jiacu">大规模客服团队</p>
							<p class="ttt">建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。</p>
						</footer>
					</div>
					<div class="one">
						<p>05</p>
						<div>
							<img src="../../../assets/personalcenter/about/group_point5.png" alt="">
						</div>
						<footer>
							<p class="jiacu">不只鲜花·跨界音乐微电影</p>
							<p class="ttt">联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。</p>
						</footer>
					</div>
					<br>
					<br>
				</div>
				<div class="footerbox">
					<div class="togetherchinese">企业合作</div>
					<div class="togetherenglish">BUSINESS COOPERATION</div>
					<img src="../../../assets/personalcenter/about/logo_all_m.png" alt="">
					<div class="txt">花礼网为众多知名企业提供鲜花礼品定制服务，满足企业员工关怀、客情维护等需求。以上为合作的部分企业（排名不分先后）</div>
				</div>
				<div class="culture">
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
				<div class="environment">
					<div class="environmentchiese">公司环境</div>
					<div class="environmentenglish">COMPANY ENVIRONMENT</div>
					<div class="lunbo2">
						<el-carousel :interval="4000" type="card" height="200px">
					    <el-carousel-item v-for="item in itemss" :key="item">
					      <img :src="item" alt="">
					    </el-carousel-item>
					  </el-carousel>
					</div>
				  <div class="txtt">我们相信优秀的平台环境可以吸引同样优秀的人才</div>
				  <div class="txtt">欢迎加入我们hr@hua.com</div>
				</div>
				<div class="history">
					<div class="historychinese">公司历程</div>
					<div class="historyenglish">COMPANY HISTORY</div>
					<div class="historyphoto">
						<img src="../../../assets/personalcenter/about/development.png" alt="">
					</div>
				</div>
				<div class="foot">
					<img src="../../../assets/personalcenter/about/huali_bottom_banner.png" alt="">
				</div>
			</section>
	    <div class="Footer">
	      <el-row>
	        <el-col :span="6">
	          <router-link to="/personalcenter/about/About" class="we">
	            <p>关于我们</p>
	          </router-link>
	        </el-col>
	        <el-col :span="6">
	          <router-link to="/personalcenter/about/Culture" class="Links">
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
	name: 'About',
	data(){
		return {
			show:false,
			items: [
			"/static/lunbo2/medal12.png",
			"/static/lunbo2/medal16.png",
			"/static/lunbo2/medal17.png"
			],
			itemss:[
			"/static/lunbo3/company_p5.png",
			"/static/lunbo3/company_p6.png",
			"/static/lunbo3/company_p7.png",
			"/static/lunbo3/company_p8.png",
			"/static/lunbo3/company_p9.png"
			]
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
		.about{
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
			.navlogo{
				text-align:center;
				line-height:25rem;
				background-image:url(../../../assets/personalcenter/about/banner_bg.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center center;
				height: 23rem;
			}
			.abouttitle{
				margin-top:60px;
				text-align:center;
				font-size: 2.5rem;
			}
			.littletitle{
				margin-bottom:60px;
				text-align:center;
				font-size: 1.6rem;
			}
			.img{
				text-align:center;
				img{
					width:95%;
				}
			}
			.navlogo{
				text-align:center;
				line-height:25rem;
				background-image:url(../../../assets/personalcenter/about/banner_bg.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center center;
				height: 23rem;
			}
			.abouttitle{
				margin-top:60px;
				text-align:center;
				font-size: 2.5rem;
			}
			.littletitle{
				margin-bottom:60px;
				text-align:center;
				font-size: 1.6rem;
			}
			.img{
				text-align:center;
				img{
					width:90%;
				}
			}
			.tt{
				padding:50px;
				margin-top:30px;
				font-size:1.5rem;
				border-bottom:1px solid #e9ecf0;
			}
			.text{
				padding:50px;
				margin-top:30px;
				font-size:1.5rem;
			}
			.lunbo{
				width:100%;
				.el-carousel__item img {
			 		width:100%;
				}
				div{
					text-align:center;
					font-size: 1.5rem;
				}
			}
			.sec{
				background-color:#f7f9fa;
				margin-top:60px;
				text-align:center;
				.chinese{
					font-size: 2.5rem;
				}
				.english{
					font-size:1.5rem;
				}
				.one{
					p{
						font-size:5rem;
						text-align:left;
						width:90%;
						position:relative;
						left:10%;
						color:#ff734c;
					}
					div{
						text-align:right;
						img{
							width:90%;
						}
					}
					footer{
						.jiacu{
							margin:15px 0;
							font-size: 1.5rem;
							font-weight: bold;
							color:black;
						}
						.ttt{
							box-sizing:border-box;
							padding-right:10%;
							font-size: 1.2rem;
							color:black;
						}
					}
				}
				.two{
					p{
						font-size:5rem;
						text-align:right;
						width:90%;
						color:#ff734c;
					}
					div{
						text-align:left;
						img{
							width:90%;
						}
					}
					footer{
						.jiacu{
							padding-left:10%;
							text-align:left;
							margin:15px 0;
							font-size: 1.5rem;
							font-weight: bold;
							color:black;
						}
						.ttt{
							box-sizing:border-box;
							padding-left:10%;
							text-align:left;
							font-size: 1.2rem;
							color:black;
						}
					}
				}
			}
			.footerbox{
				margin:40px 0;
				text-align:center;
				.togetherchinese{
					font-size:2.5rem;
				}
				.togetherenglish{
					font-size: 1.5rem;
					margin-bottom:60px;
				}
				img{
					width:100%;
				}
				.txt{
					padding:5%;
					text-align:left;
					font-size: 1.2rem;
				}
			}
			.culture{
				text-align:center;
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
						margin-left:90px;
						font-size:1.3rem;
					}
				}
				.mission{
					margin:0px auto 0;
					width:80%;
					background-image:url(../../../assets/personalcenter/about/m_culture-sm.png);
					background-repeat:no-repeat;
					background-position:right 0;
					line-height:132px;
					span{
						margin-left:90px;
						font-size:1.3rem;
					}
				}
			}
			.value{
				margin:0px auto 0;
				width:80%;
				background-image:url(../../../assets/personalcenter/about/m_culture-jzg.png);
				background-repeat:no-repeat;
				line-height:132px;
				span{
					font-size:1.3rem;
				}
			}
			.environment{
				text-align:center;
				.environmentchiese{
					margin-top:30px;
					font-size: 2rem;
				}
				.environmentenglish{
					margin-bottom:100px;
					font-size:1.5rem;
				}
				.txtt{
					text-align:center;
					font-size:1.5rem;
				}
			}
		}
		.history{
			text-align:center;
			.historychinese{
				margin-top:60px;
				font-size: 2rem;
			}
			.historyenglish{
				margin-bottom:70px;
				font-size:1.5rem;
			}
			.historyphoto{
				img{
					width:100%;
				}
			}
		}
		.foot{
			img{
				width:100%;
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
	    .we{
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