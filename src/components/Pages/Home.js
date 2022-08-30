// Dependncies
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box } from "@mui/material";

// Components
import BeerGrid from "../BeerGrid";
import Pagination from "../Pagination";
import SearchBeer from "../SearchBeer";

// Redux
import { getTotalBeersNumber, getBeers } from "../../redux/beer";

function Home() {
  const dispatch = useDispatch();
  const currentPage = 1; // Page
  const itemsPerPage = 6; // ItemPerPAge

  // Redux state
  const { beers, isSearching } = useSelector((state) => state.allbeers);
  const [loading, isLoading] = useState(false); // Loading state

  useEffect(() => {
    // Get beers
    dispatch(getBeers({page: currentPage, perPage: itemsPerPage}));
    isLoading(true); // loaded

    // Get number of beers (for Pagination)
    dispatch(getTotalBeersNumber()); 
  }, [dispatch]);

  return (
    <Box sx={{ m: 4 }}>
      <Container>

        {/* Search (component) */}
        <SearchBeer currentPage={currentPage} itemsPerPage={itemsPerPage}/>
          {/* BeerGrid (component) */}
          {loading ? <BeerGrid beers={beers} /> : "loading..."}
          {/* Pagination (component) */}
          {!isSearching && <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
          
      </Container>
    </Box>
  );
}

export default Home;
