<template>
    <div class="h-screen p-2 border-dark/20 dark:border-light/20 text-center">
        <mobile-navbar />
        <div class="h-[calc(100%_-_1rem)] bg-desktop bg-cover bg-bottom rounded-lg my-2 mx-4 backdrop-blur-lg bg-blue-700 dark:bg-dark text-light">
            <div class="h-20 flex justify-center items-center pt-6 mr-4">
                <div class="flex font-Lancelot font-black text-2xl text-white">
                    <span class="mr-2">
                        <img class="h-8 p-1 bg-white rounded-full" src="./../assets/user.svg" alt="">
                     </span>
                    Rahmlad
                  </div> 
            </div>
            <router-link to='/'>
                <div class="flex justify-center items-center py-4 transition duration-200 pr-4 hover:bg-light/80 text-xl font-bold hover:text-blue-700">
                   <span class="mr-2">
                       <img class="h-8 p-1 bg-white rounded-full" src="./../assets/home.svg" alt="">
                    </span>
                    Home
                </div>
            </router-link>
            <router-link to='/stats'>
                <div class="flex justify-center items-center py-4 transition duration-200 pr-4 hover:bg-light/80 text-xl font-bold hover:text-blue-700">
                    <span class="mr-2">
                        <img class="h-8 p-1 bg-white rounded-full" src="./../assets/stat.svg" alt="">
                     </span>
                    Stats
                </div>
            </router-link>
            <router-link to='/repos'>
                <div class="flex justify-center items-center py-4 transition duration-200 pr-4 hover:bg-light/80 text-xl font-bold hover:text-blue-700">
                    <span class="mr-2">
                        <img class="h-8 p-1 bg-white rounded-full" src="./../assets/repo.svg" alt="">
                     </span>
                    Repos
                </div>
            </router-link>
        </div>
        
    </div>
</template>

<script>
import MobileNavbar from './MobileNavbar.vue';

export default {
    name: "SideNav",
    components: { MobileNavbar }
}
</script>