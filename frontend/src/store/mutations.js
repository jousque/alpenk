const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('auth', token);
        state.isUserDataLoaded = true;
    },
    clearAuth(state) {
        state.token = null;
        state.isUserDataLoaded = false;
        localStorage.removeItem('auth');
      },
};

export default mutations;
