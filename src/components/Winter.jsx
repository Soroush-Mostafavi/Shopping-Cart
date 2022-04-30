import React from "react";
import Winpro from "./Winpro";


const Winter = ({onAddthree,wincloth}) => {
  

  return (
    <main>
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
      ;
    </main>
  );
};

export default Winter;
