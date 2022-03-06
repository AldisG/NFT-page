import { icon, super1, release2 } from '../util/importedImages';
import Card from './Card';

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
          <div className="free__card1">
            <Card
              image={super1}
              series="Floop Series"
              title="Purple man"
              price={2.99}
              tag="12983"
              time={1}
            />
          </div>
          <div className="free__card2">
            <Card
              image={release2}
              series="Gloop Series"
              title="Purple man"
              price={4.99}
              tag="12973"
              time={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free;
