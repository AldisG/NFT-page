export const fixScrollReviel = () => {
  window.setTimeout(() => {
    const home = document.getElementById('home') as HTMLElement;
    const nav = document.getElementById('nav') as HTMLElement;
    home.style.transform = 'none';
    nav.style.transform = 'none';
  }, 1500);
  return () => {
    fixScrollReviel();
  };
};

export default {};
