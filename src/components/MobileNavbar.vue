<template>
    <nav class="flex md:hidden fixed top-0 right-0 z-10">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-end mt-4">
          <div class="flex">
            <button @click="showMenu = !showMenu" class="flex items-center">
              <svg class="w-6 h-6 text-light" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path v-if="showMenu" d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path v-else d="M4 8H20M4 12H20M4 16H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <transition name="slide">
          <div v-if="showMenu" class="bg-white border-b border-gray-200 py-2">
            <router-link to="/" class="block px-4 py-2 text-gray-500 font-medium">Home</router-link>
            <router-link to="/stats" class="block px-4 py-2 text-gray-500 font-medium">Stats</router-link>
            <router-link to="/repos" class="block px-4 py-2 text-gray-500 font-medium">Repos</router-link>
          </div>
        </transition>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MobileNavbar',
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>
  
  <style>

.slide-enter-active ,
  .slide-leave-active {
    transition: transform 0.2s ease-out;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
  </style>
  