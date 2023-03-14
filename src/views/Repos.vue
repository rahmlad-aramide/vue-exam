<template>
    <div class="h-screen overflow-y-auto">
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="repo in data" :key="repo.id">
                <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            title: "Hi there, welcome to my Github Collection",
            data: ''
        }
    },
    mounted(){
        fetch('https://api.github.com/users/rahmlad-aramide/repos')
        .then(response => response.json())
        .then(data => this.data = data)
    }
}

</script>