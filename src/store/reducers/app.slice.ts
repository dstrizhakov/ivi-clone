// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../store';
//
// export interface IApp {
//   isLogin: boolean; // login dialog status
// }
//
// const initialState: IApp = {
//   isLogin: false,
// };
//
// export const appSlice = createSlice({
//   name: 'app',
//   initialState,
//   reducers: {
//     setIsLogin: (state, action: PayloadAction<boolean>) => {
//       state.isLogin = action.payload;
//     },
//   },
// });
//
// export const selectApp = (state: RootState) => state.appReducer;
// export const { setIsLogin } = appSlice.actions;
// export default appSlice.reducer;
