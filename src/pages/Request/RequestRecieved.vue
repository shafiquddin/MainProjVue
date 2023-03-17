<template>
    <base-card>
    <header>
        <h2>Request Recieved</h2>
    </header>
    <ul v-if="hasRequest">
        <request-item v-for="req in requestRecieved" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
    </ul>
    <h3 v-else>You Haven't Recieved any request so far!</h3>
   </base-card>
</template>
<script>
import RequestItem from '@/components/Request/RequestItem.vue';
export default {
    computed:{
        requestRecieved(){
            return this.$store.getters['request/request'];
        },
        hasRequest(){
            return this.$store.getters['request/hasRequest'];
        }
    },
    components:{
        RequestItem,
    }
}
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>