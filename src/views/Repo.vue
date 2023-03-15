  <template>
    <div>
      <h2>{{ repo }}</h2>
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
    console.log(data);
    const filteredData = data.filter(item => {
      return item.id == id;
    });
    console.log(filteredData[0]);
    repo.value = filteredData[0]; // Update the value of the ref
  };
  
  onMounted(() => {
    fetchRepo();
  });
  </script>
  