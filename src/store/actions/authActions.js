// /src/store/actions/authActions.js

import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: err.response.data.message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
