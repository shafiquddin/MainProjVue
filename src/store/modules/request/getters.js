export default {
  request(state,_,_2,rootGetters) {
    const coachId=rootGetters.userId;
    return state.request.filter(coach=>coach.coachId==coachId);
  },
  hasRequest(_,getters) {
    return getters.request && getters.request.length > 0;
  },
};
