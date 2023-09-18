
import { Grid,Typography } from "@mui/material";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';





export default function Copycomponents(){
    return(
        <>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
  <Grid item xs={1}>
  </Grid>

  <Grid item xs={4}>
 <Typography sx={{mt:"60px", fontFamily:"raleway"}}>
  Copyrights © <a href="/">Sri Venkateswara Enterprises</a> 2023
 </Typography>
 <FacebookTwoToneIcon sx={{color:"blue"}}/>
 <InstagramIcon sx={{color:"red"}}/>
 <TwitterIcon sx={{color:"skyblue"}}/>
 <RoomIcon sx={{color:"green"}}/>
 </Grid>
 <Grid item xs={2}>
  </Grid>
  <Grid item xs={4}>
 <Typography sx={{mt:"50px", fontFamily:"raleway"}}>
 Powered by Ram Techno Solutions Pvt. Ltd.
 </Typography>
</Grid>
<Grid item xs={2}>
  </Grid>

</Grid>
        </>
    )
}