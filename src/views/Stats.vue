<template>
    <div class="h-[calc(100vh_-_4rem)] overflow-y-scroll">
        <!-- <div class="h-32 rounded-lg m-4 bg-lightTop dark:bg-darkTop border-b border-b-dark/20 dark:border-b-white/20">
            
        </div> -->
        <div class="w-[90%] md:w-full flex flex-col p-4 mx-auto md:mb-8 rounded-lg bg-lightCard shadow-lg">
            <div class="font-bold text-2xl mb-2">
                My profile statistical figures
            </div>
            <div>
                Joined on: {{ convertedDate }}
            </div>
        </div>
        <div class="grid grid-cols-12 md:gap-10 gap-y-6 my-4 pt-4">
            <div class="col-span-12 md:col-span-6 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-red-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-red-200 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/following.svg" alt=""></span>
                <span class="font-black text-7xl">20</span>
                <span class="text-xl">Following</span>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-orange-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-orange-200 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/followers.svg" alt=""></span>
                <span class="font-black text-7xl">52</span>
                <span class="text-xl">Followers</span>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-yellow-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/gists.svg" alt=""></span>
                <span class="font-black text-7xl">1</span>
                <span class="text-xl">Gists</span>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3 m-4 relative cursor-pointer transition duration-200 hover:scale-90 active:scale-100 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="bg-green-500 w-full h-2 top-0 rounded-t-lg flex absolute"></span>
                <span class="h-10 w-10 rounded-full bg-green-400 flex justify-center items-center mb-2"><img class="h-7 w-7" src="./../assets/repos.svg" alt=""></span>
                <span class="font-black text-7xl">91</span>
                <span class="text-xl">Repos</span>
            </div>
        </div>
    </div>
</template>

<script>
// import User from './../components/icons/User.vue'
export default {
    name: "Stats",
    data() {
        return {
            title: "Hi there, welcome to my Github Collection",
            user: {},
            convertedDate: "",
        }
    },
    mounted(){
        fetch('https://api.github.com/users/rahmlad-aramide')
        .then(response => response.json())
        .then(data => {
            this.user = data;
            const date = new Date(data.created_at);
            const options = { year: "numeric", month: "long", day: "numeric" };
            this.convertedDate = date.toLocaleDateString("en-US", options);
        })
    }
}

</script>