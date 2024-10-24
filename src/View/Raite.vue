<template>


    <PublicMain></PublicMain>
    
</template>



<script>
import PublicMain from '../components/publicacion.vue'
export default {
      name: 'HelloWorld',
      props: {
        msg: String
      },
      components:{
        PublicMain
      }
    }


</script>