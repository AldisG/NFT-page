import React, { useState } from 'react';
import { BsChevronUp } from '../util/importedIcons';
const ScrollToTop = () => {
  const [visibleBar, setVisibleBar] = useState(false);
  window.addEventListener('scroll', () => {
    setVisibleBar(window.pageYOffset > 100);
  });
  return (
    <div className={`scroll-top ${!visibleBar ? 'invisible-bar' : ''}`}>
      <a href="#" className="sign-up-button scroll-top-btn">
        <BsChevronUp />
      </a>
    </div>
  );
};

export default ScrollToTop;
