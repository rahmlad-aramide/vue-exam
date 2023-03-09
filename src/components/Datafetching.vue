<template>
    <div>
        <h1>{{ title}}</h1>
        <ul>
            <li v-text="data"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Datafetching",
    data(){
        return {
            title: "Data Fetching",
            data: ''
        }
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => this.data = data)
    }
}
</script>

<style scoped>

</style>