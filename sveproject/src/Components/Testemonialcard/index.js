import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Testemonialcard(props) {
 const text1 = props.text1;
 const text2 = props.text2;
 const text3 = props.text3;
  return (
    
    <Card sx={{ maxWidth: 345, textAlign:"center" }}>
      <CardActionArea>
        <CardMedia

          height="140"
       
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {text1}
          </Typography>

          <Typography gutterBottom variant="subtitle1" color="text.secondary">
            {text2}
          </Typography>

          <Typography variant="body2">
         {text3}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}