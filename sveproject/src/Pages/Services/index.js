import { Grid,Typography } from "@mui/material";
import ServiceCard from "../../Components/ServiceCard";

export default function Services(){
    return( 
        <>
        <div style={{ alignItems:"center", display:"flex" ,justifyContent:"center",margin:"5px"}}>
        <img src="https://img.freepik.com/premium-vector/teamwork-finding-new-ideas-little-people-launch-mechanism-search-new-solutions-vector_566886-659.jpg?size=626&ext=jpg&ga=GA1.1.206460874.1683438467&semt=sph"
          alt="not fetched"             
        />

        </div>

        <Typography sx={{textAlign:"center",color:"green", fontSize:"40px",fontFamily:"raleyway"}}>
        We offer a Wide range of Spares & services for
        </Typography>
        <Typography sx={{textAlign:"center",color:"skyblue", fontSize:"20px",fontFamily:"raleyway"}}>
        Beverage, Liquor & Spirits, Beer, Food and Pharmaceutical Industries
        </Typography>
       
        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 4, md:4}} sx={{mt:"0.1px"}}>

        <Grid item xs={4}>

        <ServiceCard
        image="https://i.ibb.co/RHqY4Cc/Tunnel-Rinsing.jpg"
        text1="Tunnel Rinsing Machine"
        text2="In this machine the bottles are manually loaded into the pockets of tunnels and then the cleaning media is sprayed inside the inverted bottle in three stages and then the cleaned bottles are manually unloaded from the pockets of the machine."/>
        </Grid>
        

 <Grid item xs={4}>
        <ServiceCard
        image="https://i.ibb.co/C70kN4z/Filling-Machine.jpg"
        text1="Filling Machine"
        text2="These cappers are suitable for plastic screw caps. In these the caps are placed on the bottle and then rotated so that the cap screws onto threads on the neck of a bottle. These capping heads are suitable for guala caps that are specially designed luxury caps for spirits."/>
       </Grid>

       <Grid item xs={4}>
        <ServiceCard
        image="https://i.ibb.co/YcrrjtY/Cap-Sealing-Machine.png"
        text1="Cap Sealing Machine"
        text2="In this machine, the tip of the nozzle has two passages. From one of the passage, the product comes out and from the other one the air is vented out. This filling is best suited where the level of the product is maintained in the bottle."/>
       </Grid>

       <Grid item xs={4}>
        <ServiceCard
        image="https://i.ibb.co/5kv6CZc/Sticker-Labelling-Machine.jpg"
        text1="Sticker  Labelling Machine"
        text2="These are in-line sticker labelling machines for front, back and wrap around labels using the best label dispensers. The various kinds of peel systems allow placing of labels on assorted shapes of bottles without any bubbles or wrinkles."
        
        />
       </Grid>

       <Grid item xs={4}>
        <ServiceCard
        image="https://i.ibb.co/x74KTdV/Pick-and-place.png"
        text1="Pick & Place Machine"
        text2="These machines are designed and manufactured to pick-up finished bottles from conveyor with the help of bellow heads and drop& place the finished product in carton. The operation begins with the feeding of finished bottles through slot conveyor." />
       </Grid>
       <Grid item xs={4}>
        <ServiceCard
        image="https://i.ibb.co/V3cHzc2/Carton-Sealing-Machine.jpg"
        text1="Carton Sealer Machine"
        text2="The cartons leaving the carton erector pass through the tape application head in a carton sealer which puts tape on one side of the open cartons and closes it to form a one-sided open carton which is then fed into the case packer for further operation."
         />
       </Grid>
       </Grid>
        </>
    )
}