// /src/store/reducers/authReducer.js

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false,
        };
      case 'LOGIN_FAIL':
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  