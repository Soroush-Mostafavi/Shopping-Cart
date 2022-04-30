import React from "react";

import Sunpro from "./Sunpro";

const Summer = ({onAddone,Suncloth }) => {



  return (
    <main >
      <h2 style={{ textAlign:"center" }}>Summer clothes
</h2>
      <div className="result">
        {Suncloth.map((productone) => (
          <Sunpro
            key={productone.id}
            productone={productone}
            onAddone={onAddone}
          />
        ))}
      </div>
      ;
    </main>
  );
};

export default Summer;
