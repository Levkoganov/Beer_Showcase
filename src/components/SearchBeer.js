// Dependencies
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

// Redux
import { useSelector ,useDispatch } from "react-redux";
import { getBeerByFoodName, getBeers } from "../redux/beer";

// Styles
import { FormStyled } from "./style/Form.style";

function SearchBeer({ currentPage, itemsPerPage }) {
  const dispatch = useDispatch(); // Dispatch redux
  const { beers, isSearching } = useSelector((state) => state.allbeers); // Redux states
  const [foodName, setFoodName] = useState("");

  // Input onChange
  const handleChange = (e) => {
    setFoodName(e.target.value);
  };

  // Submit input value
  const handleSubmit = (e) => {
    e.preventDefault();

    // If input empty
    if(foodName.trim() === "") {
      dispatch(getBeers({page: currentPage, perPage: itemsPerPage})); // Fetch beers
      setFoodName(""); // Reset state
      return
    }

    dispatch(getBeerByFoodName(foodName));
    setFoodName(""); // Reset state
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormStyled onSubmit={handleSubmit}>
        
        <TextField
          sx={{ marginBottom: "20px" }}
          id="standard-basic"
          label="Food Pairing"
          variant="standard"
          type="text"
          name={foodName}
          value={foodName}
          onChange={handleChange}
        />

        <Button
          sx={{ marginBottom: "20px", fontWeight: 600 }}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSubmit}
        >
          Search
        </Button>

        {/* Error msg if no "food pairing" found */}
        {beers.length === 0 && isSearching && <p style={{ textAlign: "center" }}>
          No beer found with that "food pairing"
          <br />
          <span>Click on "search" to load all beers</span>
        </p>}
        
      </FormStyled>
    </Box>
  );
}

export default SearchBeer;
