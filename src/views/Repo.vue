  <template>
    <div class="h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_2rem)] bg-lightCard p-6 rounded-lg overflow-y-auto">
    <!-- <h2 v-for="(value, key) in repo" :key="key">{{ key }}: {{ value }}</h2> -->
    <h1 class="text-lg font-semibold mb-4 text-center">The table below present a few other information about the repository.</h1>
    <div v-if="!repo" class="flex justify-center my-10 h-10">
      <div class="w-fit relative">
        <div class="absolute -top-1.5 -right-1.5">
          <span class="relative flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
          </span>
        </div>
        <div class="border border-blue-500 rounded p-1 px-4 w-fit">
          Loading table...
        </div>
      </div>
    </div>
        <div v-if="repo" class="flex justify-center">
          <div class="flex justify-start md:justify-center overflow-y-auto w-full">
          <table class="table-auto">
            <thead>
              <tr>
                <th>Key</th>
                <th class="border-r-0">Value</th>
              </tr>
            </thead>
            <tbody>
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
              <td>{{repo?.license?.name || "None"}}</td>
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
    setTimeout(()=>{
      repo.value = filteredData[0];
    }, 1000)
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
    padding: 2px 6px;
  }
  td {
    padding-inline: 1.5rem;
  }
  th:not(:nth-child(2)) {
    border-right: 1px solid blue;
  }

</style>
  