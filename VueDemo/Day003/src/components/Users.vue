<template>
    <div class="user">
        <ul>
        <li v-for="(user, idx) in userData">
            <h1>{{user.name}}</h1>
            <p>{{user.age}}</p>
            <p>{{user.email}}</p>
        </li>
        </ul>
    </div>
</template>

<script>
     export default{
         data(){
             return {
                 userData:[{name:"Atom"}]
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
<style scoped>
    ul{
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-wrap: wrap;
    }
    ul li{
        list-style: none;
        flex-grow: 1;
        flex-basis:200px;
        margin: 10px;
        border: 1px solid #222;
        color: #444;
    }
</style>