//nav dinâmica
const nav = document.querySelector('.navbar');
const sentinel = document.querySelector('.sentinel');

const stickyNav = function(entries) {
  [entry] = entries;

  if(!entry.isIntersecting) {
    nav.classList.remove('top');
    nav.style.transform = 'translateY(-70px)';
    setTimeout(function() {
      nav.style.transform = 'translateY(0px)';
    }, 300);
  } else {
    nav.classList.add('top');
    nav.style.transform = 'translateY(-70px)';
    setTimeout(function() {
      nav.style.transform = 'translateY(0px)';
    }, 300);
  }
}

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
})

navObserver.observe(sentinel);

//smooth scroll
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {link.addEventListener('click', function(e) {
  const sectionId = link.getAttribute('href');
  const section = document.querySelector(sectionId);
  section.scrollIntoView({behavior: 'smooth'});
})})
