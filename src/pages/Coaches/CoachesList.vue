<template>
  <section>Filter</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoaches"> 
      <coach-items
        v-for="coach in filteredCoach"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      ></coach-items>
    </ul>
    <h2 v-else>No Coaches Found</h2>
  </base-card>
  </section>
</template>
<script>
import CoachItems from '../../components/Coaches/CoachItems.vue';
import BaseCard from '../../components/UI/BaseCard.vue'
export default {
  components:{
    CoachItems,
    BaseCard,
  },
  computed: {
    filteredCoach() {
      return this.$store.getters["coach/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coach/hasCoaches"];
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>