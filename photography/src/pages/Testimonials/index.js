import { Grid ,Typography } from "@mui/material";





export default function Testimonials(){
 return(
 <>
  <Typography sx={{textAlign :"center",color:"text.secondary",mt:15}} >FEEDBACK</Typography> 

  <Typography variant="h4" sx={{ mt:5, mb:3,textAlign:"center",textDecorationStyle:"solid" }}> What our customers are saying</Typography> 
 


  <Grid  container rowSpacing={1} columnSpacing={{  xs: 1, sm: 2, md: 3 ,mt:5}} >
<Grid item xs={1.5}>

</Grid>

<Grid item xs={3}>
    <Typography sx={{alignItems:"center",display:"flex",justifyContent:"center",mb:3}}>
  <img src="https://images.pexels.com/photos/16567460/pexels-photo-16567460/free-photo-of-smiling-model-in-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  height="100px"
  width="100px"
  style={{borderRadius:"50%"}}
  alt="not fetched"
  
  />
  </Typography>

  <Typography sx={{mb:3}} fontFamily="raleway" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'</Typography>
 <Typography sx={{ml:7}}> John Doe - Happy Customer</Typography>

 </Grid>
 
<Grid item xs={3}>
    <Typography sx={{alignItems:"center",display:"flex",justifyContent:"center",mb:3}}>
 <img src="https://images.pexels.com/photos/2379864/pexels-photo-2379864.jpeg?auto=compress&cs=tinysrgb&w=600"
  height="100px"
  width="100px"
  style={{borderRadius:"50%",alignItems:"center",display:"flex",justifyContent:"center"}}
  alt="not fetched"
  
  />
</Typography>
  <Typography sx={{mb:3}} fontFamily="raleway" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</Typography>
 <Typography sx={{ml:7}}> Roslyn Doe - Happy Customer</Typography>

 </Grid>

<Grid item xs={3}>
    <Typography sx={{alignItems:"center",display:"flex",justifyContent:"center",mb:3}}>
 <img src="https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=600"
  height="100px"
  width="100px"
  style={{borderRadius:"50%",alignItems:"center",display:"flex",justifyContent:"center"}}
  alt="not fetched"
  
  />
</Typography>
  <Typography sx={{mb:3}} fontFamily="raleway">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</Typography>
 <Typography  sx={{ml:7}}> Thomas Doe - Happy Customer</Typography>

 </Grid>

 <Grid item xs={1.5}>

 </Grid>
 </Grid> 
 </>
 )
}