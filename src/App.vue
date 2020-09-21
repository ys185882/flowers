<template>
  <div id="app">
    <el-backtop target="#app"></el-backtop>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		padding:0;
		margin:0;
	}
	a {
	  text-decoration: none;
	}
	 
	.router-link-active {
	  text-decoration: none;
	}
</style>
