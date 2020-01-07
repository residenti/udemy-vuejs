<template>
  <div>
    <p>About</p>

    <p>Vuex で管理されている count の値を変化させる</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.count++
    },
    decrement() {
      this.$store.state.count--
    }
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
