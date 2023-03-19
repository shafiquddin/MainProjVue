export default {
  request(state,_,_2,rootGetters) {
    const coachId=rootGetters.userId;
    return state.request.filter(coach=>coach.coachId===coachId);
  },
  hasRequest(state) {
    return state.request && state.request.length > 0;
  },
};
