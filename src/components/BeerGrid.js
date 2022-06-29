// Dependncies
import { Grid } from "@mui/material";

// Components
import BeerCard from "./BeerCard";

function BeerGrid({ beers, favorite }) {
  return (
    // Grid for "BeerCard" component
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {beers.map((beerInfo, index) => (
        <Grid item xs={12} sm={4} md={4} key={index} >
          <BeerCard beerInfo={beerInfo} favorite={favorite} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BeerGrid;
