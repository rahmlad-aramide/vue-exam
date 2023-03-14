<template>
    <div>
        <div class="h-32 bg-lightTop dark:bg-darkTop border-b border-b-dark/20 dark:border-b-white/20"></div>
        <div class="-mt-24 ml-8 mb-8">
            <div class="font-bold text-2xl mb-2">
                My profile statistical figures
            </div>
            <div>
                Joined on: {{ convertedDate }}
            </div>
        </div>
        <div class="grid grid-cols-12 gap-10 m-4 pt-4">
            <div class="col-span-3 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="font-black text-7xl">20</span>
                <span class="text-xl">Following</span>
            </div>
            <div class="col-span-3 flex flex-col rounded-lg justify-center items-center aspect-square bg-lightCard dark:bg-darkCard shadow-lg">
                <span class="font-black text-7xl">50</span>
                <span class="text-xl">Followers</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stats",
    data() {
        return {
            title: "Hi there, welcome to my Github Collection",
            user: {},
            convertedDate: "",
        }
    },
    mounted(){
        fetch('https://api.github.com/users/rahmlad-aramide')
        .then(response => response.json())
        .then(data => {
            this.user = data;
            const date = new Date(data.created_at);
            const options = { year: "numeric", month: "long", day: "numeric" };
            this.convertedDate = date.toLocaleDateString("en-US", options);
        })
    }
}

</script>