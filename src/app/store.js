import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import appReducer from "../appSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
