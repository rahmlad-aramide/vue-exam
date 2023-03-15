<template>
    <div>
      <h1>Repos</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <ul>
          <li v-for="repo in paginatedRepos" :key="repo.id">
            <router-link :to="{ name: 'Repo', params: { id: repo.id } }">
              {{ repo.name }}
            </router-link>
          </li>
        </ul>
        <div>
          <button :disabled="currentPage === 1" @click="currentPage--">Previous</button>
          <span>{{ currentPage }}</span>
          <button :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'Repos',
    setup() {
      const isLoading = ref(true);
      const repos = reactive([]);
      const perPage = 5;
      const currentPage = ref(1);
  
      const route = useRoute();
      const router = useRouter();
  
      const fetchData = async () => {
        isLoading.value = true;
        try {
          const response = await fetch('https://api.github.com/orgs/vuejs/repos');
          const data = await response.json();
          repos.value = data;
        } catch (error) {
          console.log(error);
        }
        isLoading.value = false;
      };
  
      const totalPages = computed(() => {
        return Math.ceil(repos.value.length / perPage);
      });
  
      const paginatedRepos = computed(() => {
        const startIndex = (currentPage.value - 1) * perPage;
        const endIndex = currentPage.value * perPage;
        return repos.value.slice(startIndex, endIndex);
      });
  
      onMounted(() => {
        fetchData();
      });
  
      return {
        isLoading,
        repos,
        perPage,
        currentPage,
        totalPages,
        paginatedRepos
      };
    }
  };
  </script>
  