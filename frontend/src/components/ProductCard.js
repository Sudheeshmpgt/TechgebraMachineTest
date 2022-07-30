import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">ADD TO CART</Button>
      <Button size="small">BUY NOW</Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard