<template>
  <div>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/Hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach Out Now</h2>
        <base-button link :to="contactLink" v-if="!contactVisiblity">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</div>
</template>
<script>
export default {
  props: ["id"],
  data(){
    return {
        selectedCoach:null,
    }
  },
  created() {
    this.selectedCoach = this.$store.getters["coach/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
  computed:{
    fullName(){
        return this.selectedCoach.firstName+' '+this.selectedCoach.lastName;
    },
    rate(){
        return this.selectedCoach.hourlyRate;
    },
    contactLink() {
      return this.$route.path+'/contact';
    },
    contactVisiblity(){
      return this.$route.path.includes('/contact');
    },
    areas(){
        return this.selectedCoach.areas;
    },
    description(){
        return this.selectedCoach.description;
    }
  }
};
</script>