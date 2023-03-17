<template>
    <div class="h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_1rem)] pb-4 overflow-y-auto">
        <div class="bg-lightCard mb-4 p-2 rounded-lg shadow-md">
            <h1 class="flex px-4 pt-4 text-xl font-medium">Hi there                     
                    <div class="rounded w-fit">
                        <img class="animate-wave h-8 -mt-1 ml-2 -mr-1" src="https://em-content.zobj.net/thumbs/120/samsung/349/waving-hand_1f44b.png" alt="">
                    </div>
            </h1>
            <h2 class="text-2xl font-semibold px-4 py-2">Welcome to Rahmlad GH-Compo</h2>
            <p class="px-4 pb-4 font-medium">An extracted version of my github profile</p>
        </div>
        <div v-if="user" class="grid grid-cols-12 p-2 md:p-6 bg-lightCard rounded-lg shadow-lg overflow-hidden">
            <div class="col-span-12 grid place-content-center md:place-content-start mt-4 md:mt-0 md:col-span-3">
                <img class="rounded-full w-64" :src="user.avatar_url" alt="Profile picture">
            </div>
            <div class="p-4 col-span-12 md:col-span-9 grid grid-cols-12 place-content-center">
                <div class="col-span-12 md:col-span-9 mx-2 text-center md:text-left">
                    <h1 class="text-xl font-bold mb-2">{{ user.name }}</h1>
                    <h2 class="text-xl font-semibold mb-2">@{{ user.login }}</h2>
                    <p class="text-gray-700 leading-relaxed">{{ user.bio }}</p>
                </div>
                <div class="w-fit relative">
                    <div class="absolute top-2 right-0.5">
                      <span class="relative flex h-4 w-4">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                      </span>
                    </div>
                    <div class="col-span-12 grid place-content-center md:col-span-3">
                        <a :href="user.html_url" class="bg-transparent border border-blue-500 hover:bg-blue-500 transition duration-500 hover:text-white text-blue-500 font-bold py-1.5 px-6 mt-4 rounded-full inline-block">Follow</a>
                    </div>
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
          <div v-if="!user" class="grid grid-cols-12 p-2 md:p-6 bg-lightCard rounded-lg shadow-lg overflow-hidden border-blue-300">
            <div class="animate-pulse col-span-12 grid place-content-center md:place-content-start mt-4 md:mt-0 md:col-span-3">
                <div class="h-32 w-32 bg-gray-300 rounded-full"></div>
            </div>
            <div class="animate-pulse p-4 col-span-12 md:col-span-9 grid grid-cols-12 place-content-center">
                <div class="col-span-12 md:col-span-9 mx-2 text-center md:text-left">
                    <div class="space-y-10">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-3 bg-gray-300 rounded col-span-2"></div>
                          <div class="h-3 bg-gray-300 rounded col-span-1"></div>
                        </div>
                        <div class="h-3 bg-gray-300 rounded"></div>
                    </div>
                </div>
                <div class="col-span-12 grid place-content-center md:col-span-3">
                    <div class="h-3 bg-gray-300 rounded"></div>                
                </div>
            </div>
            <div class="animate-pulse col-span-12 mt-6 grid grid-cols-12 place-content-center">
                <div class="col-span-1"></div>
                <div class="col-span-10 p-4 mb-6 bg-light shadow-sm rounded-md">
                    <div class="space-y-10">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-3 bg-gray-300 rounded col-span-2"></div>
                          <div class="h-3 bg-gray-300 rounded col-span-1"></div>
                        </div>
                        <div class="h-3 bg-gray-300 rounded"></div>
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
            user: null,
        };
    },
    mounted() {
        setTimeout(()=>{
            fetch("https://api.github.com/users/rahmlad-aramide")
                .then(response => response.json())
                .then(data => this.user = data);
        }, 1000)
    },
}

</script>
<style scoped>
@keyframes wave {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(20deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(15deg); }
    80% { transform: rotate(-10deg); }
    100% { transform: rotate(0deg); }
  }
  
  .animate-wave {
    animation-name: wave;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
  
</style>