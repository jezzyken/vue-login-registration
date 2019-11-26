<template>
    <div class="hello">
      <h3>User Account</h3>
<!-- 
      <div id="blog-post" v-for="user in users" :key="user.id">
         <h3>{{user.id}}. {{user.email}}</h3>
         <div id="post-body"><span>{{user.password}}</span></div>
      </div> -->


      <input type="text" v-model="email">
      <input type="password" v-model="password">
      <button v-on:click="login">Login</button>

      <br>

      <div id="blog-post" v-for="user in users" :key="user.id">
        <h3>Your ID: {{user.id}}</h3>
        <h3>Your Email: {{user.email}}</h3>
        <h3>Your Password: {{user.password}}</h3>
      </div> 

    </div>
</template>

<script>
import axios from 'axios'
export default {
  
  name: 'Blogs',
  data(){
    return{
        email: "",
        password: "",
        users: []

    }
  },
  methods:{
    login(){

      // var params = new URLSearchParams();
      // params.append("email", this.email);
      // params.append("password", this.password);
      // var request = {
      //   params: params
      // };

        const url = 'http://localhost:80/app/server/login.php/';

        let data = new FormData();
        data.append('email', this.email);
        data.append('password', this.password);

          axios.post(url, data).then(response => {

            this.users = response.data;

          
          console.log(response);

          
    });
    
    }
  },
  created(){

    //vue-resource
  //   const url = 'http://localhost/app/server/display.php/';
  //   this.$http.get(url).then(response => {
  //   console.log(response);
  //   this.users = response.data;
  // });

  //axios
  // const url = 'http://localhost/app/server/display.php/';
  //   axios.get(url).then(response => {
  //   console.log(response);
  //   this.users = response.data;
  // });



  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#post-body{
 background-color: gray;
 padding: 10px;
}

#blog-post{
  margin: auto 0;
  text-align: justify;
  margin: 0 auto;
}

</style>
