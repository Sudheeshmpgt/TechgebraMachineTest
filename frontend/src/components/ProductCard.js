import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box } from "@mui/system";

function ProductCard({ product }) {
  return (
    <Card elevation={10} sx={{ maxWidth: 350, height: 450, m:'40px auto'}}>
      <CardMedia
        component="img"
        height="210"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{ height: 30 }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </Box>
        <Box sx={{ height: 40, mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ display: "flex" }}>
        <CurrencyRupeeIcon sx={{ mt: 0.5 }} />
        <Typography gutterBottom variant="h5" component="div">
          {product.price}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" size="small">
          ADD TO CART
        </Button>
        <Button variant="contained" size="small">
          BUY NOW
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
