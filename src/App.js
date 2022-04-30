import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Summer from "./components/Summer";
import Autmn from "./components/Autmn";
import Winter from "./components/Winter";
import Basket from "./components/Basket";
import { useState } from "react";
import Dataautmn from "./dataautmn";
import Datawinter from "./datawinter";
import Datasummer from "./datasummer";
import Grid from "@mui/material/Grid";
import Header from "./Header";


function App() {
  const [cartItemsone, setCartItemsone] = useState([]);
  const [cartItemstwo, setCartItemstwo] = useState([]);
  const [cartItemsthree, setCartItemsthree] = useState([]);
  const { autcloth } = Dataautmn;
  const { wincloth } = Datawinter;
  const { Suncloth } = Datasummer;

  ///////////////////////////////////////////////////////////////////
  const onAddone = (productone) => {
    const exist = cartItemsone.find((x) => x.id === productone.id);
    if (exist) {
      setCartItemsone(
        cartItemsone.map((x) =>
          x.id === productone.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItemsone([...cartItemsone, { ...productone, qty: 1 }]);
    }
  };
  ////////////////////////////////////////////////////////////////
  const onAddtwo = (producttwo) => {
    const exist = cartItemstwo.find((x) => x.id === producttwo.id);
    if (exist) {
      setCartItemstwo(
        cartItemstwo.map((x) =>
          x.id === producttwo.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItemstwo([...cartItemstwo, { ...producttwo, qty: 1 }]);
    }
  };
  /////////////////////////////////

  const onAddthree = (productthree) => {
    const exist = cartItemsthree.find((x) => x.id === productthree.id);
    if (exist) {
      setCartItemsthree(
        cartItemsthree.map((x) =>
          x.id === productthree.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItemsthree([...cartItemsthree, { ...productthree, qty: 1 }]);
    }
  };
  ///////////////////////////////////////////////////////////////
  const onRemoveone = (productone) => {
    const exist = cartItemsone.find((x) => x.id === productone.id);
    if (exist.qty === 1) {
      setCartItemsone(cartItemsone.filter((x) => x.id !== productone.id));
    } else {
      setCartItemsone(
        cartItemsone.map((x) =>
          x.id === productone.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  ///////////////////////////////////////////////////////////////
  const onRemovetwo = (producttwo) => {
    const exist = cartItemstwo.find((x) => x.id === producttwo.id);
    if (exist.qty === 1) {
      setCartItemstwo(cartItemstwo.filter((x) => x.id !== producttwo.id));
    } else {
      setCartItemstwo(
        cartItemstwo.map((x) =>
          x.id === producttwo.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  ///////////////////////////////////////////////////////////////
  const onRemovethree = (productthree) => {
    const exist = cartItemsthree.find((x) => x.id === productthree.id);
    if (exist.qty === 1) {
      setCartItemsthree(cartItemsthree.filter((x) => x.id !== productthree.id));
    } else {
      setCartItemsthree(
        cartItemsthree.map((x) =>
          x.id === productthree.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Router>
     

      
     <Header/>

      <Grid container spacing={2}>
        <Grid sm={12} md={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/summer"
              element={
                <Summer
                  cartItemsone={cartItemsone}
                  setCartItemsone={setCartItemsone}
                  onAddone={onAddone}
                  Suncloth={Suncloth}
                />
              }
            />
            <Route
              path="/autmn"
              element={
                <Autmn
                  cartItemstwo={cartItemstwo}
                  setCartItemstwo={setCartItemstwo}
                  onAddtwo={onAddtwo}
                  autcloth={autcloth}
                />
              }
            />
            <Route
              path="/winter"
              element={
                <Winter
                  cartItemsthree={cartItemsthree}
                  setCartItemsthree={setCartItemsthree}
                  onAddthree={onAddthree}
                  wincloth={wincloth}
                />
              }
            />
          </Routes>
        </Grid>
        <Grid  md={4}>
          <Basket
            cartItemsone={cartItemsone}
            cartItemstwo={cartItemstwo}
            cartItemsthree={cartItemsthree}
            Suncloth={Suncloth}
            onAddone={onAddone}
            onAddthree={onAddthree}
            onAddtwo={onAddtwo}
            onRemoveone={onRemoveone}
            onRemovetwo={onRemovetwo}
            onRemovethree={onRemovethree}
          />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
