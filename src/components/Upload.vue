<template>

    <!-- <div class="holder">
        <input type="file" v-on:click="getImage">
        <input type="submit" v-on:click="onUpload" value="submit">
    </div>

    <div>
        <button v-on:click="getImage()"></button>
    </div>
     --> 


    <div id="app">
        <input type="file" @change="onFileChange" />
        <div id="preview">
            <img v-if="selectedFile" :src="selectedFile" width="200px" height="200px"/>
        </div>

    <div>
        <button v-on:click="onUpload">Upload</button>
    </div>
        

    </div>


</template>

<script>

import axios from 'axios'

export default {

    data(){
        return{
            selectedFile: null,
            newFile: null
        }
    },
    methods:{


        onFileChange(e) {

            const file = e.target.files[0];
            this.selectedFile = URL.createObjectURL(file);
            console.log(this.selectedFile);

            this.newFile = e.target.files[0];

        },
        onUpload(){

            const url = 'http://192.168.254.200:81/api/users/';

            const fd = new FormData();

            fd.append('image', this.newFile);

            axios.post(url, fd, {
                headers:{
                    'Content-Type' : 'multipart/form-data'
            }}).then(response=>{
                console.log(response)
            }).catch(error =>{
                console.log(error)
            })

        }
    }



    
}
</script>

