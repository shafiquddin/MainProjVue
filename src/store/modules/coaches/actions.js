export default {
    registerCoach(context,data){
        const coachData={
            id:context.rootGetters.userId,
            lastName:data.last,
            firstName:data.first,
            description:data.desc,
            areas:data.areas,
            hourlyRate:data.rate
        }
        context.commit('registerCoach',coachData)
    }
}