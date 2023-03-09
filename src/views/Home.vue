<template>
    <div>
        <h1>Hello {{name}}</h1>
        <h2>{{details.name}} is {{details.age}} years old</h2>
        <div> Go to <router-link to="/about">About page</router-link></div>
    </div>
</template>

<script setup>
import {ref, reactive} from '@vue/reactivity'
const name = ref('World') 
const details = reactive({
    name: 'John',
    age: 30
})
</script>