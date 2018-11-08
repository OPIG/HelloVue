<template>
    <footer>
        <h1>{{copyRight}}</h1>
    </footer>
</template>

<script>
export default {
    name:"",
    data(){
        return {
            copyRight: "@copyright 2018 by Atom"
        }
    }
}
</script>

<style scoped>
    footer{
        width: 100%;
        height: 42px;
        box-sizing: border-box;
        padding: 10px 0px;
        background-color:#222;
    }
    footer h1{
        font-size: 14px;
        line-height: 22px;
        color: #afafaf;
        margin: 0px;
        padding: 0px;
    }
</style>