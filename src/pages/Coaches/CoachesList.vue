<template>
  <section>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
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
import CoachItems from "../../components/Coaches/CoachItems.vue";
import CoachFilter from "@/components/Coaches/CoachFilter.vue";
export default {
  components: {
    CoachItems,
    CoachFilter,
  },
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isCoach(){
      return this.$store.getters['coach/isCoach'];
    },
    filteredCoach() {
      const coaches = this.$store.getters["coach/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilter.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilter.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coach/hasCoaches"];
    },
  },
  created(){
    this.loadCoaches();
  },
  methods: {
    setFilter(updateFilter) {
      this.activeFilter = updateFilter;
    },
    loadCoaches(){
      this.$store.dispatch('coach/loadCoaches');
    }
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