import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface SignInState {
 SignIn: any

}

// Define the initial state using that type
const initialState:SignInState = {
 SignIn: {}
}

export const SignInSlice = createSlice({
  name: 'SignIn',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    UserDetails: (state, {payload:{SignInName, SignInEmail}}:PayloadAction<{SignInName:any, SignInEmail:any }>) => {
    
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

export const { UserDetails } = SignInSlice.actions



export default SignInSlice.reducer