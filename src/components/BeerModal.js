// Dependencies
import React, { useState } from "react";
import {Box, Button, Typography, Modal} from "@mui/material";

// Style for "Box"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BeerModal({ beerInfo }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        Learn More
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {beerInfo.name}
          </Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {beerInfo.tagline}
          </Typography>

          <ul>
            <li>{beerInfo.food_pairing + "\n"}</li>
          </ul>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {beerInfo.description}
          </Typography>
        </Box>  
        
      </Modal>
    </div>
  );
}

export default BeerModal;
