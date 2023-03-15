import { createStore } from "vuex";
import modulesCoach from './modules/coaches/index.js';

const store = createStore({
    modules:{
        coach:modulesCoach,
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