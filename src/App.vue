<script setup>
  import SideNav from './components/SideNav.vue';
</script>

<template>
  <div class="grid grid-cols-12 font-Inter">
    <header class="col-span-3">
      <div>
      <SideNav />
    </div>
  </header>
  <main class="col-span-9">
    <router-view></router-view>
  </main>
</div>
</template>

