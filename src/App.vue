<script setup>
  import SideNav from './components/SideNav.vue';
</script>

<template>
  <div class="grid grid-cols-12 font-Inter">
    <header class="hidden md:block col-span-3">
      <div>
      <SideNav />
      </div>
    </header>
    <header class="flex justify-between md:hidden bg-mobile bg-top h-[9rem] col-span-12 p-4">
      <div class="font-Lancelot font-black text-2xl text-white">
        Rahmlad
      </div> 
      <div class="mt-1 text-white font-bold">
        Open
      </div>
    </header>
    <main class="col-span-12 md:col-span-9 -mt-[5.25rem] md:mt-4 mr-4">
    <router-view></router-view>
    </main>
  </div>
</template>

