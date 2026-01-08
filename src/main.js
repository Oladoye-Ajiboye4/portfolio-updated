const htmlElement = document.documentElement
const body = document.getElementById('body')
const navMenuBtn = document.getElementById('nav-menu-btn')
const navCloseBtn = document.getElementById('nav-close-btn')
const responsiveNav = document.getElementById('responsive-nav')
const main = document.getElementById('main')
const nightModeButtons = document.querySelectorAll('.night-mode');
const modeSliders = document.querySelectorAll('.mode-slider');

if (localStorage.getItem('theme') === 'dark') {
  htmlElement.classList.add('dark');
}


const handleFeature = () => {
  responsiveNav.classList.toggle('translate-x-full');
  navCloseBtn.classList.toggle('hidden')
  navMenuBtn.classList.toggle('hidden')
  main.classList.toggle('blur-xs');
  main.classList.toggle('bg-black/2');
  main.classList.toggle('pointer-events-none');
}
navMenuBtn.addEventListener('click', () => {
  responsiveNav.classList.add('flex')

  handleFeature()
  responsiveNav.classList.remove('hidden')

})

navCloseBtn.addEventListener('click', () => {
  handleFeature()

})

nightModeButtons.forEach(element => {
  element.addEventListener('click', () => {
    htmlElement.classList.toggle(
      "dark");
    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    modeSliders.forEach(element => {
      element.classList.toggle('translate-x-10');
      element.classList.toggle('bg-purple-400');
      element.classList.toggle('bg-emerald-500');
    });

  });
});
