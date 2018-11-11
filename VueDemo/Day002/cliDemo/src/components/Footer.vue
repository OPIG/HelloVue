<template>
    <footer>
        <h1>{{copyRight}}</h1>
        <p>{{titleValue}}</p>
    </footer>
</template>

<script>
export default {
    name:"",
    props:{
        titleValue:{
            type:String,
            required: true
        }
    },
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