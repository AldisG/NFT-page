import scrollreveal from 'scrollreveal';

export const revealContents = () => {
  const scrollAnims = scrollreveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    reset: false,
  });
  scrollAnims.reveal(
    `nav, .home, .free, .clients, .super-rare, .releases, .like, .signup,footer
    `,
    { interval: 500 }
  );
};
export default {};
