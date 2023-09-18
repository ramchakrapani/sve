import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductsCard from '../ProductsCard';
import { Grid } from '@mui/material';

export default function AccordionComponent(props) {
  return (
    <>
      <Typography variant='h5' sx={{textAlign:"center",fontFamily:"raleway",color:"orangered",mt:2,mb:2}}>Our Wide Range of Product Categories</Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

      <Grid item xs={2}>

      </Grid>

      <Grid item xs={8} >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Safety & PPE Supply</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/05/82/22/72/240_F_582227263_3e6aG2CwHm53ShqywUAhpMf8FZhO7fLS.jpg"
            text="Safety Shoes"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t3.ftcdn.net/jpg/05/90/74/90/240_F_590749025_nkEOqP1l6EvjyQZhDnduUw1NnTAtsUss.jpg"
          text="Safety Helmets"
        />
        </Grid>
        <Grid item xs={2}>
        <ProductsCard
          image="https://as2.ftcdn.net/v2/jpg/03/51/52/61/1000_F_351526174_EJSazJjyd12klMvuOc6ZkTqpmnvN0Na4.jpg"
          text="Fall Protection"
        />
</Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/05/61/53/76/240_F_561537683_UvnOaE3F3ugsaxCjpYBaGouI2SMLoGvi.jpg"
            text="Safty Gloves"
          />
        </Grid>

        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/03/74/80/05/240_F_374800578_8coxXUllrKtbrqxlTBHwogb0WfvEL9DK.jpg"
            text="Respiratory Masks"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/04/06/25/03/240_F_406250382_Gh4UIIAqZJjEKdc6uLwmf3QxqZmXT7Ua.jpg"
            text="Safety Jackets"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/04/10/32/14/240_F_410321402_uu46OX2pCBhmtC1Lsy4qjZS5x5rw06Lk.jpg"
            text="Safety Sign & Signals"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/04/76/58/56/240_F_476585679_8uq5ChkQXich5U8I8DnyhVJ4Kn8c5boU.jpg"
            text="Traffic Safety"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/00/55/90/94/240_F_55909472_5fEmP8mAm2sNV42viBfxVsq8yqCJwYJr.jpg"
            text="Hearing Protection"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/00/65/23/35/240_F_65233599_wnEgGEKmJxxxzKSOq2Dv6Z2EpvQFYt5L.jpg"
            text="Face Protection"
          />
        </Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/04/67/80/52/240_F_467805273_yY3DNk6FvVXidAjQGNDSMqVfcQbUjWqE.jpg"
            text="work"
          />
        </Grid>

        
      </Grid>


        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Industrial Tools & Machinery</Typography>
          </AccordionSummary>
          <AccordionDetails>

          <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{mt:"1px"}}>
        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/02/90/34/69/240_F_290346916_8os97QFBEY9xtmeIiTt7xIrtUTXbmiql.jpg"
            text="Power Tools"
          />
        </Grid>

        <Grid item xs={3}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/01/19/24/31/240_F_119243173_u4kmtvxLekusRisbbV9rJaaEsWRHKRf5.jpg"
          text="Hand Tools"
        />
        </Grid>

        <Grid item xs={3}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/02/19/02/37/240_F_219023764_x4GO9aTnDUkxf6yidyO7tXonmJ7I2Hdp.jpg"
          text="Welding"
        />
     </Grid>

        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/03/97/70/71/240_F_397707191_4BowDKeoRINhbK6h8UhIzox8YAHiC2c6.jpg"
            text="Material Handling"
          />
        </Grid>

        <Grid item xs={3}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/04/16/23/60/240_F_416236080_iUvBR5Z3rpYoCF0SPQF9Tk41uXIDcn8B.jpg"
            text="Bearings & Power Transmission"
          />
        </Grid>
        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/02/92/72/91/240_F_292729186_JjQqKKXdBJAgqQVrzBDwJZNCqh6dQ7Va.jpg"
            text="Abrasives"
          />
        </Grid>
        <Grid item xs={3}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/04/48/48/34/240_F_448483449_BOgRmVvPlc52Euo2vVCgtcpG2ZWysm0z.jpg"
            text="Pnenumatics"
          />
        </Grid>

        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/00/82/26/31/240_F_82263145_ileEZAdzH62kC1heFapQmfbO7azXBbxj.jpg"
            text="Hydraulics"
          />
        </Grid>

        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/05/72/17/73/240_F_572177351_Djj8lZ5breulNrWb29WmuNO4HAuwRXuh.jpg"
            text="Cutting Tools & Machinery"
          />
        </Grid>

        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/01/58/83/15/240_F_158831597_Y3iwLax26TWshPmmx03WozEB74ged3v2.jpg"
            text="Industrial Plants & Machineries"
          />
        </Grid>

        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/02/33/72/03/240_F_233720361_1yqxj8Tkvo69A2Y0h6RBlLtmovpr2uat.jpg"
            text="Fasteners"
          />
        </Grid>

        <Grid item xs={3}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/02/15/68/23/240_F_215682376_g57jOEvZ8izK8wK0JlDJiZUibwayqbUM.jpg"
            text="Valves"
          />
        </Grid>
      </Grid>
          </AccordionDetails>


        </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>electrical Tools & Equipments</Typography>
          </AccordionSummary>
        
        <AccordionDetails>

        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://img.freepik.com/premium-photo/rendering-electric-water-pum_311470-101.jpg?size=626&ext=jpg&ga=GA1.2.164830262.1685001741&semt=ais"
            text="Pumps & Motors"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/01/52/77/05/240_F_152770580_QB4k26Zk5zQQCtFPbJ92JM3AyOsuuIOB.jpg"
          text="Led & Lightning"
        />
        </Grid>
        <Grid item xs={2}>
        <ProductsCard
          image="https://www.sve.enterprises/static/media/it.85adb7e9bc7816eb913a.jpg"
          text="Electriacal Instruments"
        />
</Grid>
        
        </Grid>
       </AccordionDetails>
       </Accordion>


        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Office Stationary & Supplies</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container rowSpacing={3} columnGap={{xs: 1, sm: 2, md: 3}} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/03/79/61/93/240_F_379619334_FEwWZPLZZc518BdMQcLtGc9DuGemmXQs.jpg"
            text="General Stationary"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t3.ftcdn.net/jpg/04/40/07/32/240_F_440073209_G5zCsw04ViEwTwapmeMjendrNaqGODTU.jpg"
          text="Office furniture"
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
            image="https://t4.ftcdn.net/jpg/03/06/99/87/240_F_306998742_5awR6uVsZ8dRNdHHnj0tnm4sGUDBAxQ5.jpg"
            text="House Keeping"
          />
        </Grid>

        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/03/64/41/07/240_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg"
            text="IT & Electronics"
          />
        </Grid>
</Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Building & Construction Supplies</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container rowSpacing={3} columnGap={{xs: 1, sm: 2, md: 3}} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/01/99/81/09/240_F_199810981_ASJTsuwwKNLwArWdzLbHUe4YDUCJRKFS.jpg"
            text="Plumbing & Bathroom Fitting"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/05/43/21/15/240_F_543211583_4NJZ9A062sNs4vtlA1pA09oYL2SbGWEU.jpg"
          text="Office furniture"
        />
        </Grid>
        <Grid item xs={2}>
        <ProductsCard
          image="https://t3.ftcdn.net/jpg/00/81/88/78/240_F_81887818_ipbvkxdwi0ZumGjLbscOipfLs0FlaPp9.jpg"
          text="Painting & Coating"
        />
</Grid>

</Grid>
          </AccordionDetails>
</Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>Measurement & Testing</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container rowSpacing={3} columnGap={{xs: 1, sm: 2, md: 3}} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/03/88/50/61/240_F_388506139_xOgN8Etv2okLytpSjp8AG16wQIRLVwfJ.jpg"
            text="Weighting Scales"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/05/93/43/95/240_F_593439577_ntzSLYgXENQT7mfEK4m8fwBU9H1fkNLk.jpg"
          text="Measuring Precisions Tools"
        />
        </Grid>
        <Grid item xs={2}>
        <ProductsCard
          image="https://t3.ftcdn.net/jpg/01/94/70/52/240_F_194705222_TEponA3UPJkqYHFfk3VI99roL7we5k1P.jpg"
          text="Water Meters"
        />
</Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/05/91/09/91/240_F_591099185_ublOt2INAuyPDlsCAUpni47DJYGNiQn0.jpg"
          text="Testing Tools"
        />
</Grid>

</Grid>
          </AccordionDetails>
        </Accordion>


        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>Oil & Lubricants</Typography>
          </AccordionSummary>
          <AccordionDetails>

          <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/02/55/31/92/240_F_255319205_viUZLjQ0TihbK51vS8YXS1kpxjhRFEn1.jpg"
            text="Industrial Oils"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t3.ftcdn.net/jpg/03/63/79/56/240_F_363795677_aWyGg1hxUw7HUFKCJM7YfqSVT83HHlBi.jpg"
          text="Industrial Greases"
        />
        </Grid>
        </Grid>

          </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>Reagents & Catalysts</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container rowSpacing={3} columnGap={{xs: 1, sm: 2, md: 3}} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t4.ftcdn.net/jpg/02/20/77/57/240_F_220775744_dosJCTNpy8zBidOGOZB6Xij2DArGNKRq.jpg"
            text="Industrial Chemicals"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/05/48/54/87/240_F_548548708_hodxOSmnKLEyMckHXbJcm7WeSR1GAlUu.jpg"
          text="Industrial Acids"
        />
        </Grid>
        <Grid item xs={2}>
        <ProductsCard
          image="https://as1.ftcdn.net/v2/jpg/02/39/02/36/1000_F_239023615_XQirlmSPCqr0LcouLgcs57ccNGHm2fuP.jpg"
          text="Industrial Solvents"
        />
</Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/04/17/30/44/240_F_417304464_PDWZc6Wu5ftgH5Qh0vCHhg2vfKe5LHHb.jpg"
            text="Food chemicals"
          />
        </Grid>
        </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography>Iron & Steel Products</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container rowSpacing={3} columnGap={{xs: 1, sm: 2, md: 3}} sx={{mt:"0.1px"}}>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/02/91/80/10/240_F_291801030_Ru6TBwFwoPmCwbpms7beFrcNFg2e0dzH.jpg"
            text="All Types Of Steel"
          />
        </Grid>

        <Grid item xs={2}>
        <ProductsCard
          image="https://t3.ftcdn.net/jpg/01/38/96/20/240_F_138962090_kfVaHPPDVzyr74nHjp5F5ziBm7cTssSS.jpg"
          text="All Types Rods"
        />
        </Grid>
        <Grid item xs={2}>
        <ProductsCard
          image="https://t4.ftcdn.net/jpg/01/01/62/13/240_F_101621334_9gS31QSWz05XsISdoq7HvwhXEClwvHhu.jpg"
          text="MS Structural Steel"
        />
</Grid>
        <Grid item xs={2}>
          <ProductsCard
            image="https://t3.ftcdn.net/jpg/00/57/53/32/240_F_57533203_GVjGOHZ7XMAHbIn8wM33kpKn1quXFCkM.jpg"
            text="All Types Of Pipes & Fittings"
          />
        </Grid>
        </Grid>
          </AccordionDetails>
        </Accordion>
        </Grid>

        <Grid item xs={2}>

</Grid>


        </Grid>
      
    

        </>
  );
}