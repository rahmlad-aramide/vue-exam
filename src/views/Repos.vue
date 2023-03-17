<template>
    <div class="h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_2rem)] overflow-y-auto pb-[0rem]">
        <div class="bg-lightCard mb-4 p-2 rounded-lg">
            <h1 class="p-4 text-2xl font-medium">{{ title }}</h1>
        </div>
        <div v-if="state.loading" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li class="flex flex-col justify-center transition duration-200 rounded-lg hover:scale-95 active:scale-100 p-4 bg-lightCard">
                <span class="items-center bg-gray-300 h-2 mb-6 mt-2 w-full flex"></span>
                <span class="items-center h-2 bg-gray-300 mb-2 w-full flex"></span>
            </li>
            <li class="flex flex-col justify-center transition duration-200 rounded-lg hover:scale-95 active:scale-100 p-4 bg-lightCard">
                <span class="items-center bg-gray-300 h-2 mb-6 mt-2 w-full flex"></span>
                <span class="items-center h-2 bg-gray-300 mb-2 w-full flex"></span>
            </li>
        </div>
        <ul v-if="!state.loading" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li class="flex flex-col justify-center transition duration-200 rounded-lg hover:scale-95 active:scale-100 p-4 bg-lightCard"
                v-for="repo in paginatedRepos" :key="repo.id">
                <span class="text-dark text-lg font-medium items-center h-fit mb-2 w-full flex">{{ repo.name }}</span>
                <span class="text-dark text-sm items-center h-fit mb-2 w-full flex">{{ repo.description }}</span>
                <span>
                    <router-link
                        class="text-blue-700 cursor-pointer hover:underline decoration-wavy" 
                        :to="{ name: 'Repo', params: { id: repo.id } }">
                        View project
                    </router-link>
                    |
                    <a :href="repo.url" target="_blank"
                        class="text-blue-700 cursor-pointer hover:underline decoration-wavy">View on Github</a>
                </span>
            </li>
        </ul>
        <div class="flex justify-center mt-4">
            <div class="pagination">
                <button :disabled="state.currentPage === 1" @click="state.currentPage--"
                class="border border-blue-700 disabled:cursor-not-allowed px-2 mx-1 text-white bg-blue-700 hover:scale-90 active:scale-100 transition duration-200 disabled:opacity-50">Prev</button>
            <button v-for="page in pages" :key="page" :class="{ active: state.currentPage === page }"
                class="border border-blue-700 px-2 mx-1 text-white bg-blue-700 hover:scale-90 active:scale-100 transition duration-200"
                @click="state.currentPage = page">{{ page }}</button>
                <button :disabled="state.currentPage === totalPages" @click="state.currentPage++"
                class="border border-blue-700 disabled:cursor-not-allowed px-2 mx-1 text-white bg-blue-700 hover:scale-90 active:scale-100 transition duration-200 disabled:opacity-50">Next</button>
            </div>
        </div>

    </div>
</template>
  
<script>
import { reactive, ref, computed, onMounted } from 'vue';

export default {
    name: 'Repos',
    setup() {
        const title = ref('This is the collection of my Github Repositories');
        const state = reactive({
            loading: false,
            repos: [],
            currentPage: 1,
            itemsPerPage: 6,
        });

        const totalPages = computed(() => Math.ceil(state.repos.length / state.itemsPerPage));
        const startIndex = computed(() => (state.currentPage - 1) * state.itemsPerPage);
        const endIndex = computed(() => state.currentPage * state.itemsPerPage);
        const paginatedRepos = computed(() => state.repos.slice(startIndex.value, endIndex.value));
        const pages = computed(() => {
            const pagesArray = [];
            for (let i = 1; i <= totalPages.value; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        });

        const fetchRepos = async () => {
            state.loading = true;
            const response = await fetch('https://api.github.com/users/rahmlad-aramide/repos');
            const data = await response.json();
            state.repos = data.map(repo => ({
                name: repo.name,
                description: repo.description,
                id: repo.id,
                url: repo.html_url
            }));
            setTimeout(()=>{
                state.loading = false;
            }, 2000)
        };

        onMounted(() => {
                fetchRepos();
        });

        return {
            state,
            totalPages,
            paginatedRepos,
            pages,
            title
        };
    },
};
</script>
<style>
button.active {
    color: blue;
    background: #ddd;
    border-radius: 4px;
}
button {
    border-radius: 4px;
}
</style>