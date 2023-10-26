import { createSlice } from "@reduxjs/toolkit";

const initialState={
    account:{
    id:1,
    username: 'Frontmir',
    fullname: 'Emir Tetik',
    avatar: 'https://pbs.twimg.com/profile_images/1711840191399256064/JTjHdd64_normal.jpg'
  },
 
}

 const auth = createSlice({
    name: "auth",
    initialState,
    reducers:{
       _addAccount:(state,action) => {
         state.account = action.payload
       },
    }

})

export const {_addAccount} = auth.actions
export default auth.reducer
