import { Grid, Typography } from "@mui/material";


export default function Gallery(){
    return(
        <>
        <Typography sx={{mt:10,mb:10}}>
        <Grid container columnSpacing={5} rowSpacing={0} >
          

     <Grid item xs={1.5}>

     </Grid>

  
    <Grid item xs={3}>
    <img src='https://images.pexels.com/photos/12125884/pexels-photo-12125884.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadd' height="290px" width="410px" 
    alt="not fetched"/>
    </Grid>

    <Grid item xs={3}>
    <img src= 'https://images.pexels.com/photos/8582250/pexels-photo-8582250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height="290px" width="410px"alt="not fetched"/>
    </Grid>
    
    <Grid item xs={3}>
    <img src='https://images.pexels.com/photos/6647240/pexels-photo-6647240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height="290px" width="410px"alt="not fetched"/>
    </Grid>

    <Grid item xs={1.5}>

     </Grid>

     <Grid item xs={1.5}>

     </Grid>
  

    <Grid item xs={3}>
    <img src= 'https://images.pexels.com/photos/18749704/pexels-photo-18749704/free-photo-of-a-small-cabin-in-the-snow-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height="290px" width="410px"alt="not fetched"/>
    </Grid>
  
     <Grid item xs={3}>
    <img src= 'https://images.pexels.com/photos/10339900/pexels-photo-10339900.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height="290px" width="410px"alt="not fetched"/>
    </Grid>
    <Grid  item xs={3} >
    <img src= 'https://images.pexels.com/photos/941943/pexels-photo-941943.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height="290px" width="410px"alt="not fetched"/>
    </Grid>

    <Grid item xs={1.5}>

    </Grid>


    

    </Grid>
    </Typography>

  </>
    )
  
}
