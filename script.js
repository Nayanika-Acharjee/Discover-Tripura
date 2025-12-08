const attrWrap = document.querySelector('.attractions-wrap');
let scrollAmount = 0;
setInterval(() => {
scrollAmount += 1;
attrWrap.scrollTo({ left: scrollAmount, behavior: 'smooth' });
if (scrollAmount >= attrWrap.scrollWidth - attrWrap.clientWidth) scrollAmount = 0;
}, 30);
function zoomCard(card) {
  card.classList.toggle("zoomed");
}
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.explore-wrap');
  const cards = [...document.querySelectorAll('.explore-card')];

  if (!wrap) {
    console.error("ERROR: .explore-wrap not found");
    return;
  }

  /* -------------------------
      AUTO SLIDING
  --------------------------*/
  let scrollX = 0;
  setInterval(() => {
    scrollX += 1;
    wrap.scrollLeft = scrollX;
    if (scrollX >= wrap.scrollWidth - wrap.clientWidth) {
      scrollX = 0;
    }
  }, 30);

  /* -------------------------
      CARD UPWARD LIFT
  --------------------------*/
  cards.forEach(card => {
    card.addEventListener('click', (e) => {

      // Do NOT lift card when clicking Explore link
      if (e.target.tagName === 'A') return;

      // If THIS card is already lifted, drop it back
      if (card.classList.contains('upward')) {
        card.classList.remove('upward');
        return; // stop here
      }

      // Otherwise lift this card & drop all others
      cards.forEach(c => c.classList.remove('upward'));
      card.classList.add('upward');
    });
  });
});





    // PRELOADER
    window.onload = () => {
      document.getElementById('preloader').style.display = 'none';
    }

    // SWIPER
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: { delay: 2500 },
    });

    // DARK MODE
    function toggleDark(){ document.body.classList.toggle('dark'); }

    // SCROLL TOP BUTTON
    window.addEventListener('scroll', () => {
      document.getElementById('topBtn').style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // GSAP ANIMATIONS
    gsap.from('.hero-content', { y: 40, opacity: 0, duration: 1.5 });
    gsap.from('.section-title', {
      scrollTrigger: '.section-title',
      y: 50,
      opacity: 0,
      duration: 1
    });