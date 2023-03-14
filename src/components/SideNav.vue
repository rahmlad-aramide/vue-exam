<template>
    <div class="h-screen bg-lightTop dark:bg-dark text-dark dark:text-light border-dark/20 dark:border-light/20 border-r">
        <div><router-link to='/'>Home</router-link></div>
        <div><router-link to='/stats'>Stats</router-link></div>
        <div><router-link to='/repos'>Repos</router-link></div>
    </div>
</template>

<script>
export default {
    name: 'SideNav',
}
</script>