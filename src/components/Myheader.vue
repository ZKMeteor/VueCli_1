<template>

<div class="header">
    <input type="text" placeholder="輸入內容" @keyup.enter="add"/>
</div>

</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'Myheader',
        methods:{
            add(e){
                if(!e.target.value)return
                const todobj = {id:nanoid(),title:e.target.value,done:false}
                this.$emit('addtodo',todobj)
                e.target.value = ''
            }
        }
    }
</script>

<style scoped>

.header{
height: 50px;
width: 100%;
}

input{
margin-left: 25%;
font-size: 25px;
height: 30px;
width: 50%;
text-align: center;
}

</style>