import { Grid, Typography } from "@mui/material";

export default function Clients(){
    return(
        <>
        <Grid container rowspacing={1} columspacing={5} sx={{mt:20}}>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={3}>
        <Typography variant="body1" sx={{color:"text.secondary"}}>TRUST</Typography>
        <Typography variant="h4"sx={{mt:2,mb:5,fontFamily:"Raleway"}}>Companies who use our services</Typography>
        <Typography sx={{color:"text.secondary"}}>" Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam! "</Typography>
             </Grid>
             <Grid item xs={.7}>

             </Grid>
             
             <Grid item xs={2}>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo1.png"
             height={"150px"} width={"200px"}
             alt="not fetched"/>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo2.png"height={"150px"} width={"200px"}
             alt="not fetched"/>        
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo3.png"height={"150px"} width={"200px"}
             alt="not fetched"/>
             </Grid>
             <Grid item xs={2}>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo4.png"height={"150px"} width={"200px"}
             alt="not fetched"/>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo5.png"height={"150px"} width={"200px"}
             alt="not fetched"/>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo6.png"height={"150px"} width={"200px"}
             alt="not fetched"/>
             </Grid>
             <Grid item xs={2}>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo7.png"height={"150px"} width={"200px"}
             alt="not fetched"/>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo8.png"height={"150px"} width={"200px"}
             alt="not fetched"/>
             <img src="https://themewagon.github.io/namari/images/company-images/company-logo9.png"height={"150px"} width={"200px"}
             alt="not fetched"/>
             </Grid>
             
             <Grid item xs={1.3}>
                </Grid>
             </Grid>
             
        </>
    )
}