const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('auth', token);
    },
    setUserData(state, userData) {
        state.userData = userData;
        state.isUserDataLoaded = true;
    },
    clearAuth(state) {
        state.token = null;
        state.userData = null;
        state.isUserDataLoaded = false;
        localStorage.removeItem('auth');
      },
};

export default mutations;
