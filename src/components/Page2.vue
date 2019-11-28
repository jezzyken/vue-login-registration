<template>

<label for="">hello <b> {{name}} </b> your id is <b>{{id}} </b></label>
    
</template>

<script>

export default{

    props: ['id', 'name'],

    data(){
        return{
            
        }
    },
    created(){
        
    }
    
}

</script>