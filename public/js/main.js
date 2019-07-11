const root = document.getElementById('root');
const colorsList = document.createElement('ul');

fetch('/api/v1/colors')
  .then(colors => colors.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent = `${color.name} - ${color.hex} - ${color.r} - ${color.g} - ${color.b}`;
      li.style.color = '#' + color.hex;

      const a = document.createElement('a');
      a.href = `/color.html?color=${color.name}`;
      a.appendChild(li);
      colorsList.appendChild(a);

    });
  });

root.appendChild(colorsList);
