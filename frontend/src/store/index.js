import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import { createStore } from 'vuex'

const store = createStore({
  state,
  mutations,
  actions,
  getters,
})

export default store
