export default {
  request(state) {
    return state.request;
  },
  hasRequest(state) {
    return state.request && state.request.length > 0;
  },
};
