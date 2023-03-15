export default {
    registerCoach(state,payload){
        return state.coaches.unshift(payload)
    } 
}