import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalData: JSON.parse(localStorage.getItem("contacts")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const allData = createSlice({
  name: "allData",
  initialState,
  reducers: {
    addToGeneralData: (state, action) => {
      // adding a newly created contact to general contact list
      state.generalData.push(action.payload);

      // sorting the general contact list after adding a new contact
      state.generalData.sort((a, b) =>
        a.Name.toLowerCase() - b.Name.toLowerCase() ? 1 : -1
      );
    },

    removeFromGeneralData: (state, action) => {
      // delete a selected contact from general contact list
      state.generalData = state.generalData.filter((contact) => contact.id !== action.payload)

      // delete a selected contact from favorite contact list
      state.favorites = state.favorites.filter((contact) => contact.id !== action.payload)
    },

    editContact: (state, action) => {
      // edit a contact in general contact list
      state.generalData = state.generalData.map(
        contact =>  contact.id === action.payload.id ?
        {...action.payload} :
        {...contact}
      )

      // sort general contact list after editing a contact
      state.generalData.sort((a, b) =>
        a.Name.toLowerCase() - b.Name.toLowerCase() ? 1 : -1
      );

      // add changes to a particular contact in favorite list
      state.favorites = state.favorites.map(
        contact =>  contact.id === action.payload.id ?
        {...action.payload} :
        {...contact}
      )

      // sort favorite list after editing a contact
      state.favorites.sort((a, b) =>
        a.Name.toLowerCase() - b.Name.toLowerCase() ? 1 : -1
      );
    },

    addFavorite: (state, action) => {
      // change clicked property of the selected contact
      state.generalData = state.generalData.map(
        (contact) =>
          contact.id === action.payload
          ? { ...contact, clicked: !contact.clicked }
          : { ...contact }
        )
      ;
      
      // add the selected contact to favorite contact list
      state.favorites.push(
        state.generalData.find((cont) => cont.id === action.payload)
      );

      // sort favorite contact list after adding a new contact to favorite
      state.favorites.sort((a, b) =>
        a.Name.toLowerCase() - b.Name.toLowerCase() ? 1 : -1
      );
    },
    removeFavorite: (state, action) => {
      // change clicked property of the selcted contact
      state.generalData = state.generalData.map(
        (contact) =>
          contact.id === action.payload
          ? { ...contact, clicked: !contact.clicked }
          : { ...contact }
        )
      ;

      // remove the selcted contact from the favorite contact list
      state.favorites = state.favorites.filter((contact) => contact.id !== action.payload)
      
    },
  },
});

export default allData.reducer;
export const { addToGeneralData, removeFromGeneralData, editContact, addFavorite, removeFavorite } =
  allData.actions;
