export default {
   async registerCoach(context,data){
        const userId=context.rootGetters.userId;
        const coachData={
            lastName:data.last,
            firstName:data.first,
            description:data.desc,
            areas:data.areas,
            hourlyRate:data.rate
        }

      const response=await fetch(`https://vuecoach-a80bd-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
            method:'PUT',
            body:JSON.stringify(coachData),
        });
        const responseData=await response.json();

        if(!response.ok){
            const error=responseData.message || 'failed to Update';
            throw error;
        }

        context.commit('registerCoach',{
            ...coachData,
            id:userId,
        });
    },
    async loadCoaches(context){  
      const response=await fetch('https://vuecoach-a80bd-default-rtdb.firebaseio.com/coaches.json');
      const responseData=await response.json();
      
      if(!response.ok){
        const error=responseData.message || 'failed to fetch';
        throw error;
      }

      const coaches=[];
      for(const key in responseData){
        const coach={
            id:key,
            lastName:responseData[key].lastName,
            firstName:responseData[key].firstName,
            description:responseData[key].description,
            areas:responseData[key].areas,
            hourlyRate:responseData[key].hourlyRate,
        };
        coaches.push(coach);
      }
      context.commit('setCoaches',coaches);
    }
}