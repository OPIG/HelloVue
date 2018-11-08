<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default{
        name:"",
        data(){
            return {
                title:"This is a vue demo"
            }
        }
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 42px;
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