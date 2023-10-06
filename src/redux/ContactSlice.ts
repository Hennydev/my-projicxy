import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface ContactState {
 Contact: any

}

// Define the initial state using that type
const initialState:ContactState = {
 Contact: {}
}

export const ContactSlice = createSlice({
  name: 'Contact',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    ContactUser: (state, {payload:{Name, Email, Message}}:PayloadAction<{Name:any, Email:any, Message:any}>) => {
      // const User = {
      //   Name:Contact.Name,
      //   Email:Contact.Email,
      //   Message: Contact.Message
        
      // }
    },
    // UserDetails: (state, {payload:{SignInName, SignInEmail}}:PayloadAction<{SignInName:any, SignInEmail:any }>) => {
    
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { ContactUser } = ContactSlice.actions



export default ContactSlice.reducer