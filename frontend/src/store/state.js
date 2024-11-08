const state = {
    token: localStorage.getItem('auth') || null,
    isUserDataLoaded: false,
  };
  
  export default state;