<!-- <template>
    <div>
      <ul>
        <li v-for="item in paginatedData" :key="item.id">{{ item.title }}</li>
      </ul>
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs, onMounted } from 'vue'
  
  export default {
    name: 'DataList',
    setup() {
      const state = reactive({
        data: [],
        currentPage: 1,
        itemsPerPage: 10,
        totalPages: ''
      })
  
      const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        state.data = data
      }
  
      const paginateData = () => {
        const start = (state.currentPage - 1) * state.itemsPerPage
        const end = start + state.itemsPerPage
        return state.data.slice(start, end)
      }
  
      state.totalPages = Math.ceil(state.data.length / state.itemsPerPage)
  
      const nextPage = () => {
        if (state.currentPage < state.totalPages) {
          state.currentPage++
        }
        console.log(state.currentPage)
      }
  
      const prevPage = () => {
        if (state.currentPage > 1) {
          state.currentPage--
        }
        console.log(state.currentPage)
      }
  
      onMounted(() => {
        getData()
      })
  
      return {
        ...toRefs(state),
        nextPage,
        prevPage,
        paginatedData: paginateData()
      }
    }
  }
  </script>
   -->

   <template>
    <div>
      <h1>Repositories</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="repo in paginatedRepos" :key="repo.id">
            <td>{{ repo.name }}</td>
            <td>{{ repo.description }}</td>
            <td>{{ repo.stars }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="state.loading">Loading...</div>
      <div class="pagination">
        <button :disabled="state.currentPage === 1" @click="state.currentPage--">Prev</button>
        <button
          v-for="page in pages"
          :key="page"
          :class="{ active: state.currentPage === page }"
          @click="state.currentPage = page"
        >{{ page }}</button>
        <button :disabled="state.currentPage === totalPages" @click="state.currentPage++">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, computed, onMounted } from 'vue';
  
  export default {
    name: 'Repos',
    setup() {
      const state = reactive({
        loading: false,
        repos: [],
        currentPage: 1,
        itemsPerPage: 10,
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
        const response = await fetch('https://api.github.com/orgs/vuejs/repos');
        const data = await response.json();
        state.repos = data.map(repo => ({
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          id: repo.id,
        }));
        state.loading = false;
      };
  
      onMounted(() => {
        fetchRepos();
      });
  
      return {
        state,
        totalPages,
        paginatedRepos,
        pages,
      };
    },
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  .pagination {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    margin: 0 4px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
  }
  
  button:disabled {
    color: #ddd;
    cursor: default;
  }
  
  button.active {
    background-color: #ddd;
  }
  </style>
  