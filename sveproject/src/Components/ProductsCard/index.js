import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductsCard(props) {
    const image = props.image;
    const text = props.text;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
           {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}