import React, { FC } from 'react';
import superEth from '../img/supereth.png';

type Props = {
  image: string;
  series: string;
  title: string;
  price: number;
  tag: string;
  time: number;
};

const Card: FC<Props> = ({ image, price, series, tag, time, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
          <span className="card-top">Top bid</span>
        </div>
      </div>
      <div className="card-details">
        <h4 className="card-title">{title}</h4>
        <div className="card-price">
          <img src={superEth} alt="super eth" />
          <h4>{price} ETH</h4>
        </div>
      </div>
      <div className="card-sub-details">
        <span>{tag}</span>
        <span>{time} day left</span>
      </div>
    </div>
  );
};

export default Card;
