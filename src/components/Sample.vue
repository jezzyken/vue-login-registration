<template>

<label for="">hello {{name}} your id is {{id}}</label>
    
</template>

<script>

export default{

    props: ['id', 'name'],

    data(){
        return{
            
        }
    },
    method(){
       
    },
    created(){
        alert(this.name);
    }
    
}

</script>