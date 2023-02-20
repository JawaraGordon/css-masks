const addMask = () => {
  const shape = document.getElementById('shapes').value;
  const mask = document.querySelector('.mask');
  mask.classList.add(shape);
  const shapeSelect = document.getElementById('shapes');
  shapeSelect.addEventListener('click', function () {
    mask.classList.remove(shape);
  });
};
const onSubmit = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};
const colorPicker = () => {
  onSubmit();
  const num = document.getElementById('color').value;
  document.documentElement.style.setProperty('--primary-color', '#' + num);
  onSubmit();
};
const backgroundImagePicker = () => {
  onSubmit();
  const url = document.getElementById('url').value;

  // sanitize input for xss
  const sanitizedStr = url.replace(/(<([^>]+)>)/gi, '');
  document.documentElement.style.setProperty(
    '--background-image',
    `url(${sanitizedStr})`
  );
  onSubmit();
};
addMask();
