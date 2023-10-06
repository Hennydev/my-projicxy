import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface LoginState {
 login: any

}

// Define the initial state using that type
const initialState:LoginState = {
 login: {}
}

export const LoginSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    AddUser: (state, {payload:{login}}:PayloadAction<{login:any}>) => {
      const User = {
        Name:login.Name,
        Email:login.Email,
        PassWord: login.PassWord
        
      }
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { AddUser } = LoginSlice.actions



export default LoginSlice.reducer