<template>
    <div class="h-[calc(100vh_-_4rem)] overflow-y-scroll">
        <div class="w-[90%] md:w-full flex flex-col p-6 mx-auto md:mb-8 rounded-lg bg-lightCard shadow-lg">
            <div class="font-semibold text-2xl mb-2">
                My profile statistical figures
            </div>
            <div v-if="user">
                Joined on: {{ convertedDate }}
            </div>
            <div v-if="!user" class="h-3 bg-gray-200 rounded-lg"></div>
        </div>
        <div v-if="!user" class="grid grid-cols-12 gap-4 sm:gap-2 md:gap-6 gap-y-6 my-4 pt-4">
            <div class="animate-pulse border border-blue-200 col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-red-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-red-500 flex justify-center items-center mb-2"></span>
                <div v-if="!user" class="h-3 w-12 bg-gray-300 rounded-lg"></div>
            </div>
            <div class="animate-pulse border border-blue-200 col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-orange-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-orange-500 flex justify-center items-center mb-2"></span>
                <div v-if="!user" class="h-3 w-12 bg-gray-300 rounded-lg"></div>
            </div>
            <div class="animate-pulse border border-blue-200 col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-yellow-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-yellow-500 flex justify-center items-center mb-2"></span>
                <div v-if="!user" class="h-3 w-12 bg-gray-300 rounded-lg"></div>
            </div>
            <div class="animate-pulse border border-blue-200 col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-green-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-green-400 flex justify-center items-center mb-2"></span>
                <div v-if="!user" class="h-3 w-12 bg-gray-300 rounded-lg"></div>
            </div>
        </div>

        <div v-if="user" class="grid grid-cols-12 md:gap-10 gap-y-6 my-4 pt-4">
            <div class="col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-red-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-red-200 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/following.svg" alt=""></span>
                <div class="font-black  text-6xl md:text-7xl">{{user.following}}</div>
                <span class="text-lg md:text-xl">Following</span>
            </div>
            <div class="col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-orange-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-orange-200 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/followers.svg" alt=""></span>
                <div class="font-black  text-6xl md:text-7xl">{{user.followers}}</div>
                <span class="text-lg md:text-xl">Followers</span>
            </div>
            <div class="col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-yellow-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/gists.svg" alt=""></span>
                <div class="font-black  text-6xl md:text-7xl">{{ user.public_gists }}</div>
                <span class="text-lg md:text-xl">Gists</span>
            </div>
            <div class="col-span-6 p-4 sm:col-span-4 md:col-span-3 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-green-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-green-400 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/repos.svg" alt=""></span>
                <div class="font-black text-6xl md:text-7xl">{{user.public_repos}}</div>
                <span class="text-lg md:text-xl">Repos</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stats",
    data() {
        return {
            title: "Hi there, welcome to my Github Collection",
            user: null,
            convertedDate: "",
        }
    },
    mounted(){
        fetch('https://api.github.com/users/rahmlad-aramide')
        .then(response => response.json())
        .then(data => {
            setTimeout(()=>{
                this.user = data;
                const date = new Date(data.created_at);
                const options = { year: "numeric", month: "long", day: "numeric" };
                this.convertedDate = date.toLocaleDateString("en-US", options);
            }, 1000)
        })
    }
}

</script>