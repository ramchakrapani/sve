import { Grid, Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import FacebookIcon from '@mui/icons-material/Facebook';




export default function Pricing(){
    return(
        <>

        <Typography sx={{textAlign :"center",color:"text.secondary",mt:"50px",fontWeight:800,fontSize:15}}>  Y O U R  C H O I C E  </Typography>

        <Typography  variant="h4" sx={{ mt:5, mb:3,textAlign:"center",fontSize:40,fontWeight:800 }}> We have the right package for you</Typography>
        


        <Grid  container rowSpacing={1} columnSpacing={{  xs: 1, sm: 2, md: 3 ,mt:5 ,mb:6}} >
        <Grid item xs={1.5}></Grid>

        <Grid item xs={3}>     
    <Card sx={{ minHeight: 550,minWidth:100 }}>
      <CardContent > 
      <Typography variant="body1"  sx={{color:"text.secondary" ,textAlign:"center"}} > PERSONAL</Typography>
      <Typography variant="h4"sx={{mt:2,mb:5,fontFamily:"Raleway",textAlign:"center"}}>The standard version </Typography>
      <Typography variant="h2" sx={{ textAlign:"center" }}> <sup>$</sup>19 </Typography>
      <Typography sx={{textAlign:"center",mb:4}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
      <Typography sx={{textAlign:"center"}}>  5 Downloads</Typography>
      <Divider />
      <Typography sx={{textAlign:"center",mt:3,}}>2 Extensions</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3}}> Tutorials</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3}}> Forum Support</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3 ,mb:6}}> 1 year free updates </Typography>
     
     <Typography sx={{textAlign:"center"}}>
        <Button size="small" variant="contained"  > buy today </Button>
        
        
        </Typography>
      </CardContent>
    
    </Card>
    </Grid>

    <Grid item xs={3}>     
    <Card sx={{ minHeight: 550,minWidth:100 }}>
      <CardContent>
      <Typography variant="body1"  sx={{color:"text.secondary" ,textAlign:"center"}} >STUDENT</Typography>
      <Typography variant="h4"sx={{mt:2,mb:5,fontFamily:"Raleway",textAlign:"center"}}>Most popular choice </Typography>
      <Typography variant="h2" sx={{ textAlign:"center",backgroundColor:"pu"}}> <sup>$</sup>29 </Typography>
      <Typography sx={{textAlign:"center",mb:4}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
      <Typography sx={{textAlign:"center"}}>   15 Downloads</Typography>
      <Divider />
      <Typography sx={{textAlign:"center",mt:3,}}>2 Extensions</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3}}> Tutorials with support</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3}}> Forum Support</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3 ,mb:6}}> 3 year free updates </Typography>
      
      <Typography sx={{textAlign:"center"}}>
        <Button size="small" variant="contained" > buy today </Button>
        </Typography>
      </CardContent>
      
        
        
     
    </Card>
    </Grid>

    <Grid item xs={3}>     
    <Card sx={{ minHeight: 550,minWidth:100 }}>
      <CardContent>
      <Typography variant="body1"  sx={{color:"text.secondary" ,textAlign:"center"}} > BUSINESS</Typography>
      <Typography variant="h4"sx={{mt:2,mb:5,fontFamily:"Raleway",textAlign:"center"}}> For the whole team </Typography>
      <Typography variant="h2" sx={{ textAlign:"center" }}> <sup>$</sup>49 </Typography>
      <Typography sx={{textAlign:"center",mb:4}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
      <Typography sx={{textAlign:"center"}}>  ultimate Downloads</Typography>
      <Divider />
      <Typography sx={{textAlign:"center",mt:3,}}>ultimate Extensions</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3}}>  HD video Tutorials</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3}}> Chat Support</Typography>
      <Divider/>
      <Typography sx={{textAlign:"center",mt:3 ,mb:6}}> Life time free updates </Typography>

      <Typography sx={{textAlign:"center"}}>
        <Button size="small" variant="contained" > buy today </Button>
        </Typography>

        
       
      </CardContent>
    
    
    </Card>
   
    </Grid>
    <Grid item xs={1.5}></Grid>
    </Grid>

         

    <Grid container rowSpacing={0} columnSpacing={0} marginBottom={20}>
  <Grid item xs={10}>
   <Typography marginLeft={10}sx={{mt:20}}>Made with love by ShapingRain</Typography>
   </Grid>
   <Grid item xs={2}>
     <Typography sx={{mt:30}}>
    <FacebookIcon sx={{color:"blue"}}/>

    <GoogleIcon sx={{ml:"10px",color:"olive"}}/>
    <TwitterIcon sx={{ml:"10px" ,color:"violet"}}/>
    <InstagramIcon sx={{ml:"10px" ,color:"red"}}/>
    <EmojiNatureIcon sx={{ml:"10px" ,color:"gold"}}/>
    </Typography>
    </Grid>
    </Grid>
       
       
       
       
       
       
       
       
        </>
    )
}
