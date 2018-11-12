<template>
    <footer>{{copyRight}}</footer>
</template>

<script>
    export default{
        data(){
            return {
                copyRight:"@copyRight 2018 by Atom"
            }
        }
    }
</script>

<style scoped>
    footer{
        padding: 10px 0;
        background-color: #222;
    }
    footer p{
        text-align: center;
        color: rgba(255,255,255,.8);
    }
</style>