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
