import { BsArrowRight } from 'react-icons/bs';
import release1 from '../img/release1.png';
import { super1 } from '../util/importedImages';
import Card from './Card';

const Release = () => {
  return (
    <div className="releases">
      <div className="release rel-orange">
        <div className="release__content">
          <h2 className="release__title">Initial Release 4/11</h2>
          <p className="release__description">
            We have released four limited edition NFT's early, which can be bid
            via{' '}
            <a href="#" className="rel__link">
              OpenSea
            </a>
          </p>
          <p className="release__description">
            There will be only four of these NFT's, so make sure not to miss
            out!
          </p>
          <p className="release__description">50% of proceeds go to charity</p>
          <a href="#" className="rel__link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="rel__image">
          <img src={release1} alt="" />
          <div className="rel__ellipse rel--pink"></div>
        </div>
      </div>
      {/* Second */}
      <div className="release rel-green">
        <div className="rel__card-container">
          <Card
            image={super1}
            series="Floop Series"
            title="Purple man"
            price={2.99}
            tag="12983"
            time={1}
          />
          <div className="rel__ellipse rel--orange"></div>
        </div>
        <div className="release__content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="release__description">
            We have released four limited edition NFT's early, which can be bid
            via{' '}
            <a href="#" className="rel__link">
              OpenSea
            </a>
            .
          </p>
          <p className="release__description">
            There will be only four of these NFT's, so make sure not to miss
            out!
          </p>
          <p className="release__description">50% of proceeds go to charity</p>
          <a href="#" className="rel__link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Release;
