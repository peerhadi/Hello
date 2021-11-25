import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab'
import EditIcon from '@mui/icons-material/Edit';

const cols = 4;
const rows = 5;

export default function ButtonAppBar() {
  return (
  <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Write
          </Typography>
          <Button color="inherit" href='/SignUp' variant="contained">
            SignUp
          </Button>
          <Button color="inherit" href='/Login' variant="contained">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    {Array.from({length: rows}).map((_, i) => (
        <div className='Row' key={i}>
          {Array.from({length: cols}).map((_, j) => (
              <Paper key={j}>
                <Fab href={`/P/${i * rows + j}`}>
                  <EditIcon/>
                </Fab>
              </Paper>
            ))}
        </div>
      ))}
</div>
  );
}
