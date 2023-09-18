import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ServiceCard(props) {
  const image= props.image;
  const text1= props.text1;
  const text2= props.text2;

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={image}
        alt="not fetched"
        
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5">
      {text1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {text2}
        </Typography>
      </CardContent>
          </Card>
  );
}