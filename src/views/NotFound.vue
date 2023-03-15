<template>
    <div class="min-h-[calc(100vh_-_4rem)] md:min-h-[calc(100vh_-_2rem)] rounded-lg bg-lightCard flex flex-col justify-center items-center">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-gray-400">404</h1>
        <h2 class="text-4xl font-bold text-gray-600 mt-4">Page Not Found</h2>
        <p class="text-gray-500 mt-4">Oops! The page you are looking for does not exist.</p>
        <router-link to="/" class="text-blue-500 hover:text-blue-700 mt-4 block">Go back home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  }
  </script>
  