<template>
    <Layout>
        <div class>
            <div>
                <h1>Hello {{name}}</h1>
                <h1 class="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <h2>{{details.name}} is {{details.age}} years old</h2>
                <div> Go to <router-link to="/about">About page</router-link></div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import SideNav from '@/components/SideNav.vue'
import Layout from '@/components/Layout.vue'
import {ref, reactive} from '@vue/reactivity'
const name = ref('World') 
const details = reactive({
    name: 'John',
    age: 30
})
</script>