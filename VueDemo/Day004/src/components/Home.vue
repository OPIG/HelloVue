<template>
    <div>
    <h1>Home</h1>
    <button class="btn btn-success" @click="goToMenu">Let's order</button>
    </div>
</template>

<script>
    export default{
        methods:{
            goToMenu(){
                //跳转到上一次浏览的页面
                //this.$router.go(-1);

                //指定跳转的地址, replace 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录
                //this.$router.replace('/menu');

                //指定跳转到路由的名字下
                this.$router.replace({name:'aboutLink'});

               //常用--通过push 进行压栈式跳转，这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
               //this.$router.push('/register');
               //this.$router.push({name:'aboutLink'})
            }
        }
    }
</script>

