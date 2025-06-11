import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Product = () => {
  var [product, setproduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <div>
        <Grid container spacing={2}>


      {product.map((det) => {
        return (
            <Grid>
          <Card key={det.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={det.image}
              title={det.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component="div">{det.title}</Typography>
              <Typography gutterBottom variant='h6' component="div">{det.category}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{det.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Grid>
        )
      })}
      </Grid>
    </div>
  )
}

export default Product;
