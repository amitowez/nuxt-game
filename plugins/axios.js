import axios from 'axios'

export default defineNuxtPlugin(async () => { //const axios = useNuxtApp().$axios;
    return{
        provide:{
            axios: axios
        }
    }
})