const header = document.getElementById('header');
const color = new URLSearchParams(window.location.search).get(color);

header.textContent += color;
header.style.color = color;

// fetch('/api/v1/colors')
//   .then(colorContent => colorContent.json())
//   .then(colorContent => {
//     colorContent.forEach(color => {
//       const li = document.createElement('li');
//       li.textContent = `${color.name} - ${color.hex} - ${color.r} - ${color.g} - ${color.b}`;
//       li.style.color = '#' + color.hex;
//       colorContent.appendChild(li);
//     });
//   });

// header.appendChild(color);


//when making the routes

// app.get('/api/v1/dogs/:whatever'), (req, res) =>

// this becomes a variable and you can grab the value with 
// console.log(req.params.whatever);
// res.end(reg.params.whatever);

// app.get('/api/v1/dogs/:name')
// const dog = dogs.find(dog => dog.name === req.params.name)
// res.send(dog)
// \

// just test the app test