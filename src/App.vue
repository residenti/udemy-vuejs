<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>親のいいね数: {{ count }}</p>
    <HelloWorld 
      :count="count"
      @my-click="incrementCount"
      @console-log="consoleLog"
    />

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <div>
      <h2>イベントフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model="eventData.title"
      >
      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Home,
    About
  },
  data() {
    return {
      count: 1,
      currentComponent: "Home",
      eventData: {
        title: "タイトル"
      }
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
