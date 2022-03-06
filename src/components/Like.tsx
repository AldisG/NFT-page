import React from 'react';
import { eth1, eth2 } from '../util/importedImages';

const Like = () => {
  return (
    <div className="like">
      <div className="like__container">
        <div className="like__content">
          <div className="like__image">
            <img src={eth1} alt="eth1" />
          </div>

          <h2 className="like__title">An NFT like no other</h2>
          <p className="like__description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live 11/12.
          </p>
          <p className="like__description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live 11/12.
          </p>
        </div>
        {/* Second */}
        <div className="like__content">
          <div className="like__image">
            <img src={eth2} alt="eth2" />
          </div>

          <h2 className="like__title">An NFT like no other</h2>
          <p className="like__description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live 11/12.
          </p>
          <p className="like__description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live 11/12.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Like;
