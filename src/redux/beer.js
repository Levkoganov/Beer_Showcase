// Dependencies
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Init state
const initialState = {
  beers: [], // All beers
  favoriteBeers: [], // Favorite beers
  numberOfBeers: 0, // Number of beers (for pagination) 
  isSearching: false, // If (isSearch = true) Hide pagination
};

const beerSlice = createSlice({
  name: "beers",
  initialState,

  reducers: {
    // Add beer to "favoriteBeers" state
    addFavorite: (state, action) => {
      state.favoriteBeers = [...state.favoriteBeers, action.payload]
    },

    // Remove all beers from "favoriteBeers" state
    removeAllFavorites: (state) => {
      state.favoriteBeers = [];
    },

    // Remove one beer from "favoriteBeers" state
    removeOneFavorite: (state, action) => {
      state.favoriteBeers = state.favoriteBeers.filter((favBeer) => favBeer.id !== action.payload);
    },

    // Add "Rating" object to "favoriteBeers"
    addRank: (state, action) => {
      const { id, rating} = action.payload
      const idxNum = state.favoriteBeers.findIndex((data) => data.id === id); // Find array index

      // Add "rating" object to array
      state.favoriteBeers[idxNum] = {...state.favoriteBeers[idxNum] ,"rating":rating}
    }
  },

  extraReducers(builder) {
    builder
      // GetBeers by page and number of items
      .addCase(getBeers.fulfilled, (state, action) => {
        state.beers = action.payload;
        state.isSearching = false;
      })

      // GetBeerByFoodName
      .addCase(getBeerByFoodName.fulfilled, (state, action) => {
        state.beers = action.payload;
        state.isSearching = true;
      })

      // GetTotalBeersNumber
      .addCase(getTotalBeersNumber.fulfilled, (state, action) => {
        state.numberOfBeers = action.payload;
      });
  },
});

// Get beers by page and items perPage
export const getBeers = createAsyncThunk(
  "beers/getBeers",
  async ({ page, perPage }) => {
    const res = await axios.get(`beers?page=${page}&per_page=${perPage}`);
    return res.data;
  }
);

// Get beers by food pairing
export const getBeerByFoodName = createAsyncThunk(
  "beers/getBeerByFoodName",
  async (foodname) => {
    const res = await axios.get(`beers?food=${foodname}`);
    return res.data;
  }
);

// Get all beers to get number of beers
export const getTotalBeersNumber = createAsyncThunk(
  "beers/fetchNumberOfBeers",
  async () => {
    const res = await axios.get(`beers`);
    return res.data.length; // Return array length (number of beers)
  }
);

export const { addFavorite, removeAllFavorites, removeOneFavorite, addRank} = beerSlice.actions;
export default beerSlice.reducer;
