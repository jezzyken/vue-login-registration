<template>
    <div class="hello">
      <!-- 
      <div id="blog-post" v-for="user in users" :key="user.id">
         <h3>{{user.id}}. {{user.email}}</h3>
         <div id="post-body"><span>{{user.password}}</span></div>
         
      </div> -->

      
    <div class="container">
        <div class="table-container">
          <table class="table is-fullwidth">
            <!-- Your table content -->
            <thead >
                <tr>
                  <th>ID</th> 
                  <th>Email</th> 
                  <th>Password</th> 
                  <th>First Name</th> 
                  <th>Last name</th> 
                  
                  <th>Action</th> 
                </tr>
            </thead>
            <tbody id="blog-post" v-for="user in users" :key="user.id">
                <tr>
                  <th>{{user.id}}</th>
                  <th>{{user.email}}</th>
                  <th>{{user.password}}</th>
                  <th>{{user.first_name}}</th>
                  <th>{{user.last_name}}</th>
                  <th>
                    <div class="buttons">
                       <router-link :to="'/update/' + user.id">
                          <button class="button is-primary" v-on:click="editUser(user.id)">Edit</button>
                       </router-link>
                      <button class="button is-danger" v-on:click="deleteUser">Delete</button>
                    </div>
                  </th>
                </tr>
         
            </tbody>
          </table>
        </div>
    </div>

    </div>
</template>

<script>
import axios from 'axios'
// import qs from 'qs'
// import Swal from 'sweetalert2'
export default {
  name: 'Blogs',
  data(){
    return{
        users: []
    }
  },
  methods:{
    editUser(id){
    //  Swal.fire({
    //     title: 'Updated User',
    //     text: "Do you want to update this User?",
    //     icon: 'question',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes!'
    //   }).then((result) => {
    //     if (result.value) {
    //         window.open("https://google.com","_self"); 
    //     }
    //   })


      // let url = 'http://192.168.254.200:81/api/users/' + id;


        // let data = new FormData();
        // data.append('email', "newupdated.email");
        // data.append('password', "1234");
        // data.append('first_name', "bennnew");
        // data.append('last_name', "overrr");
        
    //       axios.put(url, data).then(response => {

    //       this.users = response.data;
    //       console.log(response);

    // });

        // let options = {
        //     method: 'put',
        //     headers:{
        //         'content-type': 'application/x-www-form-urlencoded'
        //     },
        //     data,
        //     url: url
        // };

        // const response = await axios(options);
        // console.log(response);


      // axios({
      //   method: 'put',
      //   url: url,
      //   data: qs.stringify({
      //     email: 'value1',
      //     password: 'value2',
      //     first_name: 'value2',
      //     last_name: 'value2'
      //   }),
      //   headers: {
      //     'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      //   }
      // }).then(response =>{
      //   console.log(response);
      // })


      const url = 'http://192.168.254.200:81/api/users/' + id;

      axios.get(url).then(response => {
            console.log(response);
            // this.users = response.data;
      }).catch(error =>{
          console.log(error);
      });
    



    },

    deleteUser(){


      //  let url = 'http://192.168.254.200:81/api/users/' + id;

          // axios.delete('http://2b841af5.ngrok.io/api/users/23').then(response => {
          //           console.log(response);
          //     }).catch(error =>{
          //         console.log(error);
          //     });

//       Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//       }).then((result) => {
//         if (result.value) {

//           let url = 'http://192.168.254.200:81/api/users/' + id;
// -
//           axios.delete(url).then(response => {
//                     console.log(response);
//               }).catch(error =>{
//                   console.log(error);
//               });

//           Swal.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//           )
//         }
//       })


        let url = 'http://192.168.254.200:81/api/users/20';

          // axios({
          //   method: 'delete',
          //   url: url,
           
          // }).then(response =>{
          //   console.log(response);
          // })

          
  axios.delete(url).then(response => {
                      console.log(response);
                }).catch(error =>{
                    console.log(error);
                });




    },

    // editUser(){

    //   // let url = 'http://192.168.254.200:81/api/users/15';

    //   //   let da    },ta = new FormData();
    //   //   data.append('email', this.email);

    //   // axios.put(url).then(response => {
    //   //               console.log(response);
    //   //         }).catch(error =>{
    //   //             console.log(error);
    //   //         });


    // }

    
    




  },

  created(){

     const url = 'http://192.168.254.200:81/api/users/';

    //  const url = 'http://kenchen.x10.bz/displayUser.php/?id=12';

      axios.get(url).then(response => {
            console.log(response);
            this.users = response.data;
      }).catch(error =>{
          console.log(error);
      });
    
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
