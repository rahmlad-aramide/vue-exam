<template>
    <div class="h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_1rem)] pb-4 overflow-y-auto">
        <div class="bg-lightCard mb-4 p-2 rounded-lg shadow-md">
            <h1 class="flex px-4 pt-4 text-xl font-medium">Hi there <img class="h-8 ml-2 -mr-1" src="https://em-content.zobj.net/thumbs/120/samsung/349/waving-hand_1f44b.png" alt=""></h1>
            <h2 class="text-2xl font-semibold px-4 py-2">Welcome to Rahmlad GH-Compo</h2>
            <p class="px-4 pb-4 font-medium">An extracted version of my github profile</p>
        </div>
        <div class="grid grid-cols-12 p-2 md:p-6 bg-lightCard rounded-lg shadow-lg overflow-hidden">
            <div class="col-span-12 grid place-content-center md:place-content-start mt-4 md:mt-0 md:col-span-3">
                <img class="rounded-full w-64" :src="user.avatar_url" alt="Profile picture">
            </div>
            <div class="p-4 col-span-12 md:col-span-9 grid grid-cols-12 place-content-center">
                <div class="col-span-12 md:col-span-9 mx-2 text-center md:text-left">
                    <h1 class="text-xl font-bold mb-2">{{ user.name }}</h1>
                    <h2 class="text-xl font-semibold mb-2">@{{ user.login }}</h2>
                    <p class="text-gray-700 leading-relaxed">{{ user.bio }}</p>
                </div>
                <div class="col-span-12 grid place-content-center md:col-span-3">
                    <a :href="user.html_url" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-6 mt-4 rounded-full inline-block">Follow</a>
                </div>
            </div>
            <div class="col-span-12 mt-6 grid grid-cols-12 place-content-center">
                <div class="col-span-1"></div>
                <div class="col-span-10 p-4 mb-6 bg-light shadow-sm rounded-md">
                    <h3> <span class="font-semibold">Organization name:</span> {{ user.company }}</h3>
                    <h3> <span class="font-semibold">Location:</span> {{ user.location }}</h3>
                    <div>
                        <span class="font-semibold">Website:</span> 
                        <a :href="user.blog">{{user.blog}}</a>
                    </div>
                </div>
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
        };
    },
    mounted() {
        fetch("https://api.github.com/users/rahmlad-aramide")
            .then(response => response.json())
            .then(data => this.user = data);
    }
}

</script>