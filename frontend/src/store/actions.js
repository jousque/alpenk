import axios from 'axios';
import router from '@/router';

const actions = {
  async authLogin({ commit }, data) {
    try {
        const res = await axios.post('login', data);
        if (res.data.code === 200) {
            commit('setToken', res.data.data.token);
            return res.data;
        }
    } catch (err) {
        throw err;
    }
},
  async userDataAPI({ commit, state }) {
    try {
        const res = await axios.post(state.token + "/getLoggedInUserInfo");
        if (res.data.code == "400") {
            router.push("/login");
        } else {
            commit("setUserData", res.data.data);
        }
    } catch {
        commit('clearAuth');
        router.push('/login');
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
