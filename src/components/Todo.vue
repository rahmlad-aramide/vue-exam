<template>
    <div class="body">
        <h1>{{title}}</h1>
        <div class="input-div">
            <input type="text" v-model="item" />
            <Button title="Add todo" @click="add" :disabled="!item" />
        </div> 
        <ul> 
            <li v-for="todo in todos" :key="todo.id">
                <span :class="{'has-line-through' : todo.isCompleted}">{{todo.item}}</span>
                <Button title="Delete" @click="deleteTodo(todo.id)"/>
                <!-- <Button @click="complete(todo)" > {{todo.isCompleted ? 'Undo' : 'Complete'}} </Button> -->
                <button @click="complete(todo)">{{todo.isCompleted ? 'Undo' : 'Complete'}}</button>
            </li>
        </ul>
        <Datafetching />
    </div>
</template>

<script>
import Button from './Button.vue';
import Datafetching from './Datafetching.vue';
export default {
    name: "Todo",
    components: { Button, Datafetching },
    data(){
        return {
            title: "Todo App",
            todos: [{item: "Todo template", id: 1, isCompleted: false}],
            item: ""
        }
    },
    methods: {
        add(){
            this.todos.push({item: this.item, id:this.todos.length+1, isCompleted: false}),
            console.log(this.todos)
            this.item = "" 
        },
        deleteTodo(id){
            console.log(id)
            this.todos = this.todos.filter(todo=>todo.id != id)
        },
        complete(todo){
            todo.isCompleted = !todo.isCompleted
            // this.btnTitle = todo.isCompleted? "Undo" : "Complete"
            console.log(todo)
            console.log(this.btnTitle);
        }
    }, 
    watch: {
        todos: {
            handler(){
                localStorage.setItem('todos', JSON.stringify(this.todos));
            },
            deep: true
        }
    },
    mounted() {
        const localStorageTodos = localStorage.getItem('todos')
        if(localStorageTodos){
            this.todos = JSON.parse(localStorageTodos);
        }
    }
}
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;
}
.has-line-through {
    text-decoration: line-through;
}
</style>