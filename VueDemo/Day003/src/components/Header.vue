<template>
    <header>
        <router-link to="/hello">Hello</router-link>
        <router-link to="/user">User</router-link>
        <h1>{{title}}</h1>
		<p v-on:click="changeTitle">{{contData}}</p>
    </header>
</template>

<script>
    export default{
            data(){
                return{
                    title:"this is title"
                }
            },
			props:{
				contData:{
					type: String,
					require: true
				}
			},
			methods:{
				changeTitle(){
					this.$emit("titleChange","this the new content")
				}
			}
    }
</script>

<style scoped>
    header{
        padding: 10px 0px;
        background-color: #222;
    }
    header a{
        text-decoration:none;
        color: #fff;
        margin: 0 10px;
        font-size: 16px;
        line-height: 24px;
    }
    header a:hover{
        color: red;
        cursor:pointer;
    }
    header h1{
        color: #fff;
        text-align: center;
    }
    header p{
        color:rgba(255,0,0,.8)
    }
</style>