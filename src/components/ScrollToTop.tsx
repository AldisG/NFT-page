import React, { useState } from 'react';
import { BsChevronUp } from '../util/importedIcons';
import { motion } from 'framer-motion';

const bouncyArrow = {
  start: { y: 0 },
  end: { y: 10 },
  transition: { yoyo: Infinity, duration: 1.5 },
};

const ScrollToTop = () => {
  const [visibleBar, setVisibleBar] = useState(false);
  window.addEventListener('scroll', () => {
    setVisibleBar(window.pageYOffset > 100);
  });
  return (
    <div className={`scroll-top ${!visibleBar ? 'invisible-bar' : ''}`}>
      <a href="#" className="sign-up-button scroll-top-btn">
        <motion.div
          initial={bouncyArrow.start}
          animate={bouncyArrow.end}
          draggable={true}
          transition={bouncyArrow.transition}
        >
          <BsChevronUp className="animated-icon" />
        </motion.div>
      </a>
    </div>
  );
};

export default ScrollToTop;
