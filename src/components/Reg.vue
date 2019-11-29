<template>
<div class="container">
    <div class="columns">
        <div class="column is-two-fifths">
            <section class="section main-has-top ">
                <div class="container">
                    <h1 class="title has-text-primary is-4">Create a Free Account</h1>
                    <h2 class="subtitle is-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nulla illum
                    </h2>                   
                </div>
            </section>

            <section class="section reg-has-margin-top ">
                <div class="container ">
                    <div class="field">
                    <label class="label">First Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="First Name" v-model="first_name">
                        </div>
                    </div>
                     <div class="field">
                    <label class="label">Last Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Last Name" v-model="last_name">
                        </div>
                    </div>
                     <div class="field">
                    <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Email" v-model="email">
                        </div>
                    </div>
                    <div class="field">
                    <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Password" v-model="password">
                        </div>
                    </div>   
          

                    <div class="container">
                        <div class="buttons">
                            <button class="button is-primary is-fullwidth" v-on:click="register">Sign Up </button>
                        </div> 
                    </div> 
                </div>
            </section>

            <section class="section tos-has-margin-top">
                 <div class="container level-item has-text-centered">
                    <h2 class="subtitle is-6">
                        By signing up you agree to our <strong class="has-text-primary is-4">Terms of Service</strong> and <strong class="has-text-primary is-4">Privacy Policy</strong>
                    </h2>                     
                </div> 
            </section>
            <section class="section ac-has-margin">
                <div class="container level-item has-text-centered">
                    <h2 class="subtitle is-6">
                        Already hava account? <router-link to="/signin"><strong class="has-text-primary is-4">Login</strong></router-link>
                    </h2>   
                </div>
            </section>
        </div>
        
        <div class="column">
            <section class="section">
                <div class="container is-square">
                <figure class="responsive">
                    <img src="../assets/image.png">
                </figure>   
                </div>
            </section>
        </div>
   </div>
</div>


</template>


<script>

import axios from 'axios'

export default {

    data(){
    return{
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }
  },
  methods:{

      register(){

       const url = 'http://192.168.254.200:81/api/users/';

        let data = new FormData();
        data.append('email', this.email);
        data.append('password', this.password);
        data.append('first_name', this.first_name);
        data.append('last_name', this.last_name);

          axios.post(url, data).then(response => {
     
          console.log(response);

            }).catch(error =>{
                console.log(error.response);

            });
      }
    
  }

    
}
</script>
<style scoped>
.tos-has-margin-top{
    margin-top: -70px;
}
.reg-has-margin-top{
    margin-top: -60px;
}

.main-has-top{
     margin-top: 50px;
}

.ac-has-margin{
    margin-top: -50px;
}



</style>