<template>
<<<<<<< HEAD
	<div id="app">
		<router-view />
		<TheFooter />
	</div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import * as _ from "lodash";

export default {
	name: "App",
	components: {
		TheFooter,
	},
	computed: {
		title() {
			// 这里要注意lodash当中split处理的特性
			const page = _.split(this.$route.path, "/", 2)[1];
			switch (page) {
				case "home":
					return "西南室友大学13栋寝室313号";
				case "search":
					return "搜索";
				case "order":
					return "订单列表";
				case "profile":
					return "我的";
				default:
					return "unknown";
			}
		},
	},
};
</script>
=======
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
>>>>>>> d732356 (init)
