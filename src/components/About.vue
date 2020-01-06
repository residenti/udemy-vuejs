<template>
  <div>
    <p>About</p>
    <router-link to="/about/1">アバウト1</router-link>
    <router-link to="/about/2">アバウト2</router-link>
    <p>id: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  watch: {
    $route(oldVal, newVal) {
      console.log("oldVal", oldVal)
      console.log("newVal", newVal)
    }
  },

  beforeCreate() {
    console.log("beforeCreate!! in About")
  },
  created() {
    console.log("created!! in About")
  },
  beforeMount() {
    console.log("beforeMount!! in About")
  },
  mounted() {
    console.log("mounted!! in About")
  },
  beforeUpdate() {
    console.log("beforeUpdate!! in About")
  },
  updated() {
    console.log("updated!! in About")
  },
  beforeDestroy() {
    console.log("beforeDestroy!! in About")
  },
  destroyed() {
    console.log("destroyed!! in About")
  },

  activated() {
    console.log("activated!! in About")
  },
  deactivated() {
    console.log("deactivated!! in About")
  }
}
</script>
