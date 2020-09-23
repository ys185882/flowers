<template>
  <div id="app">
    <el-backtop target="#app" :bottom="100" class="top">
	    <div>
			<i class="el-icon-top"></i>
	    </div>
    </el-backtop>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
	*{
		padding:0;
		margin:0;
	}
	html,body{
		background-color:#e9ecf0;
		height: 100%;
	}
	a {
	  text-decoration: none;
	}
	#app{
		height:100%;
		overflow-y: scroll;
		background-color:white;
		.top{
			width:62px;
			height:62px;
			div{
				font-size: 40px;
	      height: 100%;
	      width: 100%;
	      border-radius:31px;
	      box-shadow: 0 0 6px rgba(0,0,0, .12);
	      text-align: center;
	      line-height: 62px;
	      color: black;
			}
		}
	}
</style>
