<template>
    <header v-on:click="changeTitle">
        <h1>{{title}}</h1>
        <p>{{titleValue}}</p>
    </header>
</template>

<script>
    export default{
        name:"",
        data(){
            return {
                title:"This is a vue demo"
            }
        },
        props:{
            titleValue:{
                type:String,
                required: true
            }
        },
        methods:{
            changeTitle:function(){
                this.$emit("titleChange","Change the title to new value.");
            }
        },
        beforeCreated(){
            alert("组件实例化之前执行的函数");
        },
        created(){
            alert("组件实例化完毕，但页面还未显示");
        },
        beforeMount:function(){
             alert("组件挂载前，页面还未显示，但虚拟Dom已经配置");
        },
        mounted:function(){
             alert("组件挂载后，此方法执行后页面显示");
        },
        beforeUpdate:function(){
             alert("组件更新前，页面仍未更新，但虚拟Dom已经配置好");
        },
        updated:function(){
             alert("组件更新，此方法后页面显示");
        },
        beforeDestroy:function(){
             alert("组件销毁前1"); 
        },
        destroyed:function(){
             alert("组件销毁");
        }
    }
</script>

<style scoped>
    header{
        width: 100%;
        background:#222;
        padding: 9px 0px;
        box-sizing: border-box;
    }
    header h1{
        color:#fff;
        font-size: 16px;
        line-height: 24px;
        margin: 0px auto;
    }
</style>