<template>

<div class="holder">

    <div>
        <label>Enter your id </label>
        <input type="text" v-model="user.id"/>
    </div>
    <div>
        <label>Enter your Name </label>
        <input type="text" v-model="user.name" v-on:keyup="page2"/>
    </div>

    <div>
        <!-- <router-link :to="'/page2/' + user.id + '/' + user.name"> -->
        <router-link :to="'/page2/' + link">
            <button v-on:click="page2">Click me Please</button>
        </router-link>
    </div>
</div>

</template>

<script>

export default{
    
    data(){
        return{
            user: {id: '', name: ''},
            link: ''
        }
    },
    methods:{
        page2(){
            this.link = this.user.id + '/' + this.user.name;
        }
    }
}

</script>