<template>
    <div class="grid grid-cols-12">
        <div class="col-span-3">
            <SideNav />
        </div>
        <div class="col-span-9">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import SideNav from '@/components/SideNav.vue';
</script>