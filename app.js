const addMask = () => {
  const shape = document.getElementById('shapes').value;
  const mask = document.querySelector('.mask');
  mask.classList.add(shape);
  const shapeSelect = document.getElementById('shapes');
  shapeSelect.addEventListener('click', function () {
    mask.classList.remove(shape);
  });
};

addMask();

const colorPicker = () => {
  const num = document.getElementById('color').value;
  console.log(num);
  document.documentElement.style.setProperty('--primary-color', '#' + num);
};
