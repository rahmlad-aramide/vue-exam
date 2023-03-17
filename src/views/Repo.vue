  <template>
    <div class="h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_2rem)] bg-lightCard p-6 rounded-lg overflow-y-auto">
    <!-- <h2 v-for="(value, key) in repo" :key="key">{{ key }}: {{ value }}</h2> -->
    <h1 class="text-lg font-semibold mb-4">The table below present a few other information about the repository.</h1>
        <div>
          <h1 v-if="!repo" class="animate-spin">Loading...</h1>
        </div>
        <div v-if="repo">
          <table class="table-auto">
            <thead>
              <tr>
                <th>Key</th>
                <th class="border-r-0">Value</th>
              </tr>
            </thead>
            <tbody>

              <button v-if="!repo" type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
              </button>
            
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
              <th>Creation date</th>
              <td>{{dateConverter(repo.created_at)}}</td>
            </tr>
            <tr>
              <th>Updation date</th>
              <td>{{dateConverter(repo.updated_at)}}</td>
            </tr>
            <tr>
              <th>Push date</th>
              <td>{{dateConverter(repo.pushed_at)}}</td>
            </tr>
            <tr>
              <th>Has discussions</th>
              <td>{{repo.has_discussions}}</td>
            </tr>
          </tbody>
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
  // const creationDate = ref(null);
  
  const fetchRepo = async () => {
    const id = route.params.id;
    const response = await fetch(`https://api.github.com/users/rahmlad-aramide/repos`);
    const data = await response.json();
    const filteredData = data.filter(item => {
      return item.id == id;
    });
    repo.value = filteredData[0];
  };
  const dateConverter = (date) => {
    const newDate = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return newDate.toLocaleDateString("en-US", options);
  }
  onMounted(() => {
    fetchRepo();
  });
  
  </script>

  <style scoped>
  table, th, td {
    border-bottom: 1px solid blue;
  }
  th:not(:nth-child(2)) {
    border-right: 1px solid blue;
  }

</style>
  