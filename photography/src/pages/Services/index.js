import { Button, Grid, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Dialogcompo from "../../components/Dialogcompo";

export default function Services(){
     return(
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5}} >
        <Grid item xs={1.5}>

        </Grid>

            <Grid item xs={3}>

        <Typography variant="h6" sx={{alignItems:"center"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</Typography>
             <Typography variant="body1" sx={{ml:"100px",mt:"5px"}}>— John Doe, Happy Customer</Typography>
             </Grid>

              <Grid item xs={3}>
             <Typography variant="body1" sx={{mb:3, color:"text.secondary"}}>BELIEVING</Typography>
             <Typography variant="h4" sx={{textDecoration:"Raleway"}}>Focusing On What Matters Most</Typography>

             <Typography sx={{mb:3,mt:2, color:"text.secondary"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</Typography>
             <Typography sx={{mb:3}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Typography> 

                 <Typography sx={{mb:4}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                     Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!</Typography>  
                     
                     <Dialogcompo/>
      </Grid>
      <Grid item xs={3}>
      <img src="https://images.pexels.com/photos/18111272/pexels-photo-18111272/free-photo-of-slogan-on-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" height="700px" width="500px"
        alt =    "not fetched"/>
        </Grid>

        <Grid item xs={1.5}>

        </Grid>

</Grid>
        </>

     )
}