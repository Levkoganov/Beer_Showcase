// Dependncies
import React, { useEffect } from "react";
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
  const { beers, isSearching, isLoading } = useSelector((state) => state.allbeers);

  useEffect(() => {
    // Get beers
    dispatch(getBeers({page: currentPage, perPage: itemsPerPage}));
    
    // Get number of beers (for Pagination)
    dispatch(getTotalBeersNumber()); 
  }, [dispatch]);

  return (
    <Box sx={{ m: 4 }}>
      <Container>

        {/* Search (component) */}
        <SearchBeer currentPage={currentPage} itemsPerPage={itemsPerPage}/>
          {/* BeerGrid (component) */}
          {isLoading ? "loading..." : <BeerGrid beers={beers} />}
          {/* Pagination (component) */}
          {!isSearching && <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
          
      </Container>
    </Box>
  );
}

export default Home;
