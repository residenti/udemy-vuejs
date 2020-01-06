<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>親のいいね数: {{ count }}</p>
    <keep-alive>
      <HelloWorld
        :count="count"
        @my-click="incrementCount"
        @console-log="consoleLog"
        v-if="componentName === 'HelloWorld'"
      />
    </keep-alive>
    <button @click="componentName = 'HelloWorld'">表示</button>
    <button @click="componentName = ''">非表示</button>

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <transition name="fade" mode='out-in'>
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </transition>

    <div>
      <h2>イベントフォーム</h2>
      <label for="maxNumber">最大値</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.number"
      >
      <p>{{ typeof eventData.number }}</p>
    </div>

    <div>
      <button @click="show = !show">切り替え</button>
      <transition
        enter-active-class="animated bounce"
        leave-active-class="animated shake"
        appear
      >
        <p v-if="show">hello</p>
      </transition>
      <transition
        name="slide"
        type="animation"
        appear
      >
        <p v-if="show">bye</p>
      </transition>
    </div>

    <div>
      <nav>
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/about" class="link">About</router-link>
      </nav>
      <router-view></router-view>
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
        title: "タイトル",
        number: 0
      },
      componentName: 'HelloWorld',
      show: true
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  /* 初期の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 表示される時のトランザクションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
  /* 表示される時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランザクションの状態 */
  transition: opacity 0.5s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}
@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0px);
  }
}
.link {
  margin-right: 10px;
}
</style>
