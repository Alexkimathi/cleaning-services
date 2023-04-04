import React from "react";
import data from "./data";
import "./team.css";
import Team from "./Team";
import "./team.css";

import "./team.css";
import { Swiper, SwiperSlide } from "swiper/react";

function TeamList() {
  return (
    <>
      <div className="Card-list">
        <h1>Our Team</h1>
        <p>
          We believe that meaningful impact begins with the faces and stories
          behind them
        </p>
        <div className="try">
        {data.map((item) => (
          <Team
            key={item.id}
            image={item.image}
            name={item.name}
            title={item.title}
          />
        ))}
        </div>
       
      </div>
    </>
  );
}

export default TeamList;
