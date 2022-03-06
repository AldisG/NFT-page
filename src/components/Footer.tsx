import { links } from '../util/linkList';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  FaTiktok,
} from '../util/importedIcons';
import { logo } from '../util/importedImages';

export const socialLinks = [
  <BsFacebook />,
  <BsInstagram />,
  <BsTwitter />,
  <FaTiktok />,
] as any[];
const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLinks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="brand-links">
        {links.map(({ title, data }) => (
          <div className="brand__link" key={title}>
            <h4>{title}</h4>
            <ul>
              {data.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="lower">
        <span> Copyright 2022 NFT</span>
        <span>Launching 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
