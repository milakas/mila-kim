window.onload = () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 500);
};
