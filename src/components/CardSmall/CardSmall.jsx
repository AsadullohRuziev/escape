import React from "react";
import { Cardimg, Person } from "../../utils/card";
import Text from "../Text/Text";
import './CardSmall.scss'

const CardSmall = () => {
  return (
    <div className="cardSmall">
      <img className="card__image" src={Cardimg} alt="card" />
      <div className="card__content">
        <h4>Still Standing Tall</h4>
        <Text className='ok' title={"Life begins at the end of your comfort zone."} />
        <hr />
        <div className="person">
          <img src={Person} alt="Card image" />
          <h6>Mat Vogels</h6>
          <p>9/25/2015</p>  
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
