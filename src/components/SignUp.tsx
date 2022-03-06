import { signup } from '../util/importedImages';
import SignUpBtn from './SignUpBtn';

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup__image-container">
          <div className="signup__img">
            <img src={signup} alt="sign up" />
          </div>
          <div className="signup__ellipse-container">
            <div className="signup__ellipse signup__ellipse--pink"></div>
            <div className="signup__ellipse signup__ellipse--orange"></div>
          </div>
        </div>
        <div className="signup__content">
          <div className="signup__sub-tittle">Launching Soon</div>
          <div className="signup__title">An NFT like no other!</div>
          <p className="signup__description">
            Don't miss out on Our New NFT! Sign up bellow to recieve updates
            when we go live!
          </p>
          <SignUpBtn />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
