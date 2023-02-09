const addMask = () => {
  const shape = document.getElementById('shapes').value;
  const mask = document.querySelector('.mask');
  mask.classList.add(shape);
};

addMask();
