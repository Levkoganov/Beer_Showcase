// Dependencies
import React from 'react';
import { InputLabel, MenuItem, FormControl, Select} from '@mui/material';

// Redux
import { useDispatch } from "react-redux";
import { addRank } from "../redux/beer";

export default function BeerRating({beerInfo}) {
  const dispatch = useDispatch(); // Dispatch redux

  // addRank to favorite
  const handleChange = (event) => {
    dispatch(addRank({id:beerInfo.id, rating: event.target.value}))
  };

  return (
    <div>
      <FormControl variant="standard" sx={{minWidth:65}}>
        <InputLabel size="small" id="demo-simple-select-standard-label">rating</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={beerInfo.rating || ""}
          onChange={handleChange}
          label="rating"
        >

          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}