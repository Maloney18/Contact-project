import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contact: 
    {
      image: 'Images/Image.jpg',
      Name: '',
      Email: '',
      Other: '',
      Phone: '',
      color: '',
      id: '',
      clicked: false
    }
}

const contact = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        changeImage: (state, action) => {
            state.contact.image = action.payload
        },
        changeName : (state, action) => {
            state.contact.Name = action.payload
        },
        changeEmail : (state, action) => {
            state.contact.Email = action.payload
        },
        changeOther : (state, action) => {
            state.contact.Other = action.payload
        },
        changePhone : (state, action) => {
            state.contact.Phone = action.payload
        },
        changeColor: (state, action) => {
            state.contact.color = action.payload
        },
        changeId : (state, action) => {
            state.contact.id = action.payload
        },
        clearAll : (state) => {
            state.contact =
            {
                image: 'Images/Image.jpg',
                Name: '',
                Email: '',
                Other: '',
                Phone: '',
                color: '',
                id: '',
                clicked: false
            }
        }
    }
})

export default contact.reducer
export const { changeColor, changeEmail, changeId, changeImage, changeName, changeOther, changePhone, clearAll } = contact.actions

