// Dependncies
import React from "react";

// Material UI components
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card
} from "@mui/material";

// Components
import BeerModal from "./BeerModal";
import BeerRating from "./BeerRating";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeOneFavorite } from "../redux/beer";

function BeerCard({ beerInfo, favorite }) {
  const dispatch = useDispatch();
  const { favoriteBeers } = useSelector((state) => state.allbeers); // Redux states

  // Add favorite
  const handleAddFavorite = (beer) => {
    return dispatch(addFavorite(beer));
  };

  // Remove one from favorite
  const handleRemoveFavorite = (beer) => {
    return dispatch(removeOneFavorite(beer.id));
  }

  return (
    <Card key={beerInfo.id} sx={{ maxWidth: 300 }}>
      {/* Card img */}
      <CardMedia
        component="img"
        height="150"
        image={beerInfo.image_url}
        alt="beer card"
      />

      {/* Beer name */}
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {beerInfo.name}
        </Typography>
      </CardContent>

      {/* Card buttons */}
      <CardActions sx={{ display: 'flex', justifyContent: "space-around" }}>

        {/* Check if user in favorite page */}
        {favorite !== "favoritePage" ? (
          // Check if "beer" in favorite
          favoriteBeers.find((favBeer) => favBeer.id === beerInfo.id) ? (

            // In-favorite (btn)(disabled)
            <Button variant="contained" disabled>
              IN FAVORITE
            </Button>
          ) : (
            // Add to favorite (btn)
            <Button size="small"  variant="contained" onClick={() => handleAddFavorite(beerInfo)}>
              Favorite
            </Button>
          )

          ) : (
            // Remove from favorite (btn)
          <Button size="small" variant="contained" color="error" onClick={() => handleRemoveFavorite(beerInfo)}>Remove</Button>
        )}

        {/* More info (component) */}
        <BeerModal beerInfo={beerInfo}/>
        {/* Rate beer (component) */}
        {favorite === "favoritePage" && <BeerRating beerInfo={beerInfo}/>}
        
      </CardActions>
    </Card>
  );
}

export default BeerCard;
