import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case FILTER: {
      const genderToFilter = action.payload;
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === genderToFilter
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    }
    case ORDER: {
      const orderType = action.payload;
      const sortedCharacters = [...state.myFavorites];

      if (orderType === "A") {
        sortedCharacters.sort((a, b) => a.id - b.id); //de menor a mayor
      } else if (orderType === "D") {
        sortedCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        myFavorites: sortedCharacters,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
