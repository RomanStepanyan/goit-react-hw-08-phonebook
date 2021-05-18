import axios from 'axios';
import * as actions from './Actions';
import {
  onSignUpRequest,
  onSignUpSuccess,
  onSignUpFailure,
  onLoginSuccess,
  onGetUser,
  onLoginRequest,
  onLoginFailure,
  onLogoutRequest,
  onLogoutSuccess,
  onLogoutFailure,
} from './UserSlice';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getContacts = () => (dispatch, getState) => {
  dispatch(actions.getContactsRequest());
  axios
    .get('https://connections-api.herokuapp.com/contacts')
    .then(({ data }) => {
      token.set(data.token);
      console.log(data);

      dispatch(actions.getContactsSuccess(data));
    })

    .catch(error => dispatch(actions.getContactsFailure(error.message)));
};

export const addContacts = payload => (dispatch, getState) => {
  dispatch(actions.addContactsRequest());
  axios
    .post('https://connections-api.herokuapp.com/contacts', payload)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(actions.addContactsSuccess(data));
    })
    .catch(error => dispatch(actions.addContactsFailure(error.message)));
};

export const deleteContacts = id => (dispatch, getState) => {
  dispatch(actions.deleteContactsRequest());
  axios
    .delete(`https://connections-api.herokuapp.com/contacts/${id}`)
    .then(() => {
      // token.set(data.token);
      dispatch(actions.deleteContactsSuccess(id));
    })
    .catch(error => dispatch(actions.deleteContactsFailure(error.message)));
};

export const signUp = payload => (dispatch, getState) => {
  dispatch(onSignUpRequest());
  axios
    .post('https://connections-api.herokuapp.com/users/signup', payload)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(onSignUpSuccess(data));
    })
    .catch(error => {
      console.log(error.message);
      dispatch(onSignUpFailure(error.message));
    });
};

export const login = payload => (dispatch, getState) => {
  dispatch(onLoginRequest());
  axios
    .post('https://connections-api.herokuapp.com/users/login', payload)
    .then(({ data }) => {
      dispatch(onLoginSuccess(data));
      token.set(data.token);
    })
    .catch(error => {
      console.log(error.message);
      dispatch(onLoginFailure(error.message));
    });
};

export const logout = payload => (dispatch, getState) => {
  dispatch(onLogoutRequest());
  axios
    .post('https://connections-api.herokuapp.com/users/logout', payload)
    .then(() => {
      // token.set(data.token);
      dispatch(onLogoutSuccess());
      token.unset();
    })
    .catch(error => dispatch(onLogoutFailure(error.message)));
};
