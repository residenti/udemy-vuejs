<template>
  <div>
    <p>About</p>

    <p>Vuex で管理されている count の値を変化させる</p>
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>
  </div>
</template>

<script>
// import { mapMutations } from "vuex"
import { mapActions } from "vuex"

export default {
  // 1-1. mutations に定義した処理を呼び出して state の値を変更する.
  // オーソドックスな書き方.
  // methods: {
  //   increment() {
  //     this.$store.commit("count/increment", 1)
  //   },
  //   decrement() {
  //     this.$store.commit("count/decrement", 1)
  //   }
  // },
  // 1-2. mapMutations を用いた書き方.
  // 増減分の値(1)は、@click の呼び出し側に increment(1) のように書く.
  // ES6 のスプレッド演算子(...)を用いて mapMutations(Object) を copumputed オブジェクトにマージする書き方.
  // methods: {
  //   ...mapMutations("count", ["increment", "decrement"])
  // },
  // 2-1. actions に定義した処理を呼び出して state の値を変更する.
  // オーソドックスな書き方.
  // methods: {
  //   increment() {
  //     this.$store.dispatch("count/increment", 1)
  //   },
  //   decrement() {
  //     this.$store.dispatch("count/decrement", 1)
  //   }
  // },
  // 2-2 mapActionsを用いた書き方.
  // 増減分の値(1)は、@click の呼び出し側に increment(1) のように書く.
  // ES6 のスプレッド演算子(...)を用いて mapMutations(Object) を copumputed オブジェクトにマージする書き方.
  methods: {
    ...mapActions("count", ["increment", "decrement"])
  },

  beforeCreate() {
    console.log("[About.vue] beforeCreate!!")
  },
  created() {
    console.log("[About.vue] created!!")
  },
  beforeMount() {
    console.log("[About.vue] beforeMount!!")
  },
  mounted() {
    console.log("[About.vue] mounted!!")
  },
  beforeUpdate() {
    console.log("[About.vue] beforeUpdate!!")
  },
  updated() {
    console.log("[About.vue] updated!!")
  },
  beforeDestroy() {
    console.log("[About.vue] beforeDestroy!!")
  },
  destroyed() {
    console.log("[About.vue] destroyed!!")
  },

  activated() {
    console.log("[About.vue] activated!!")
  },
  deactivated() {
    console.log("[About.vue] deactivated!!")
  }
}
</script>
