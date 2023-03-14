<template>
    <div class="h-screen overflow-y-auto bg-light dark:bg-dark">
        <div class="h-32 bg-lightTop dark:bg-darkTop border-b border-b-dark/20 dark:border-b-white/20"></div>
            <div class="grid grid-cols-12">
                <div class="col-span-4">
                    <img class="rounded-full max-w-[15rem] ml-10 -mt-[5rem]" :src="user.avatar_url" :alt="user.login">
                </div>
                <div class="col-span-4 mt-6">
                    <h1>{{ user.name }}</h1>
                    <h2>@{{ user.login }}</h2>
                </div>
                <div class="col-span-4">
                    <button class="border rounded-full px-4 py-1">
                        {{ user.hireable? "Hireable" : "Not hireable" }}
                    </button>
                    <button class="border rounded-full px-4 py-1">
                        <a :href="user.html_url">Follow</a>
                    </button>
                </div>
        </div>
        <div>
            <h3> <span class="font-semibold">Organization name:</span> {{ user.company }}</h3>
            <h3> <span class="font-semibold">Location:</span> {{ user.location }}</h3>
            <div>
                <span class="font-semibold">Website:</span> 
                <a :href="user.blog">{{user.blog}}</a>
            </div>
        </div>
        
        
       
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            title: "Hi there, welcome to my Github Collection",
            user: {}
        }
    },
    mounted(){
        fetch('https://api.github.com/users/rahmlad-aramide')
        .then(response => response.json())
        .then(data => this.user = data)
    }
}

</script>