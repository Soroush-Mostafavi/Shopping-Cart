import { Grid } from "@mui/material";
import React from "react";

import Sunpro from "./Sunpro";

const Summer = ({ onAddone, Suncloth }) => {
  return (
<Grid sm={8} md={12}>
  <div className="summer">
  <h2 style={{ textAlign: "center" }}>Summer clothes</h2>
      <div className="result">
        {Suncloth.map((productone) => (
          <Sunpro
            key={productone.id}
            productone={productone}
            onAddone={onAddone}
          />
        ))}
      </div>
  </div>

</Grid>
    
     
 
  );
};

export default Summer;
