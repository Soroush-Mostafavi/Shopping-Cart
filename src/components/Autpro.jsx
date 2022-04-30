import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { green } from "@mui/material/colors";
import { CardMedia } from "@mui/material";
const Autpro = ({ onAddtwo, producttwo }) => {
  return (
    <div>
      <Card className="card">
      <CardMedia
        component="img"
        height="500"
        image={producttwo.image}
        alt={producttwo.name}
      />

        <CardContent style={{ height: "40px", textAlight: "center" }}>
          <Typography variant="body2" color="text.secondary">
            <h3>{producttwo.name}</h3>
            <h3 style={{ marginTop: "-10px" }}>${producttwo.price}</h3>
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ height: "120px" }}>
          <IconButton
            aria-label="add to favorites"
            onClick={() => onAddtwo(producttwo)}
            style={{ height: "60px", textAlight: "center" }}
            sx={{ color: green[700] }}
          >
            <ShoppingCartIcon />
            <p style={{ fontSize: "15px", marginLeft: "20px" }}>
              Add To Basket
            </p>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Autpro;
