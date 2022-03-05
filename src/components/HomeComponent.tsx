import home from '../img/home.png';
const HomeComponent = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home__content">
          <div className="home__sub-tittle">Launching Soon</div>
          <div className="home__title">An NFT like no other!</div>
          <p className="home__description">
            Don't miss out on Our New NFT! Sign up bellow to recieve updates
            when we go live!
          </p>
          <button className="sign-up-button">Sign Up</button>
        </div>

        <div className="home__image-container">
          <div className="home__img">
            <img src={home} alt="home" />
          </div>
          <div className="home__ellipse-container">
            <div className="home__ellipse home__ellipse--pink"></div>
            <div className="home__ellipse home__ellipse--orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
