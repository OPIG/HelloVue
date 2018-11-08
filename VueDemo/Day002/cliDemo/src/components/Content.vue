<template>
    <div class="content-box">
        <ul class="user">
            <li v-for="(user,index) in users"
                v-on:click="user.show=!user.show"
                :key="user.name+index">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:"app-cont",
    data(){
        return {
            users:[
                {name:"Atom",position:"developer",show: false},
                {name:"Zoe",position:"design",show: false},
                {name:"Alice",position:"Don't know",show: false},
                {name:"Zoe",position:"design",show: false},
                {name:"Atom",position:"developer",show: false},
                {name:"Alice",position:"Don't know",show: false},
                {name:"Zoe",position:"design",show: false},
                {name:"Atom",position:"developer",show: false},
                {name:"Alice",position:"Don't know",show: false},
                {name:"Alice",position:"Don't know",show: false},
                {name:"Atom",position:"developer",show: false},
                {name:"Atom",position:"developer",show: false},
                {name:"Atom",position:"developer",show: false},
                {name:"Atom",position:"developer",show: false},
                {name:"Atom",position:"developer",show: false},
                {name:"Zoe",position:"design",show: false}
            ]
        }
    }
}
</script>

<style scoped>
.user{
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
}
ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;

}
ul li{
    flex-grow: 1;
    flex-basis: 200px;
    margin: 10px;
    text-decoration: none;
    list-style: none;
    border: 1px solid #ccc;
    box-sizing: border-box;
    cursor: pointer;

}

</style>
