  <template>
    <div class="h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_2rem)] bg-lightCard p-6 rounded-lg overflow-y-auto">
      <!-- <p>{{repo}}</p> -->

    <h2 v-for="(value, key) in repo" :key="key">{{ key }}: {{ value }}</h2>
      <!-- <h2 v-for="(repo, index) in repo" :key="index">{{ repo }}</h2> -->
      <h1 v-if="!repo">Loading...</h1>
      <h3>{{repo.id}}</h3>

    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const repo = ref(null);
  
  const fetchRepo = async () => {
    const id = route.params.id;
    const response = await fetch(`https://api.github.com/users/rahmlad-aramide/repos`);
    const data = await response.json();
    const filteredData = data.filter(item => {
      return item.id == id;
    });
    repo.value = filteredData[0]; // Update the value of the ref
  };
  console.log(typeof(repo))
  onMounted(() => {
    fetchRepo();
  });
  </script>
  