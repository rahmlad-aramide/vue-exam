<template>
    <div>
      <h1>{{ $route.params.id }}</h1>
      <h2>{{ itemData.title }}</h2>
      <p>{{ itemData.description }}</p>
      <img :src="itemData.image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      itemData: Object
    },
    created() {
      console.log(this.$route.params.id) // dynamic segment from route path
      console.log(this.$route.props.itemData) // data passed as props
    }
  }
  </script>
  