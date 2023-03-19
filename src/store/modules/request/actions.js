export default {
   async addRequest(context,payload){
        const reqData={
            userEmail:payload.userEmail,
            message:payload.message,
        }
        const response=await fetch(`https://vuecoach-a80bd-default-rtdb.firebaseio.com/request/${payload.coachId}.json`,{
            method:'POST',
            body:JSON.stringify(reqData),
        })
        const responseData=await response.json();
        console.log(responseData);
        if(!response.ok){
            const error=new Error(responseData.message || 'something went wrong');
            throw error;
        }
        reqData.id=responseData.name;
        reqData.coachId=payload.coachId;

        context.commit('addRequest',reqData);
    },
   async fetchRequest(context){
    const userId=context.rootGetters.userId;
    const response= await fetch(`https://vuecoach-a80bd-default-rtdb.firebaseio.com/request/${userId}.json`);
    const responseData = await response.json();
    if(!response.ok){
        const error=new Error(responseData.message || 'failed to fetch');
        throw error;
    }
    const requests=[];
    for(const key in responseData){
        const req={
        id:key,
        coachId:userId,
        userEmail:responseData[key].userEmail,
        message:responseData[key].message,
        }
        requests.push(req);
    }
    context.commit('setRequest',requests);
   }
        
}