import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";


const pages = [ "About","Clients","Gallery","Services","Testimonials","Pricing"];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


 
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor:"white",border:"none",margin:"0px"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",    
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              fontSize:"40px",
              fontWeight:"1000"
            }}
          >
            NAMARI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "2" }, boxShadow:0 }}>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            NAMARI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
               <Link to ={page} style={{textDecoration:"none"}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block", textTransform:"none", fontFamily:"raleway" }}
              >
                {page}
              </Button>
               </Link>
            ))}
          </Box>

          <Typography sx={{mt:"10px"}}>
    <FacebookIcon sx={{color:"blue"}}/>
    <GoogleIcon sx={{ml:"10px",color:"olive"}}/>
    <TwitterIcon sx={{ml:"10px" ,color:"violet"}}/>
    <InstagramIcon sx={{ml:"10px" ,color:"red"}}/>
    <EmojiNatureIcon sx={{ml:"10px" ,color:"gold"}}/>
    </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
