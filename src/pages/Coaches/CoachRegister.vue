<template>
    <base-card>
        <h2>Register as a Coach</h2>
        <coach-form></coach-form>
    </base-card>
</template>
<script>
import CoachForm  from '../../components/Coaches/CoachForm.vue'
export default {
    components:{
        CoachForm,
    }
}
</script>