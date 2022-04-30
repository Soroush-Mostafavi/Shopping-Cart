import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, red } from "@mui/material/colors";
const Result = (props) => {
  const {
    onRemoveone,
    onRemovetwo,
    onRemovethree,
    cartItemsone,
    cartItemstwo,
    cartItemsthree,
    onAddone,
    onAddtwo,
    onAddthree,
    
  } = props;
//////////////////////////////////////////////////////////////////////
const countone = cartItemsone.length;
const counttwo = cartItemstwo.length;
const countthree = cartItemsthree.length;
/////////////////////////////////////////////////////////////////////
  const itemsPriceone = cartItemsone.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPriceone = itemsPriceone * 0.14;
  const shippingPriceone = itemsPriceone > 2000 ? 0 : 0;
  const totalPriceone = itemsPriceone + taxPriceone + shippingPriceone;

  ////////////////////////////////////////////////////////////////////////////////////

  const itemsPricetwo = cartItemstwo.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPricetwo = itemsPricetwo * 0.14;
  const shippingPricetwo = itemsPricetwo > 2000 ? 0 : 0;
  const totalPricetwo = itemsPricetwo + taxPricetwo + shippingPricetwo;

  ////////////////////////////////////////////////////////////////////////////////////

  const itemsPricethree = cartItemsthree.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPricethree = itemsPricethree * 0.14;
  const shippingPricethree = itemsPricethree > 2000 ? 0 : 0;
  const totalPricethree = itemsPricethree + taxPricethree + shippingPricethree;
//////////////////////////////////////////////////////
const totalprice =totalPriceone + totalPricetwo + totalPricethree;
  ////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="cart-itmes" style={{ marginRight: "40px" }}>
     <div ><h2 style={{color:"white"}}>Cart Items :{countone+counttwo+countthree}</h2></div> 
      <div className="operator">
        {countone+counttwo+countthree === 0 && <div>Cart is empty</div>}
{/* /////////////////////////////////////////////////////////////////////////////////// */}
        {cartItemsone.map((item) => (
          <div key={item.id} className="row">
            <div style={{color:"white"}}>{item.name}</div>
            <div className="col-2" style={{ cursor: "pointer" }}>
              <RemoveIcon
                sx={{ bgcolor: red[700] ,margin:"5px" }}
                onClick={() => onRemoveone(item)}
              />
              <AddIcon
                sx={{ bgcolor: green[700] ,margin:"5px" }}
                onClick={() => onAddone(item)}
                className="add"
              />
            </div>
            <div >
              <p style={{color:"white"}}>{item.qty} x ${item.price.toFixed(2)}</p>
            </div><hr/>
          </div>
        ))}
        {/* ////////////////////////////////////////////////////////////// */}
        {cartItemstwo.map((item) => (
          <div key={item.id} className="row">
            <div style={{color:"white"}}>{item.name}</div>
            <div className="col-2" style={{ cursor: "pointer" }}>
              <RemoveIcon
                sx={{ bgcolor: red[700] ,margin:"5px" }}
                onClick={() => onRemovetwo(item)}
              />
              <AddIcon
                sx={{ bgcolor: green[700] ,margin:"5px" }}
                onClick={() => onAddtwo(item)}
                className="add"
              />
            </div>
            <div className="col-2 text-right">
            <p style={{color:"white"}}>{item.qty} x ${item.price.toFixed(2)}</p>
            </div><hr/>
          </div>
        ))}
        {/* //////////////////////////////////////////////////////////////// */}
        {cartItemsthree.map((item) => (
          <div key={item.id} className="row">
            <div style={{color:"white"}}>{item.name}</div>
            <div className="col-2" style={{ cursor: "pointer" ,margin:"2px"}}>
              <RemoveIcon
                sx={{ bgcolor: red[700] ,margin:"5px" }}
                onClick={() => onRemovethree(item)}
              />
              <AddIcon
                sx={{ bgcolor: green[700] ,margin:"5px" }}
                onClick={() => onAddthree(item)}
                className="add"
              />
            </div>
            <div className="col-2 text-right">
            <p style={{color:"white"}}>{item.qty} x ${item.price.toFixed(2)}</p>
            </div><hr/>
          </div>
        ))}
        {/* //////////////////////////////////////////////////////////////////////////// */}
        {countone !== 0 && (
          <>
            <h2>summer clothing</h2>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">
                ${itemsPriceone.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPriceone.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPriceone.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPriceone.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}

        {counttwo !== 0 && (
          <>
            <h2>autumn clothing</h2>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">
                ${itemsPricetwo.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPricetwo.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPricetwo.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPricetwo.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}

        {countthree !== 0 && (
          <>
            <h2>winter Clothing</h2>
            <hr></hr>

            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">
                ${itemsPricethree.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">
                ${taxPricethree.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPricethree.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPricethree.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <h3 style={{fontSize:"20px"}}>Total Price :${totalprice.toFixed(2)}</h3>
     
    </div>
  );
};

export default Result;
