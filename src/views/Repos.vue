<template>
    <div class="h-[calc(100vh_-_4rem)] overflow-y-auto pb-[2rem]">
              <div class="bg-white my-4 p-2 rounded-lg">
                  <h1 class="p-4 text-2xl font-medium">{{ title }}</h1>
              </div>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li class="flex flex-col justify-center transition duration-200 rounded-lg hover:scale-95 active:scale-100 p-4 bg-light" v-for="repo in data" :key="repo.id">
                      <span class="text-dark text-lg font-medium items-center h-10 w-full flex">{{ repo.name }}</span>
                      <a :href="repo.html_url" target="_blank" class="text-purple-700">View project</a>
                  </li>
              </ul>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            title: "This is the collection of my Github Repositories",
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