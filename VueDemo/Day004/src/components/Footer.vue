<template>
    <footer>
        <p>{{copyRight}}</p>
    </footer>
</template>

<script>
    export default{
        name:"",
        data(){
            return{
                copyRight:"@CopyRight 2018 by Atom"
            }
        }
    }
</script>

<style scoped>
footer{
    padding: 10px 0;
    background-color:#f8f9fa;
}
footer p{
    color: #222;
    margin: 0px;
    padding: 0px;
}
</style>