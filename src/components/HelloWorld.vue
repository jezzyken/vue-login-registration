<template>
    <div class="hello">
      <!-- 
      <div id="blog-post" v-for="user in users" :key="user.id">
         <h3>{{user.id}}. {{user.email}}</h3>
         <div id="post-body"><span>{{user.password}}</span></div>
         
      </div> -->



      <div class="field">
        <div class="column is-one-fifth">
           <label class="label">User Registration</label>
        </div>
      </div>

      <div class="field">
        <div class="column is-one-fifth">
           <label class="label">Register</label>
          <input class="input is-primary" type="text" placeholder="Email" v-model="reg_email">
        </div>
      </div>
      <div class="field">
        <div class="column is-one-fifth">
          <input class="input is-primary" type="text" placeholder="Password" v-model="reg_password"> 
        </div>
      </div>

      <div class="field">
        <div class="column is-one-fifth">
          <button class="button is-link" v-on:click="register">Register</button>
        </div>
      </div>




      <div class="field">
        <div class="column is-one-fifth">
           <label class="label">User Login</label>
        </div>
      </div>

      <div class="field">
        <div class="column is-one-fifth">
           <label class="label">Register</label>
          <input class="input is-primary" type="text" placeholder="Email" v-model="email">
        </div>
      </div>
      <div class="field">
        <div class="column is-one-fifth">
          <input class="input is-primary" type="text" placeholder="Password" v-model="password"> 
        </div>
      </div>

      <div class="field">
        <div class="column is-one-fifth">
          <button class="button is-link" v-on:click="login">Login</button>
        </div>
      </div>

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
        reg_email: "",
        reg_password: "",
        users: []

    }
  },
  methods:{
    login(){

        const url = 'http://kenchen.x10.bz/login.php/';

        let data = new FormData();
        data.append('email', this.email);
        data.append('password', this.password);

          axios.post(url, data).then(response => {

          this.users = response.data;

          console.log(response);

    });
    
    },
    register(){

      const url = 'http://kenchen.x10.bz/addUser.php/';

      var params = new URLSearchParams();
      params.append('email', this.reg_email);
      params.append('password', this.reg_password);
      var request = {
            params: params
          }; 
      
      axios.get(url, request).then(response => {
            console.log(response);
      }).catch(error =>{
          console.log(error);
      });

    }
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
