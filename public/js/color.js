const header = document.getElementById('header');
const color = new URLSearchParams(window.location.search).get('color');


fetch(`/api/v1/colors/${color}`)
  .then(colorContent => colorContent.json())
  .then(color => {
    header.textContent += color.name + '  ';
    header.textContent += color.hex + '  ';
    header.textContent += color.r + '  ';
    header.textContent += color.g + '  ';
    header.textContent += color.b + '  ';
    header.style.color += color.name;

  });
