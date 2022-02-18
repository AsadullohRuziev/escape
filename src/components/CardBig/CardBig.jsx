import React from "react";
import { Card, Person } from "../../utils/card";
import Text from "../Text/Text";
import './CardBig.scss'

const CardBig = () => {
  return (
    <div className="cardBig">
      <img className="imgBig" src={Card} alt="Card image" />
      <div className="content">
        <h2>The Road Ahead</h2>
        <Text className='text' title={"The road ahead might be paved - it might not be."} />
        <div className="person">
          <img src={Person} alt="Card image" />
          <h6>Mat Vogels</h6>
          <p>September 25, 2015</p>
        </div>
      </div>
    </div>
  );
};

export default CardBig;
