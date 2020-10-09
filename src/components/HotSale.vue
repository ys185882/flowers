<template>
	<div class="Box">
		<div class="hotsale">
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
						<img src="../assets/m_hualogo.png" alt="">
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
				<div class="titbox" v-for="n in shoplist">
					<img :src="n.img" alt="">
					<div class="tit">
						<span>{{n.name}}</span>
						<i class="el-icon-star-off"></i>
					</div>
					<div class="money">
						<b>￥{{n.price}}</b>
						<s>￥376</s>
						<span>已售419件</span>
					</div>
					<p>
						<img src="../assets/xinpin/iconPhone.png" alt="">
						<span>APP下单立减6元</span>
						<i class="el-icon-arrow-right"></i>
					</p>
				</div>
			</nav>
			<section>
				<el-row>
					<el-col :span="4">
						<div class="titl">
							花语
						</div>
					</el-col>
					<el-col :span="20">
						<div class="sec">
							让每点阳光，洒于你脸庞；令你的微笑，比花更盛放！
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div class="titl">
							材料
						</div>
					</el-col>
					<el-col :span="20">
						<div class="sec">
							粉绣球1枝，粉雪山玫瑰6枝，粉桔梗0.3扎，栀子叶0.5扎，月饼礼盒，（价值68元，由于月饼具有地域性，如当地无稻香村月饼，则选择价值相当的当地知名月饼品牌）
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div class="titl">
							包装
						</div>
					</el-col>
					<el-col :span="20">
						<div class="sec">
							长方形手提花篮1个
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div class="titl">
							配送
						</div>
					</el-col>
					<el-col :span="20">
						<div class="sec">
							全国
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div class="titl">
							附送
						</div>
					</el-col>
					<el-col :span="20">
						<div class="sec">
							下单填写留言，即免费赠送精美贺卡！
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div class="titl">
							说明
						</div>
					</el-col>
					<el-col :span="20">
						<div class="sec">
							至少提前一天订购或订购前咨询客服
						</div>
					</el-col>
				</el-row>
			</section>
			<div class="Distribution">
				配送至<i class="el-icon-location-outline"></i>请选择配送地区<i class="el-icon-more"></i>
			</div>
			<div class="evaluate">
				<nav>
					订单评价
					<div>
						<span>最近已有72条评价</span>
						<i class="el-icon-arrow-right"></i>
					</div>
				</nav>
				<div class="boxx"  v-for="n in 2">
					<div class="sect">
						<img src="../assets/hotsale/5.jpg" class="headphoto" alt="">
						<span>彭*军</span>
						<img src="../assets/hotsale/6.png" class="star" alt="">
					</div>
					<div class="txt">
						电话送了两次，辛苦了！！服务nice！！
					</div>
					<div class="photo">
						<img src="../assets/hotsale/6.jpg" alt="">
					</div>
					<footer>
						<i class="el-icon-location-outline"></i>内蒙古包头市东河区
					</footer>
				</div>
				<div class="sect2">
					<img src="../assets/hotsale/5.jpg" class="headphoto" alt="">
					<span>彭*军</span>
					<img src="../assets/hotsale/6.png" class="star" alt="">
				</div>
				<div class="txt">
					电话送了两次，辛苦了！！服务nice！！
				</div>
				<div class="photo">
					<img src="../assets/hotsale/6.jpg" alt="">
				</div>
				<footer>
					<i class="el-icon-location-outline"></i>内蒙古包头市东河区
				</footer>
				<p>
					<button>查看更多评价</button>
				</p>
			</div>
		<div class="we">
			<p>为什么选择我们</p>
				<el-row>
					<el-col :span="8">
						<img src="../assets/m_details_brand_01.png" alt="">
						<div>获评鲜花龙头企业</div>
					</el-col>
					<el-col :span="8">
						<img src="../assets/m_details_brand_02.png" alt="">
						<div>1~3小时送花上门</div>
					</el-col>
					<el-col :span="8">
						<img src="../assets/m_details_brand_03.png" alt="">
						<div>赛事冠军花艺师团队</div>
					</el-col>
				</el-row>
				<br>
				<br>
				<el-row>
					<el-col :span="8">
						<img src="../assets/m_details_brand_04.png" alt="">
						<div>严选花材</div>
					</el-col>
					<el-col :span="8">
						<img src="../assets/m_details_brand_05.png" alt="">
						<div>12道严苛品控标准</div>
					</el-col>
					<el-col :span="8">
						<img src="../assets/m_details_brand_06.png" alt="">
						<div>500万用户信赖好评</div>
					</el-col>
				</el-row>
			</div>
			<div class="phototext">
				<div class="nav">图文详情</div>
				<img src="../assets/hotsale/1.jpg" alt="">
				<div class="hsg">
					<b>留住好时光</b>
					<div>让每点阳光，洒于你脸庞</div>
					<p>令你的微笑，比花更盛放</p>
				</div>
				<img src="../assets/hotsale/3.jpg" alt="">
				<div class="jx">
					<nav>精选新鲜昆明A级花材</nav>
					<div>
						<b>主花材：</b>
						粉绣球/1枝、粉雪山玫瑰/6枝
					</div>
					<p>
						<b>配材：</b>
						粉桔梗/0.3扎、栀子叶/0.5扎
					</p>
				</div>
				<div class="zb">
					<img src="../assets/hotsale/2.jpg" alt="">
					<div>粉绣球、粉雪山、粉桔梗等粉丝花材</div>
					<div>为爱注入鲜活感</div>
					<div>温馨而又浪漫</div>
					<div>充满着田园气息的韩式花篮</div>
					<div>是让人惊艳且温暖的来自自然的馈赠</div>
					<div>
						<b>特别适合</b>|
						<span>长辈</span>
					</div>
					<img src="../assets/hotsale/7.jpg" alt="">
					<img src="../assets/hotsale/4.jpg" alt="">
					<img src="../assets/hotsale/1.jpg" alt="">
					<img src="../assets/hotsale/8.jpg" alt="">
					<img src="../assets/hotsale/9.jpg" alt="">
				</div>
				<div class="pinpai">
					<nav>龙头企业认证·15年品牌</nav>
					<div>始于2005，多次获中国电子商务协会“鲜花龙头企业”认证</div>
					<img src="../assets/hotsale/9.png" alt="">
				</div>
			</div>
			<div class="bz">
				<nav>12道品控标准+送前实拍</nav>
				<div>行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。</div>
				<img src="../assets/hotsale/10.png" alt="">
			</div>
			<div class="bz">
				<nav>花艺设计团队</nav>
				<div>国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。。</div>
				<img src="../assets/hotsale/11.png" alt="">
			</div>
			<div class="bz">
				<nav>当日新鲜花材制作，极速送达</nav>
				<div>门店覆盖全国2000+城市，鲜花皆由当地门店花艺师在配送当日使用新鲜A级花材制作，确保鲜花娇艳欲滴！并由专人专车送货上门，最快1小时送达，快人一步！</div>
				<img src="../assets/hotsale/12.png" alt="">
			</div>
			<div class="bz">
				<nav>客服团队</nav>
				<div>建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。</div>
				<img src="../assets/hotsale/13.png" alt="">
			</div>
			<div class="bz">
				<nav>优秀平台汇聚优秀人才</nav>
				<div>我们相信优秀的平台环境可以吸引同样气质、热爱花礼行业的优秀人才。</div>
				<img src="../assets/hotsale/14.png" alt="">
			</div>
			<div class="bz">
				<nav>不只鲜花·跨界音乐微电影</nav>
				<div>联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。</div>
				<img src="../assets/hotsale/15.png" alt="">
			</div>
			<div class="foot">
				<el-row>
					<el-col :span="5">
						<div class="kefu">
							<i class="el-icon-headset"></i>
							<div>客服</div>
						</div>
					</el-col>
					<el-col :span="5">
						<div class="shoppingcar">
							<i class="el-icon-shopping-cart-2"></i>
							<div>购物车</div>
						</div>
					</el-col>
					<el-col :span="7">
						<router-link to="/purchase/Purchase">
							<div class="jr">加入购物车</div>
						</router-link>
					</el-col>
					<el-col :span="7">
						<div class="buy">立即购买</div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default{

		name:'HotSale',
		data:() => ({
			show:false
		}),
		methods:{
	    back(){
	      this.$router.go(-1);
	    }
		},
		computed: {
     ...mapGetters(['shoplist']) //这是数组['A,’B’,...]
   }
	}
</script>
<style scoped lang="less">
	.Box{
	 	padding-bottom:50px;
	 	background-color:#e9ecf0;
	 	.hotsale{
	 		max-width:640px;
	 		margin:auto;
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
				img{
					width:50%;
				}
				.titbox{
					width:100%;
					text-align:left;
					img{
						width:640px;
					}
					.tit{
						padding:30px;
						span{
							display: inline-block;
						}
						i{
							float:right;
						}
					}
					.money{
						padding:0 30px;
						padding-top:10px;
						b{
							font-size: 2.5rem;
							color:#ff734c;
						}
						s{
							color:#b4babf;
						}
						span{
							float:right;
							font-size: 1rem;
						}
					}
					p{
						padding:30px;
						margin-top:30px;
						border-top:1px solid #f3f5f7;
						font-size: 1.7rem;
						img{
							width: 2rem;
						}
						i{
							float:right;
						}
					}
				}
			}
			section{
				background-color:white;
				font-size: 1.2rem;
				.titl{
					text-align:center;
					padding:20px 0;
				}
				.sec{
					border-bottom:1px solid #e9ecf0;
					padding:20px 0;
					margin-right: 30px;
				}
			}
			.Distribution{
				background-color:white;
				padding:30px;
				margin:20px 0;
				font-size: 1.2rem;
				.el-icon-more{
					float:right;
				font-size: 1.5rem;
				}
			}
			.evaluate{
				nav{
					padding:30px;
					text-align:left;
					font-size:1.8rem;
					border-bottom:1px solid #e9ecf0;
					div{
						float:right;
						span{
							font-size:1.3rem;
							color:#717990;
						}
						i{
							font-size:1.3rem;
							color:#717990;
						}
					}
				}
				.sect{
					padding:30px;
					height:40px;
					background-color:white;
					.headphoto{
						width:2rem;
						border-radius:2rem;
					}
					span{
						font-size: 1.3rem;
					}
					.star{
						width:6rem;
						float:right;
					}
				}
				.txt{
					padding:0 30px 20px 30px;
					font-size: 1.5rem;
					background-color:white;
				}
				.photo{
					background-color:white;
					padding:0 30px;
					img{
						width:20%;
					}
				}
				footer{
					background-color:white;
					color:#b4babf;
					padding:10px 30px 10px 30px;
					border-bottom:1px solid #e9ecf0;
				}
				.sect2{
					padding:30px;
					height:40px;
					background-color:white;
					.headphoto{
						width:2rem;
						border-radius:2rem;
					}
					span{
						font-size: 1.3rem;
					}
					.star{
						width:6rem;
						float:right;
					}
				}
				.txt{
					padding:0 30px 20px 30px;
					font-size: 1.5rem;
					background-color:white;
				}
				.photo{
					background-color:white;
					padding:0 30px;
					img{
						width:20%;
					}
				}
				footer{
					background-color:white;
					color:#b4babf;
					padding:10px 30px 10px 30px;
					border:none;
				}
				p{
					text-align:center;
					padding:30px 0;
					background-color:white;
					button{
						outline:none;
						border:1px solid black;
						border-radius:5px;
						padding:7px 10px;
						font-size: 1.2rem;
						background-color:white;
					}
				}
			}
			.we{
				margin:15px 0;
				padding-bottom:20px;
				text-align: center;
				background-color:white;
				p{
					font-size:20px;
					padding:20px;
				}
				img{
					width: 60%;
				}
			}
			.phototext{
				background-color:white;
				img{
					width:100%;
				}
				.nav{
					text-align:left;
					font-size: 1.5rem;
					padding:20px;
				}
				.hsg{
					text-align:center;
					font-size: 1.1rem;
					b{
						font-size:1.4rem;
						margin:5px;
					}
					div{
						margin:5px;
					}
					p{
						margin:5px;
					}
				}
			}
			.jx{
				text-align:center;
				font-size:1.2rem;
				nav{
					color:#fe6601;
				}
				p{
					margin:10px;
				}
			}
			.zb{
				font-size: 1.2rem;
				text-align:center;
				div{
					margin:5px;
					b{
						margin-right:20px;
					}
					span{
						margin-left: 20px;
					}
				}
			}
			.pinpai{
				nav{
					font-size: 2rem;
				}
				div{
					text-align:center;
					font-size: 1.3rem;
					margin:20px 0;
				}
			}
			.bz{
				background-color:white;
				padding:30px;
				margin-bottom:30px;
				nav{
					font-size: 2rem;
				}
				div{
					font-size: 1.3rem;
					margin:20px 0;
				}
				img{
					width:100%;
				}
			}
			.foot{
				text-align:center;
				position:fixed;
				bottom:0;
				left:0;
				width:100%;
				font-size: 1.2rem;
				.kefu{
					background-color:#f7f9fa;
					border-right:1px solid #e9ecf0;
					padding:15px;
					i{
						font-size: 1.7rem;
					}
				}
				.shoppingcar{
					background-color:#f7f9fa;
					padding:15px;
					i{
						font-size: 1.7rem;
					}
				}
				.jr{
					background-color:#3d4d42;
					height:84px;
					line-height:84px;
					color:white;
					font-size: 1.5rem;
				}
				.buy{
					background-color:#ff734c;
					color:white;
					height:84px;
					line-height:84px;
					font-size: 1.5rem;
				}
			}
		}
	}
</style>