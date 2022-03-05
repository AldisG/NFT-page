import React from 'react';
import { icon, super1, release2 } from '../util/importedImages';

const Free = () => {
  return (
    <div className="free">
      <div className="free__container">
        <div className="free__background">
          <div className="home__ellipse home__ellipse--pink"></div>
          <div className="home__ellipse home__ellipse--green"></div>
        </div>
        <div className="free__content">
          <div className="free__img">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="free__title">Free NFT for early birds</h2>
          <p className="free__description">Sign up today and get a free NFT!</p>
        </div>
        <div className="free__cards">
          <div className="free__card1"></div>
          <div className="free__card2"></div>
        </div>
      </div>
    </div>
  );
};

export default Free;
