<template>
	<div class="Search">
		<div class="headerbox">
	      <div class="header">
	      	<el-row>
		      	<el-col :span="2">
		      		<i class="el-icon-arrow-left"></i>
		      	</el-col>
		      	<el-col :span="18">
		      		<div class="search">
			          <i class="el-icon-search"></i>
			          <input type="text" placeholder="戴安娜玫瑰">
			        </div>
		      	</el-col>
		        <el-col :span="4">
		       	 <button>搜索</button>
		      	</el-col>
	      	</el-row>
	      </div>
	    </div>
	    <div class="section">
	    	<div>热门搜索</div>
	    	<button>爱情鲜花</button>
	    	<button>向日葵</button>
	    	<button>生日蛋糕</button>
	    	<button>康乃馨</button>
	    	<br>
	    	<button>百合</button>
	    	<button>满天星</button>
	    </div>
	</div>
</template>
<script>
export default{
	name:'Search'
}
</script>
<style lang="less" scoped>
	.Search{
		padding-top:73px;
	}
	.headerbox{
    width:100%;
    height:50px;
    position:fixed;
    top:0px;
    z-index: 10;
  }
  .header{
    background-color: white;
    padding:10px;
    margin:auto;
    text-align: center;
    border-bottom: 1px solid #f3f5f7;
    .el-icon-arrow-left{
  		margin-top: 5px;
    	float:left;
    	font-size:40px;
    }
    .search{
    color:#b0b3b6;
      height:50px;
      margin: auto;
      width:100%;
      border-radius:25px;
      float:left;
      background-color:#f3f5f7;
      i{
        margin-left: 20px;
        line-height: 50px;
        float:left;
      }
      input{
        height:50px;
        border-radius:25px;
        border:none;
        outline: none;
        width:80%;
        background-color:#f3f5f7;
      }
    }
  	button{
  		margin-top: 5px;
    	color:white;
    	outline:none;
    	border:none;
    	border-radius:10px;
    	padding:10px 20px;
    	background-color:#ff734c;
    }
  }
  .section{
  	padding:30px;
  	div{
  		font-size:20px;
  		margin-bottom: 20px;
  	}
		button{
			margin:10px 10px 10px 0;
			padding:10px 20px;
			outline:none;
			border:none;
			background-color:#f3f5f7;
		}
  }
</style>