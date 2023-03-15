<template>
    <base-card>
        <h2>Register as a Coach</h2>
        <coach-form @save-data="saveData"></coach-form>
    </base-card>
</template>
<script>
import CoachForm  from '../../components/Coaches/CoachForm.vue'
export default {
    components:{
        CoachForm,
    },
    methods:{
        saveData(data){
            this.$store.dispatch('coach/registerCoach',data);
            this.$router.replace('/coaches');
        }
    }
}
</script>