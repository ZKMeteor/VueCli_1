<template>
  <div class="footer" v-show="todolen">
    <hr>
    <label>
   
        <input type="checkbox"  :checked="isall" @change="checkall"/> <!-- v-model="isall" -->
    </label>
    <span>
        <span>已完成{{tododone}}</span> / 全部{{todolen}}
    </span>
    <button class="btn" @click="delall">清除已勾選</button>
  </div>

</template>

<script>
export default {
    name:'Myheader',
    props:['todos','checkalltodo','delalltodo'],
    methods:{
      checkall(e){
        this.checkalltodo(e.target.checked)
      },
      delall(){
        this.delalltodo()
      }
    },
    computed:{
      todolen(){
        return this.todos.length
      },
      tododone(){
/*         const x = this.todos.reduce((pre,todo)=>{
          console.log('@',pre,todo.done)
          return pre + (todo.done ? 1 : 0)
        },0) */
        return this.todos.reduce((pre,cur)=> pre + (cur.done ? 1 : 0) ,0)
      },
      isall:{
        get(){        
          return this.todolen === this.tododone && this.todolen > 0
        },
        set(value){
          this.checkalltodo(value)
        }
      }
    }
}
</script>

<style scoped>

hr{
  width: 90%;
  color: rgb(8, 234, 250);

}
.footer{
  height: 80px;
  width: 100%;
  text-align: center;
}

</style>