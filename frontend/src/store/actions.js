import axios from 'axios';
import router from '@/router';

const actions = {
  async authLogin({ commit }, data) {
    try {
        const res = await axios.post('users/login', data);
            commit('setToken', res.data.token);
            return res.data;
    } catch (err) {
        throw err;
    }
},
  async authLogout({ commit, state }) {
    try {
        const res = await axios.post(state.token + "/logOut");
        if (res.data.code == "200") {
            commit("clearAuth");
            router.push("/login");
        }
    } catch {
        commit('clearAuth');
        router.push("/login");
    }
}

};

export default actions;
