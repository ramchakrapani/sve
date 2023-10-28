import { Button, Grid, Typography } from "@mui/material";
import ProductsCard from "../../Components/ProductsCard";
import Testemonialcard from "../../Components/Testemonialcard";
import { NavLink } from "react-router-dom";

export default function Home() {
  const heroStyle = {
    minHeight: '100vh',
    backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-digital-low-poly-connection-banner-design_1017-32434.jpg?w=1380&t=st=1683438889~exp=1683439489~hmac=699e1a300b6a9b8e68578f96475c34a4a3c4c0aeb67ffbea64490330022b1a81)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};

const heroTextStyle = {
    color: 'white',
    textAlign: 'center',
};

const actionButtonStyle = {
    margin: '16px',
};
  return (
    <>

            <Grid container style={heroStyle}>
                <Grid item xs={12}>
                    <div style={heroTextStyle}>
                        <Typography variant="h3"
                            sx={{ color: "White", fontFamily: "raleway", marginBottom: "10px" }}
                        >Welcome to Sri Venkateswara Enterprises
                        </Typography>
                        <Typography variant="h6" color="lightcyan" fontFamily="raleway">We offer a wide range of Products & Services for all your Business Needs</Typography>
                        <NavLink to="/Contact Us">
                        <Button variant="contained" color="success" style={actionButtonStyle}>
                        
                            Contact Us
                           
                        </Button>
                        </NavLink>
                    </div>
                </Grid>
            </Grid>
            
        


      <Typography
        variant="h4"
        sx={{ textAlign: "center", color: "orangered", mt: 5 ,fontFamily:"raleway"}}
      >
        Our Clients & Services
      </Typography>

      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/01/19/24/31/240_F_119243173_u4kmtvxLekusRisbbV9rJaaEsWRHKRf5.jpg"
            text="Handtools"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/02/19/02/37/240_F_219023764_x4GO9aTnDUkxf6yidyO7tXonmJ7I2Hdp.jpg"
          text="Frbrications and welding"
        />
        </Grid>
        <Grid item xs={2}>
        <ProductsCard
          image="https://t3.ftcdn.net/jpg/04/16/23/60/240_F_416236080_iUvBR5Z3rpYoCF0SPQF9Tk41uXIDcn8B.jpg"
          text="Bearing & Power Transmission"
        />
</Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/00/82/26/31/240_F_82263145_ileEZAdzH62kC1heFapQmfbO7azXBbxj.jpg"
            text="Hydraulics"
          />
        </Grid>

        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/01/01/62/13/240_F_101621334_9gS31QSWz05XsISdoq7HvwhXEClwvHhu.jpg"
            text="All types of pipes & fittings"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/00/57/53/32/240_F_57533203_GVjGOHZ7XMAHbIn8wM33kpKn1quXFCkM.jpg"
            text="MS Structural Steel"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/02/20/77/57/240_F_220775744_dosJCTNpy8zBidOGOZB6Xij2DArGNKRq.jpg"
            text="Industrial Chemicals"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/02/55/31/92/240_F_255319205_viUZLjQ0TihbK51vS8YXS1kpxjhRFEn1.jpg"
            text="Industrial Lubricants"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/03/79/61/93/240_F_379619334_FEwWZPLZZc518BdMQcLtGc9DuGemmXQs.jpg"
            text="General Stationary"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/00/86/09/02/240_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
            text="Security"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://img.freepik.com/premium-photo/rendering-electric-water-pum_311470-101.jpg?size=626&ext=jpg&ga=GA1.2.164830262.1685001741&semt=ais"
            text="Pumps & Motors"
          />
        </Grid>

        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/05/43/21/15/240_F_543211583_4NJZ9A062sNs4vtlA1pA09oYL2SbGWEU.jpg"
            text="Hardware"
          />
        </Grid>
      </Grid>

      <Typography  variant="h4" sx={{textAlign:"center",mt:5,color:"green",fontFamily:"Raleway"}}>
            Our Clients Testimonials
          </Typography>


          <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:1}}>
          <Grid item xs={4}>
      <Testemonialcard 
      text1="T Satish Babu"
      text2="Manager - Maintenance & Production"
      text3="I am very satisfied with the service provided by this company. The team was very professional and responsive to my needs."
      />  
      </Grid>
      <Grid item xs={4}>
      <Testemonialcard 
      text1=" Vrushali Pol"
      text2="Manager - Enterprise Sales"
      text3="I have been a customer of this company for several years now and I have always been impressed with their pompt reply, commited work & good with market price."
      />  
      </Grid>
      <Grid item xs={4}>
      <Testemonialcard 
      text1="J Praven Kumar Reddy"
      text2="Junior Engineer - Mechanical"
      text3="The firm so supportive, creative and spontaneous to work. They support us 24/7, even in odd times and their creativeness is so amazing. Thanks for the support."
      />  
      </Grid>
      <Grid item xs={4}>
      <Testemonialcard 
      text1="Subramanian Viswanathan"
      text2=" Production Manager"
      text3="I have been a client to this firm from a long time. Almost all products & services will be available at very reasonable prices."
      />  
      </Grid>
      <Grid item xs={4}>
      <Testemonialcard 
      text1=" G Shivanand Basavaraj"
      text2="Manager - Purchase"
      text3="The Team over there has always been proactive in answersing us  and  Maintaining a Good Ralation with us Thanks for the Services ."
      />  
      </Grid>

      </Grid>

      

    </>
  );
}
