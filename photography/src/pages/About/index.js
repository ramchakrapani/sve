import {Grid, Typography } from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BoltIcon from '@mui/icons-material/Bolt';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function About(){

    return(
        
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:20}}>

            <Grid container xs={1}>

            </Grid>
            <Grid container xs={5} sx={{display:"block", alignItems:"center"}}>
               
                    
        <Typography variant="h5" sx={{mb:4, color:"text.secondary"}}>success</Typography>
        <Typography variant="h3"sx={{mb:5,fontFamily:"Raleway"}}>How We Help You To <br/>Sell Your Product</Typography>
        <Typography variant="h5"sx={{mb:4, color:"text.secondary"}}>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
        elit, sed do eiusmod tempor incididunt ut labore et <br/>
        dolore magna aliqua. Ut enim ad minim veniam!</Typography>
        </Grid>
        
            
 <Grid container xs={5}columnSpacing={{ xs: 0, sm: 10, md:0}}>
    <Grid item xs={6}  sx={{justifyContent:"center"}}>
        <Typography sx={{textAlign:"center", m:1}}>
        <FingerprintIcon sx={{color:"goldenrod",fontSize:44}}/>
        </Typography>
       
       
        <Typography variant="h6" sx={{mt:0,textAlign:"center", fontFamily:"Raleway"}}>Fingerprint</Typography>
        <Typography sx={{m:1, fontFamily:"Raleway"}}>Has ne tritani atomorum conclusionemque, in
            dolorum volumus cotidieque eum. At vis choro neglegentur iudico</Typography>
            </Grid>
            <Grid item xs={6} sx={{justifyContent:"center"}}>
            <Typography sx={{textAlign:"center", m:1}}>
            <BoltIcon sx={{color:"goldenrod",fontSize:44}}/>
            </Typography>
            <Typography variant="h6" sx={{mt:0, textAlign:"center",fontFamily:"Raleway"}}>Easy to Use</Typography>
            <Typography sx={{fontFamily:"Raleway", m:1}}>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae,
                 sit detracto mediocrem disputationi</Typography>
                 </Grid>

<Grid item xs={6} sx={{justifyContent:"center"}}>
<Typography sx={{textAlign:"center", m:1}}>
<StayCurrentPortraitIcon sx={{color:"goldenrod",fontSize:44}}/>
</Typography>
<Typography variant="h6" sx={{mt:0,textAlign:"center", m:1,fontFamily:"Raleway"}}>Fully Responsive</Typography>
<Typography sx={{fontFamily:"Raleway", m:1}}>Id porro tritani recusabo usu, eum intellegam consequuntur et.
     Fugit debet,  vivendum</Typography>
     </Grid>
<Grid item xs={6}sx={{justifyContent:"center"}}>
<Typography sx={{textAlign:"center", m:1}}>
<RocketLaunchIcon sx={{color:"goldenrod",fontSize:44}}/>
</Typography>
<Typography variant="h6" sx={{mt:0, textAlign:"center", m:1,fontFamily:"Raleway"}}>Parallax Effect</Typography>
<Typography sx={{fontFamily:"Raleway", m:1}}>Id porro tritani recusabo usu, eum intellegam consequuntur et.
     Fugit debet ea sit</Typography>
     </Grid>
     </Grid>

     </Grid>

   

     
    
   









        </>
    )
}