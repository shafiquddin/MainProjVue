import { createStore } from "vuex";
import modulesCoach from './modules/coaches/index.js';

const store = createStore({
    modules:{
        coach:modulesCoach,
    }
});

export default store;