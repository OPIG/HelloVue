<template>
    <div class="user">
        <div v-for="(user, idx) in userData">
            <h1>{{user.name}}</h1>
            <p>{{user.age}}</p>
            <p>{{user.email}}</p>
        </div>
    </div>
</template>

<script>
     export default{
         data(){
             return {
                 userData:[]
             }
         },
         created(){
             this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
                this.userData=data.body;
                console.log(this.userData);
            })
         }
     }
</script>
<style>

</style>