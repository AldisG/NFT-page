import { useEffect, useState } from 'react';
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
import { fixScrollReviel } from '../util/transformResets';
import { revealContents } from '../util/revielContents';

const Home = () => {
  useEffect(() => {
    revealContents();
    // transform property is glitchy, so I remove it here after 1.5s
    fixScrollReviel();
  }, []);

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
