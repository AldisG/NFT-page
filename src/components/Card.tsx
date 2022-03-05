import React, { FC } from 'react';

type Props = {
  image: string;
  series: string;
  title: string;
  price: string;
  tag: string;
  time: string;
};

const Card: FC<Props> = ({ image, price, series, tag, time, title }) => {
  return <div className="card">Card</div>;
};

export default Card;
