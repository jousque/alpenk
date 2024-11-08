const state = {
    token: localStorage.getItem('auth') || null,
    userData: null,
    isUserDataLoaded: false,
  };
  
  export default state;