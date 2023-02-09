<template>
    <div  class="list">
        <ul>
            <transition-group 
            name="animate__animated animate__bounce" 
            enter-active-class="animate__backInRight"
            leave-active-class="animate__backOutDown"
            appear>
                <Myitem 
                v-for="todobj in todos" 
                :key="todobj.id" 
                :todo="todobj"

                />
            </transition-group>
            </ul>
        </div>
</template>

<script>
    import Myitem from './Myitem.vue'
    import 'animate.css'
    export default {
        name:'Mylist',
        components:{Myitem},
        props:['todos',]

    }

</script>

<style scoped>

.list{
    width: 100%;
}
</style>