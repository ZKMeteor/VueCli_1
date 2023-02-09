<template>
<div class="item">
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="changecheck(todo.id)"/>
<!--             <input type="checkbox" :v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn" @click="del(todo.id)">刪除</button>
    </li>
</div>
</template>

<script>


export default {
    name:'Myitem',
    props:['todo','checktodo','deltodo'],
    methods:{
        changecheck(id){
            this.checktodo(id)
        },
        del(id){
            if(confirm('確定刪除嗎?')){
                this.deltodo(id)
            }
        }
    }
}
</script>

<style scoped>

.item{

    width: 100%;

}

span{

line-height: normal;
}
.btn{
    display:none;
    font-size: 20px;
    text-align: center;
}

li{
    letter-spacing:1px;
}

li:hover{
    background:#996B1F;
}

li:hover button{
    display:inline-block ;
    
}
</style>>