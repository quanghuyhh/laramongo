import { createStore } from 'vuex'
import modules from './modules'
console.log('modules', modules);

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    modules
});

export default store;