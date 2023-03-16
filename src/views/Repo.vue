  <template>
    <div class="h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_2rem)] bg-lightCard p-6 rounded-lg overflow-y-auto">
    <!-- <h2 v-for="(value, key) in repo" :key="key">{{ key }}: {{ value }}</h2> -->
    <h3>The table below present a few other information about the repository.</h3>
        <div>
          <h1 v-if="!repo">Loading...</h1>
        </div>
        <div v-if="repo">
          <table>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
            <tr>
              <th>Repo name</th>
              <td>{{repo.name}}</td>
            </tr>
            <tr>
              <th>Visibility</th>
              <td v-if="repo.private">Private</td>
              <td v-else>Public</td>
            </tr>
            <tr>
              <th>Link to repo</th>
              <td v-if="repo.description">{{repo.description}}</td>
              <td v-else>No description for this repo</td>
            </tr>
            <tr>
              <th>Main language</th>
              <td>{{repo.language}}</td>
            </tr>
            <tr>
              <th>License</th>
              <td>{{repo.license.spdx_id}}</td>
            </tr>
            <tr>
              <th>Default branch</th>
              <td>{{repo.default_branch}}</td>
            </tr>
            <tr>
              <th>Repo size</th>
              <td>{{repo.size}}</td>
            </tr>
            <tr>
              <th>Clone url</th>
              <td>{{repo.clone_url}}</td>
            </tr>
            <tr>
              <th>SSH url</th>
              <td>{{repo.ssh_url}}</td>
            </tr>
            <tr>
              <th>Git url</th>
              <td>{{repo.git_url}}</td>
            </tr>
            <tr>
              <th>SVN url</th>
              <td>{{repo.svn_url}}</td>
            </tr>
            
            <tr>
              <th>Allow forking</th>
              <td>{{repo.allow_forking}}</td>
            </tr>
            <tr>
              <th>No of forks</th>
              <td>{{repo.forks_count}}</td>
            </tr>
            <tr>
              <th>Is repo forked</th>
              <td>{{repo.fork}}</td>
            </tr>
            <tr>
              <th>Open issues</th>
              <td>{{repo.open_issues}}</td>
            </tr>
            <tr>
              <th>Is repo archived</th>
              <td>{{repo.archived}}</td>
            </tr>
            <tr>
              <th>Is repo diabled</th>
              <td>{{repo.disabled}}</td>
            </tr>
            <tr>
              <th>Has pages</th>
              <td>{{repo.has_pages}}</td>
            </tr>
            <tr>
              <th>Has discussions</th>
              <td>{{repo.has_discussions}}</td>
            </tr>
          </table>
        </div>

    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  // import data from './../components/data';
  
  const route = useRoute();
  const repo = ref(null);
  
  const fetchRepo = async () => {
    const id = route.params.id;
    const response = await fetch(`https://api.github.com/users/rahmlad-aramide/repos`);
    const data = await response.json();
    const filteredData = data.filter(item => {
      return item.id == id;
    });
    repo.value = filteredData[0];
  };
  console.log(typeof(repo))
  onMounted(() => {
    fetchRepo();
  });
  </script>

  <style scoped>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }

</style>
  