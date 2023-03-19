<template>
  <div>
    <base-dialog :show="!!error" title="An error Occured!" @close="handleError">
    <p>{{ error }}</p>
</base-dialog>
  <base-card>
    <header>
      <h2>Request Recieved</h2>
    </header>
    <div v-if="isLoading">
        <base-spinner></base-spinner>
    </div>
    <ul v-else-if="hasRequest">
      <request-item
        v-for="req in requestRecieved"
        :key="req.id"
        :email="req.userEmail"
        :message="req.message"
      ></request-item>
    </ul>
    <h3 v-else>You Haven't Recieved any request so far!</h3>
  </base-card>
</div>
</template>
<script>
import RequestItem from "@/components/Request/RequestItem.vue";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.loadRequest();
  },
  methods:{
   async loadRequest(){
        this.isLoading=true;
        try{
        await this.$store.dispatch('request/fetchRequest');
        }catch(error){
            this.error=error.message || 'failed to fetch';
        }
        this.isLoading=false;
    },
    handleError(){
        this.error=null;
    }
  },
  components: {
    RequestItem,
  },
  computed: {
    requestRecieved() {
      return this.$store.getters["request/request"];
    },
    hasRequest() {
      return this.$store.getters["request/hasRequest"];
    },
  },
};
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
