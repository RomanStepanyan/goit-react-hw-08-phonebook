import axiosInstance from './AxiosInstance';

import * as actions from './Actions';
import {
  onSignUpRequest,
  onSignUpSuccess,
  onSignUpFailure,
  onLoginSuccess,
  onLoginRequest,
  onLoginFailure,
  onLogoutRequest,
  onLogoutSuccess,
  onLogoutFailure,
} from './UserSlice';

export const getContacts = () => (dispatch, getState) => {
  dispatch(actions.getContactsRequest());
  axiosInstance
    .get('/contacts')
    .then(({ data }) => {
      dispatch(actions.getContactsSuccess(data));
    })
    .catch(error => dispatch(actions.getContactsFailure(error.message)));
};

export const addContacts = payload => (dispatch, getState) => {
  dispatch(actions.addContactsRequest());
  axiosInstance
    .post('/contacts', payload)
    .then(({ data }) => {
      dispatch(actions.addContactsSuccess(data));
    })
    .catch(error => dispatch(actions.addContactsFailure(error.message)));
};

export const deleteContacts = id => (dispatch, getState) => {
  dispatch(actions.deleteContactsRequest());
  axiosInstance
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(actions.deleteContactsSuccess(id));
    })
    .catch(error => dispatch(actions.deleteContactsFailure(error.message)));
};

export const signUp = payload => (dispatch, getState) => {
  dispatch(onSignUpRequest());
  axiosInstance
    .post('/users/signup', payload)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      dispatch(onSignUpSuccess(data));
    })
    .catch(error => {
      dispatch(onSignUpFailure(error.message));
    });
};

export const login = payload => (dispatch, getState) => {
  dispatch(onLoginRequest());
  axiosInstance
    .post('/users/login', payload)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      dispatch(onLoginSuccess(data));
    })
    .catch(error => {
      dispatch(onLoginFailure(error.message));
    });
};

export const logout = payload => (dispatch, getState) => {
  dispatch(onLogoutRequest());
  axiosInstance
    .post('/users/logout', payload)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(onLogoutSuccess());
    })
    .catch(error => dispatch(onLogoutFailure(error.message)));
};
