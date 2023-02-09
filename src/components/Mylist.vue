<template>
<div  class="list">
    <ul>
        <Myitem 
        v-for="todobj in todos" 
        :key="todobj.id" 
        :todo="todobj"
        :checktodo="checktodo"
        :deltodo="deltodo"
        />
    </ul>
</div>
</template>

<script>
    import Myitem from './Myitem.vue'

    export default {
        name:'Mylist',
        components:{Myitem},
        props:['todos','checktodo','deltodo']

    }

</script>

<style scoped>

.list{
    width: 100%;
}
</style>