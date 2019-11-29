<template>


<div class="container">


        <div><input type="text" v-bind:value="users.email" id="email"></div>

        <button class="button is-link" v-on:click="update">Update</button>


</div>

    
</template>

<script>

import axios from 'axios'
// import qs from 'qs'
    
export default{

    props: ['id'],

    data(){
        return{
              users: {
                email: ''

              },
              email: ''

        }
    },
    methods:{
        update(){

            // this.email = document.getElementById('email');

            //  const url = 'http://192.168.254.200:81/api/users/' + this.id;

            // axios({
            //     method: 'put',
            //     url: url,
            //     data: qs.stringify({
            //     email: this.email.value,
            //     password: 'value2',
            //     first_name: 'value2',
            //     last_name: 'value2'
            //     }),
            //     headers: {
            //     'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            //     }
            // }).then(response =>{
            //     console.log(response);
            // })


            alert(this.users.email);



        }
    },
    created(){

        const url = 'http://192.168.254.200:81/api/users/' + this.id;

        axios.get(url).then(response => {
                // console.log(response);
                this.users = response.data;
        }).catch(error =>{
            console.log(error);
        });
        
    }
    
}

</script>