<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>親のいいね数: {{ count }}</p>
    <HelloWorld 
      :count="count"
      @my-click="incrementCount"
      @console-log="consoleLog"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    incrementCount(value) {
      this.count = value
    },
    consoleLog() {
      console.log("called!: 小コンポーネントから呼ばれたよ！")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
