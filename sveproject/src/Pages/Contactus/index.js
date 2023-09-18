import { Grid, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import RoomIcon from '@mui/icons-material/Room';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { purple } from "@mui/material/colors";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';





export default function Contactus(){
    return(
        <>
        <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1683726977~exp=1683727577~hmac=9893196b239ec6fcceaf168e2acd2092f515124eb5b133d859a87fd54c6e02cd"
            alt="not fetched" />
        </div>

        <Grid container rowSpacing={5} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>

          <Grid item xs={6}>
            <Box>

           
        <Typography variant="h4" sx={{textAlign:"center",color:"purple",fontFamily:"Raleway",mt:"5px"}}>
            Connect 
        </Typography>
        
<Divider />
        
        </Box>
      
        <Typography variant="h5" sx={{textAlign:"center",color:"Orangered",fontFamily:"Raleway",mb:"5px",mt:"5px"}}>
            Sri Venkateswara Enterprises
        </Typography>

        <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
        <LocalPhoneIcon sx={{mt:"20px"}} />
        </div>
     <Typography variant="h6" sx={{textAlign:"center",color:"green",fontFamily:"Raleway"}}>
        Call Us
     </Typography>
      <Typography variant="h6" sx={{textAlign:"center",mb:"15px"}}>
        +919849044476
        </Typography>   

        
        <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
    <MarkunreadIcon/>
        </div>
       <Typography variant="h6" sx={{textAlign:"center",color:"green",fontFamily:"Raleway"}}>
       Email
        </Typography> 
        <Typography sx={{textAlign:"center",mb:"15px"}}>
        enquiry@sve.enterprises
        </Typography>

        <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <RoomIcon/>
            </div>
            <Typography variant="h6" sx={{textAlign:"center",color:"green",fontFamily:"Raleway"}}>
                Regd.Office
            </Typography>
            <Typography sx={{textAlign:"center"}}>
            12-1-508/89/5, Laxminagar, North Lallaguda, Hyderabad, Telangana - 500017, India
            </Typography>
           </Grid>

<Grid item xs={6}>
            <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Stack>
            <Avatar sx={{ bgcolor:purple[500]}}>
        <MarkunreadIcon />
      </Avatar>
            </Stack>
            </div>
            <Typography variant="h4" sx={{textAlign:"center",fontFamily:"Raleway",mb:"5px"}}>
                Contact Us
            </Typography>

 <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Box
      sx={{
        width: 400
       
      }}
    >
      <TextField fullWidth label="Name" sx={{mt:"15px"}} />
    </Box>
    </div>

    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Box
      sx={{
        width: 400,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Mobile" sx={{mt:"15px"}} />
    </Box>
    </div>
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Box
      sx={{
        width: 400,
       
      }}
    >
      <TextField fullWidth label="User_email" sx={{mt:"15px"}}/>
    </Box>
    </div>

    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Box
      sx={{
        width: 400,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Product_Specification" sx={{mt:"15px"}}/>
    </Box>
    </div>

    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Box
      sx={{
        width: 400,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Quantity" sx={{mt:"15px"}}/>
    </Box>
    </div>
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
    <ButtonGroup variant="contained" sx={{mt:"15px"}}>
      <Button>Submit</Button>
      
    </ButtonGroup>
    </div>
    </Grid>
    </Grid>
        </>
    )
}


