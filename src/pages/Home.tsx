import HomeComponent from '../components/HomeComponent';
import {
  Clients,
  Footer,
  Free,
  Like,
  Release,
  SignUp,
  SuperRare,
} from '../util/componentsList';

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Home;
