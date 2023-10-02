const bar = document.getElementById('bar');
const setting = document.getElementById('setting');
let colorSwitchers = document.querySelectorAll('.btnz');
const root = document.querySelector(':root');

// Retrieve the color value from local storage
let fix = localStorage.getItem("color");

// Set color//
if (fix) {
  root.style.setProperty('--main-color', fix);
  colorSwitchers.forEach(color => {
    if (color.getAttribute('data-color') === fix) {
      color.classList.add('color-active');
    }
  });
}
//on click function//
setting.onclick = function() {
  bar.classList.toggle('toggle-active');
  setting.classList.toggle('start')
  if (setting.classList.contains(('start'))) {

    setting.classList.toggle('stop');
  } else{
    setting.classList.remove('start')
    setting.classList.add('stop')
};
//switch colors//

  colorSwitchers.forEach(color => {
    color.addEventListener('click', function() {
      fix = color.getAttribute('data-color');
      color.classList.toggle('color-active');
      root.style.setProperty('--main-color', fix);
      localStorage.setItem("color", fix);
    });
  });
}