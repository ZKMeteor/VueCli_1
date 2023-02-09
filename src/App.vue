<template>
  <div id="app">
    <Myheader :addtodo="addtodo" />
    <Mylist :todos="todos" :checktodo="checktodo" :deltodo="deltodo"/>
    <Myfooter :todos="todos" :checkalltodo="checkalltodo" :delalltodo="delalltodo"/>
  </div>
</template>

<script>

  import Myheader from './components/Myheader.vue'
  import Mylist from './components/Mylist.vue'
  import Myfooter from './components/Myfooter.vue'
  export default {
    name: 'App',
    components: {
      Myheader,
      Mylist,
      Myfooter,
    },
    data(){
      return{
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods:{
      //新增
      addtodo(todobj){
        this.todos.unshift(todobj)
      },
      //勾選
      checktodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id ) todo.done = !todo.done
        })
      },
      //刪除
      deltodo(id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id 
        })
      },
      //全選
      checkalltodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done
        })
      },
      //清除所有
      delalltodo(todo){
        this.todos = this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    }
}
</script>

<style >
body{
  background:#F0E68C;

}

#app{
  padding: 10px ;
  margin: 10px 30px;
  background: #FFFDD0;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items:center;
}
</style>