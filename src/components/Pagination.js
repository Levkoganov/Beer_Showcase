// Dependencies
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MUIPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Redux
import { getBeers } from "../redux/beer";

function Pagination({ currentPage, itemsPerPage }) {
  const dispatch = useDispatch();

  const { numberOfBeers } = useSelector((state) => state.allbeers); // Redux state
  const [pageNumbers, setPageNumbers] = useState(0); 

  useEffect(() => {
    // Calculate page number and round it
    for (let i = 1; i <= Math.ceil(numberOfBeers / itemsPerPage); i++) {
      // Setpage number on last iteration
      if (i === Math.ceil(numberOfBeers / itemsPerPage))
        setPageNumbers(i);
    }
  }, [pageNumbers, itemsPerPage, numberOfBeers]);

  // Fetch beers on page change
  const handlePageChange = (_, value) => {
    dispatch(getBeers({ page: value, perPage: 6 }));
  };

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center">
      <h1>pagination</h1>
      <MUIPagination
        count={pageNumbers}
        color="primary"
        defaultPage={currentPage}
        onChange={(_, value) => handlePageChange(_, value)}
      />
    </Stack>
  );
}

export default Pagination;
