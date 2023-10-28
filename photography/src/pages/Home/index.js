import { Button, Grid, Typography } from "@mui/material";
import About from "../About";
import Clients from "../Clients";
import Gallery from "../Gallery";
import Services from "../Services";
import Testimonials from "../Testimonials";
import Pricing from "../Pricing";

export default function Home(){
    return(
        <>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5}}>

<Grid container xs={1}>

</Grid>

<Grid container xs={5} sx={{display:"block", alignItems:"center"}}>
<Typography variant="h3" sx={{mt:25, mb:4, fontFamily:"Raleway"}}><b>A FREE AND SIMPLE LANDING PAGE</b></Typography>

     <Typography variant="body1" sx={{mb:4, color:"text.secondary"}}>Namari is a free landing page template you can <br/>use for your projects. It is free to use for your<br/> personal and commercial projects, enjoy!</Typography>
 <Button variant='outlined' sx={{height:"40px", color:"black", borderColor:"black"}}>START CREATING TODAY</Button>
 </Grid>

  <Grid container xs={5}>
  
 
 
 <img src="https://getwallpapers.com/wallpaper/full/5/4/d/1339544-widescreen-4k-psychedelic-wallpapers-3840x2160-windows-10.jpg"
 alt="not fetched"
 height={700}
 width={600}
 style={{borderRadius:"10%",marginBottom:30}}
/>

 </Grid>

 <Grid container xs={1}>

</Grid>

 </Grid>

 <About/>
 <Clients/>
 <Gallery/>
 <Services/>
 <Testimonials/>
 <Pricing/>
        </>
    )
    
}