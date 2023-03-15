<template>
    <div class="h-screen p-2 border-dark/20 dark:border-light/20 text-center">
        <mobile-navbar />
        <div class="h-[calc(100%_-_1rem)] bg-desktop bg-cover bg-bottom rounded-lg my-2 mx-4 backdrop-blur-lg bg-blue-700 dark:bg-dark text-light">
            <div class="h-20">

            </div>
            <router-link to='/'>
                <div class="flex justify-center items-center py-4 transition duration-200 pr-4 hover:bg-light/80 text-xl font-bold hover:text-blue-700">
                    Home
                </div>
            </router-link>
            <router-link to='/stats'>
                <div class="flex justify-center items-center py-4 transition duration-200 pr-4 hover:bg-light/80 text-xl font-bold hover:text-blue-700">
                    Stats
                </div>
            </router-link>
            <router-link to='/repos'>
                <div class="flex justify-center items-center py-4 transition duration-200 pr-4 hover:bg-light/80 text-xl font-bold hover:text-blue-700">
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