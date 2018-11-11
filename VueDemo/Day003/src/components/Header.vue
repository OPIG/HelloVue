<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default{
            data(){
                return{
                    title:"this is title"
                }
            }
    }
</script>

<style scoped>
    header{
        padding: 10px 0px;
        background-color: #222;
    }
    header h1{
        color: #fff;
        text-align: center;
    }
</style>