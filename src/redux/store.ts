import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from "./LoginSlice"
import SignInReducer from "./SignInSlice"
import ContactReducer from "./ContactSlice"
export const store = configureStore({
  reducer: {
   Login: LoginReducer,
   SignIn: SignInReducer,
   Contact: ContactReducer
  },
})

