// Dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box, Button } from "@mui/material";

// Components
import BeerGrid from "../BeerGrid";
import { removeAllFavorites } from "../../redux/beer";

function Favorite() {
  const dispatch = useDispatch();

  // Redux state
  const { favoriteBeers } = useSelector((state) => state.allbeers);

  // Remove all favorite
  const handleResetFavorite = () => {
    const answer = window.confirm("Delete all Favorite?");
    if (answer) dispatch(removeAllFavorites());
  }

  return (
    <Box sx={{ m: 4 }}>
      <Container>

        {/* Show delete (btn) if array not empty */}
        {favoriteBeers.length !== 0 && (
          <Button 
            variant="contained" 
            color="error"
            onClick={() => handleResetFavorite()}
          >
            Delete all favorites
          </Button>
        )}

        <h1>Favorite</h1>

        {/* Show "BeerGrid" component if array not empty */}
        {favoriteBeers.length !== 0 ? (
          <BeerGrid beers={favoriteBeers} favorite={"favoritePage"} />
          ) : (
          <h3>Please add a beer to view this content...</h3>
        )}

      </Container>
    </Box>
  );
}

export default Favorite;
