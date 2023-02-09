<template>
<div class="item">
    <li>
        <label>
            <input type="checkbox" 
            :checked="todo.done" 
            @change="changecheck(todo.id)"
            />

<!--             <input type="checkbox" :v-model="todo.done"/> -->
            <span v-show="!todo.isedit">{{todo.title}}</span>
            <input type="text" 
            v-model="todo.title" 
            v-show="todo.isedit" 
            @blur="blur(todo,$event)"
            ref="inputtitle" 
            />

        </label>
        <button class="btn" @click="del(todo.id)">刪除</button>        
        <button class="btn data" @click="updatetodo(todo)" v-show="!todo.isedit" >編輯</button>

    </li>
</div>
</template>

<script>


export default {
    name:'Myitem',
    props:['todo'],
    methods:{
        changecheck(id){
/*             this.checktodo(id) */
            this.$bus.$emit('checktodo',id)
        },
        del(id){
            if(confirm('確定刪除嗎?')){
/*                 this.deltodo(id) */
                this.$bus.$emit('deltodo',id)
            }
        },
        updatetodo(todo){
            if(todo.hasOwnProperty('isedit')){
                todo.isedit = true
            }else{
                //todo身上沒有isedit
                this.$set(todo,'isedit',true)                
            }
            this.$nextTick(function(){
                this.$refs.inputtitle.focus()
            })
/*             setTimeout(() => {
                this.$refs.inputtitle.focus() 
            }, ); */
        },
        //失去焦點
        blur(todo,e){
            todo.isedit = false
            if(!e.target.value.trim()) return alert('請輸入內容')
            this.$bus.$emit('updatetodo',todo.id,e.target.value)
        }

    }
}
</script>

<style scoped>

.item{
    display: flex;
    width: 100%;

}

span{

line-height: normal;
}

.btn{
    float: right;
    margin-left: 5px;
    font-size: 20px;
    color: red;
    background: aqua;
    border: solid 1px red;
    border-radius: 10px;
}
.btn.data{
    display:none;

}

li{
    width: 100%;
    letter-spacing:1px;
}

li:hover{
    background:#996B1F;
}

li:hover .btn{
    display:block;
}
</style>>