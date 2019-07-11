const root = document.getElementById('root');
const colorsList = document.createElement('ul');

fetch('/api/v1/colors')
  .then(colors => colors.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      console.log(li)
      li.textContent = `${color.name} - ${color.hex} - ${color.r} - ${color.g} - ${color.b}`
        colorsList.appendChild(li);
  });
  })

root.appendChild(colorsList);