<template>
  <div class="hello">
    <p>子供のいいね数(=親のいいねの1/2): {{halfNumber}}</p>
    <button @click="increment">いいね</button>
    <button @click="consoleLog">コンソールにログを出力する</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    count: Number
  },
  computed: {
    halfNumber() {
      return this.count / 2
    }
  },
  methods: {
    increment() {
      this.$emit('my-click', this.count + 1)
    },
    consoleLog() {
      this.$emit('console-log')
    }
  },

  beforeCreate() {
    console.log("[HelloWorld.vue] beforeCreate!!")
  },
  created() {
    console.log("[HelloWorld.vue] created!!")
  },
  beforeMount() {
    console.log("[HelloWorld.vue] beforeMount!!")
  },
  mounted() {
    console.log("[HelloWorld.vue] mounted!!")
  },
  beforeUpdate() {
    console.log("[HelloWorld.vue] beforeUpdate!!")
  },
  updated() {
    console.log("[HelloWorld.vue] updated!!")
  },
  beforeDestroy() {
    console.log("[HelloWorld.vue] beforeDestroy!!")
  },
  destroyed() {
    console.log("[HelloWorld.vue] destroyed!!")
  },

  activated() {
    console.log("[HelloWorld.vue] activated!!")
  },
  deactivated() {
    console.log("[HelloWorld.vue] deactivated!!")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
