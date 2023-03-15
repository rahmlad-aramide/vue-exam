<template>
    <div class="h-screen overflow-y-auto bg-light dark:bg-dark">
        <div class="bg-lightCard mb-4 p-2 rounded-lg shadow-md">
            <h1 class="flex p-4 text-2xl font-medium">Hi there <img class="h-8 ml-2 -mr-1" src="https://em-content.zobj.net/thumbs/120/samsung/349/waving-hand_1f44b.png" alt="">, thanks for checking out my project</h1>
        </div>
        <div class="grid grid-cols-12 p-6 bg-lightCard rounded-lg shadow-md overflow-hidden">
            <div class="col-span-3">
                <img class="rounded-full w-64" :src="user.avatar_url" alt="Profile picture">
              </div>
            <div class="p-4 col-span-9 grid grid-cols-12">
                <div class="col-span-9">
                    <h1 class="text-xl font-bold mb-2">{{ user.name }}</h1>
                    <h2 class="text-xl font-semibold mb-2">@{{ user.login }}</h2>
                    <p class="text-gray-700 leading-relaxed">{{ bio }}</p>
                </div>
                <div class="col-span-3">
                    <a :href="user.html_url" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-6 mt-4 rounded-full inline-block">Follow</a>
                </div>
            </div>
            <div class="col-span-12">
                <h3> <span class="font-semibold">Organization name:</span> {{ user.company }}</h3>
                <h3> <span class="font-semibold">Location:</span> {{ user.location }}</h3>
                <div>
                    <span class="font-semibold">Website:</span> 
                    <a :href="user.blog">{{user.blog}}</a>
                </div>
            </div>
          </div>
        <!-- <GithubProfileCard :profilePictureUrl="user.avatar_url" :username="user.login" /> -->
        
       
    </div>
</template>

<script>
// import GithubProfileCard from '../components/GithubProfileCard.vue';

export default {
    name: "Home",
    data() {
        return {
            title: "Hi there, welcome to my Github Collection",
            user: {}
        };
    },
    mounted() {
        fetch("https://api.github.com/users/rahmlad-aramide")
            .then(response => response.json())
            .then(data => this.user = data);
    }
}

</script>