<template>
<div class="container is-primary ">
    <div class="columns">
        <div class="column">    
            <div class="column is-half is-offset-one-quarter">
            <section class="hero is-fullheight">
                <div class="hero-body">
                <div class="container has-text-centered" >
                    <h1 class="title">
                        <strong class="has-text-primary">Sign in to Account</strong>
                    </h1>
                    
                    <h2 class="subtitle">
                        <strong class="has-text-primary">-------</strong>
                    </h2>
                        <h2 class="subtitle is-6">
                            <span>Login to your Account</span>
                        </h2>  
                    <div class="field">
                        <div class="control">
                            <input class="input is-primary" type="text" placeholder="Email">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input is-primary" type="password" placeholder="Password">
                        </div>
                    </div>
                    
                    <button class="button is-primary is-rounded" > Sign in</button>      

                    <section class="section">
                        <h2 class="subtitle is-6">
                            <span>Privacy Policy ⚫ Terms & Conditions</span>
                        </h2>   
                    </section>
                </div>
                </div>
            </section>
            </div>
        </div>
        <div class="column is-two-fifths ">
            <section class="hero is-primary is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered" >
                        <h1 class="title">
                            <strong class="has-text-white">Hello, Friend!</strong>
                        </h1>
                        <h2 class="subtitle">
                            <strong class="has-text-white">-------</strong>
                        </h2>
                        <h2 class="subtitle">
                           <strong class="has-text-white">Fill up personal information and start journey with us. </strong>
                        </h2>
                        <router-link to="/registration">
                        <button class="button is-primary is-rounded is-inverted is-outlined">Sign Up</button>
                        </router-link>
                    </div>
                </div>
            </section>
        </div>
   </div>
</div>


</template>

<script>
export default {
    
}
</script>
<style scoped>

</style>