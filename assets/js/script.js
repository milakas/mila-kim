'use strict';

const toggleBurgerMenu = () => {
  const header = document.querySelector('.header');
  const headerLinks = document.querySelectorAll('.header__link');
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const body = document.body;

  const toggleActiveClass = () => {
    [burger, menu, header].forEach((element) =>
      element.classList.toggle('active')
    );
    body.classList.toggle('lock');
    footer.classList.toggle('fixed');
  };

  const removeActiveClass = () => {
    [burger, menu, header].forEach((element) =>
      element.classList.remove('active')
    );
    body.classList.remove('lock');
    footer.classList.toggle('fixed');
  };

  burger.addEventListener('click', toggleActiveClass);

  headerLinks.forEach((link) => {
    link.addEventListener('click', removeActiveClass);
  });
};

const owl = $('.owl-carousel');
const addOwlCarousel = () =>
  owl.owlCarousel({
    loop: false,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1.6,
        merge: true,
      },

      360: {
        items: 1.8,
        merge: true,
      },
      630: {
        items: 2.6,
        merge: true,
      },
      700: {
        items: 2.8,
        merge: true,
      },
      900: {
        items: 3.8,
        merge: true,
      },
      1280: {
        items: 4.5,
        merge: true,
      },
    },
  });

const addCursorNotAllowed = () => {
  const socialLinks = document.querySelectorAll('.card__sci-logo');
  socialLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      link.classList.add('not-allowed');
      link.title = 'Oups! Not allowed yet!';
    }
  });
};

const addSmoothScroll = () => {
  const headerLinks = document.querySelectorAll('.header__link');
  headerLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  toggleBurgerMenu();
  addOwlCarousel();
  addSmoothScroll();
  addCursorNotAllowed();
});
