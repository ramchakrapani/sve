import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Aboutuscomponents() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Founded in 1986 by Shri Sama Ravinder Reddy with a vision to build a leading enterprise in industrial and commercial supplies, SVE has relentlessly risen to glory with its steadfast focus on achieving customer delight through excellence, innovation and agility. The company takes pride in its unwavering commitment to on-time delivery, happieness and satisfaction of its customer.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}