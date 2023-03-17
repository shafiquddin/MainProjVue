export default {
    addRequest(context,payload){
        const reqData={
            id:new Date().toISOString(),
            coachId:payload.coachId,
            userEmail:payload.userEmail,
            message:payload.message,
        }
        context.commit('addRequest',reqData);
    }
}