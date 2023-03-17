import { createStore } from "vuex";
import modulesCoach from './modules/coaches/index.js';
import modulesRequest from './modules/request/index.js';

const store = createStore({
    modules:{
        coach:modulesCoach,
        request:modulesRequest
    },
    state(){
        return {
            userId:'c3'
        }
    },
    getters:{
        userId(state){
            return state.userId;
        }
    }
});

export default store;