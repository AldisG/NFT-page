import React, { useState } from 'react';
import { BsChevronUp } from '../util/importedIcons';
const ScrollToTop = () => {
  const [visibleBar, setVisibleBar] = useState(false);
  window.addEventListener('scroll', () => {
    setVisibleBar(window.pageYOffset > 100);
  });
  return <></>;
};

export default ScrollToTop;
