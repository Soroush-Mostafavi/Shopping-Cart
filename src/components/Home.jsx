import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../assets/summerface.jpg";
import image2 from "../assets/women-face.jpg";
import image3 from "../assets/winterface.jpeg";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

const Home = () => {
  return (
    <div className="chap-conti">
      <div className="summer-img">
        <NavLink to="/summer">
        <p>summer</p>
          <Card >
            <CardMedia
              component="img"
              height="250"
             
              image={image1}
              alt="summer"
            />
          </Card>
        </NavLink>
      </div>
      <div className="autmn-img">
        <NavLink to="/autmn">
          <p>autumn</p>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={image2}
              alt="summer"
            />
          </Card>
        </NavLink>
      </div>
      <div className="winter-img">
        <NavLink to="/winter">
          <p>winter</p>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={image3}
              alt="summer"
            />
          </Card>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
