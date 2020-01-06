<template>
  <div>
    <p>About</p>
  </div>
</template>

<script>
export default {
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
