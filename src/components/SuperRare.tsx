import { cardList } from '../util/cardList';
import Card from './Card';

const SuperRare = () => {
  return (
    <div className="super-rare">
      <div className="super__title-container">
        <h2 className="super__title">LE Super Rare Auction</h2>
        <p className="super__description">
          We have released four limited edition NFT's early, which can be bid
          via <a href="#">OpenSea</a>.
        </p>
      </div>
      <div className="super__cards">
        {cardList.map(({ image, price, series, tag, time, title }) => (
          <Card
            key={title + tag}
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperRare;
