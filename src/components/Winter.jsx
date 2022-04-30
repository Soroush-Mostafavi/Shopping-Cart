import { Grid } from "@mui/material";
import React from "react";
import Winpro from "./Winpro";


const Winter = ({onAddthree,wincloth}) => {
  

  return (
  <Grid sm={12}>
  <h2 style={{ textAlign:"center" }}>Winter clothes
</h2>
      <div className="result">
        {wincloth.map((productthree) => (
          <Winpro
            key={productthree.id}
            productthree={productthree}
            onAddthree={onAddthree}
          />
        ))}
      </div>
  </Grid>
    
    
  );
};

export default Winter;
