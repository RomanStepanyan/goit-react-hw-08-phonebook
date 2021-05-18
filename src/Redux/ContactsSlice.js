// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoading: false,
//   items: [],
//   error: '',
// };

// const { actions, reducer } = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     getContactsRequest: state => {
//       state.isLoading = true;
//     },

//     getContactsSuccess: (state, { payload }) => {
//       //   state.name = payload.user.name;
//       //   state.email = payload.user.email;
//       state.token = payload.token;
//       state.isLoggedOn = true;
//     },
//     onSignUpFailure: (state, { payload }) => {
//       state.error = payload.message;
//       state.isLoggedOn = false;
//       state.isLoading = false;
//     },

//     onLoginRequest: state => {
//       state.isLoading = true;
//     },

//     onLoginSuccess: (state, { payload }) => {
//       state.name = payload.user.name;
//       state.email = payload.user.email;
//       state.token = payload.token;
//       state.isLoggedOn = true;
//       state.isLoading = false;
//     },

//     onLoginFailure: (state, { payload }) => {
//       state.error = payload.message;
//       state.isLoggedOn = false;
//       state.isLoading = false;
//     },

//     onLogoutRequest: state => {
//       state.isLoading = true;
//     },

//     onLogoutSuccess: (state, { payload }) => {
//       state.name = '';
//       state.email = '';
//       state.token = '';
//       state.isLoading = false;
//       state.isLoggedOn = false;
//     },

//     onLogoutFailure: (state, { payload }) => {
//       state.error = payload.message;
//       state.isLoading = false;
//     },

//     onGetUser: (state, { payload }) => {
//       state.name = payload.user.name;
//       state.email = payload.user.email;
//       state.isLoggedOn = true;
//       state.isLoading = false;
//     },
//   },
// });

// export const {
//   onSignUpRequest,
//   onSignUpSuccess,
//   onSignUpFailure,
//   onLogout,
//   onGetUser,
//   onLoginRequest,
//   onLoginSuccess,
//   onLoginFailure,
//   onLogoutRequest,
//   onLogoutSuccess,
//   onLogoutFailure,
// } = actions;
// console.log(actions);
// export default reducer;
