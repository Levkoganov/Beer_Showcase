// Dependencies
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack, Button} from "@mui/material";
import SportsBarIcon from '@mui/icons-material/SportsBar'; // Icon

function Navbar() {
  const navigate = useNavigate(); // Navigate to new endpont

  return (
      // Navbar
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <SportsBarIcon />

          {/* Title */}
          <Typography edge="start" variant="h6" component="div" sx={{flexGrow: 1}}>
            Beer
          </Typography>
          
          {/* All Endpoints */}
          <Stack direction='row' spacing={1}>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/favorite")}>Favorite</Button>
          </Stack>

        </Toolbar>
      </AppBar>
  );
}

export default Navbar;
