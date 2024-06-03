
import { Colour } from '/src/palette.js';



// Root element styles ========================================================

const html = document.querySelector('html');
const htmlStyle = {
  width: '100%',
  height: 'auto',
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: Colour.smokyBlack,
  color: Colour.white,
};
Object.assign(html.style, htmlStyle);

const body = document.querySelector('body');
const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-start',
  margin: 0,
  padding: 0,
  border: 0,
  width: '100%',
  height: 'auto',
  backgroundColor: 'transparent',
};
Object.assign(body.style, bodyStyle);


// Font styles =================================================================

// TODO link to google api fonts
document.body.style.fontFamily = 'Arial';
document.body.style.fontSize = '12px';


// Events ======================================================================

window.onload = () => {
  console.log('Window loaded');
}

window.onmousemove = (event) => {
  // Make visible 'mj-nav' element when pointer is near
  const mjNav = document.querySelector('mj-nav');
  const navRect = mjNav.getBoundingClientRect();
  const tolerance = 50;
  const isNearNavBar = (
    event.clientY >= (navRect.top - tolerance)
    && event.clientY <= (navRect.bottom + tolerance)
  );
  if (isNearNavBar && !!mjNav.getAttribute('showing')) {
    mjNav.getAttribute('showing') === 'false'
      ? mjNav.setAttribute('showing', 'true')
      : null;
  }
};

window.onscroll = () => {
  // hide the 'mj-nav' element when user scroll down, and appear when scroll up.
  // no matter the current scroll position.
  const mjNav = document.querySelector('mj-nav');
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  if (scrollPos > mjNav.lastScrollPos) {
    mjNav.getAttribute('showing') === 'true'
      ? mjNav.setAttribute('showing', 'false')
      : null;
  }
  if (scrollPos < mjNav.lastScrollPos) {
    mjNav.getAttribute('showing') === 'false'
      ? mjNav.setAttribute('showing', 'true')
      : null;
  }
  mjNav.lastScrollPos = scrollPos;
}