import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const NavBar = () => {
  return (
    
    <AppBar position="absolute" style={{backgroundColor:"red", textDecorationColor:"blue", margin: "10px",}} >
      <Toolbar>
      
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Its fast and easy
        </Typography>
        

        <Button color="inherit" component={Link} to="/home">Home</Button>
       
        <Button color="inherit" component={Link} to="/Selection">selection</Button>
        {/* <Button color="inherit" component={Link} to="/contact">Contact Us</Button> */}
        <Button color="inherit" component={Link} to="/about">About</Button>
        {/* <Button color="inherit" component={Link} to="/search">Search<CiSearch style={{ color: 'blue', fontSize: '24px' }}/></Button> */}
        <Button color="inherit" component={Link} to="/getstart">GET START<SlBasket style={{ color: 'red', fontSize: '24px' }}/></Button>
      </Toolbar>
       
      <Outlet />
    </AppBar>
  );
};

export default NavBar;