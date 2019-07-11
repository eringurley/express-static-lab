const header = document.getElementById('header');
const color = new URLSearchParams(window.location.search).get('color');


fetch(`/api/v1/colors/${color}`)
  .then(colorContent => colorContent.json())
  .then(color => {
    header.textContent += color.name + ' ';
    header.textContent += color.hex + ' ';
    header.textContent += color.r + ' ';
    header.textContent += color.g + ' ';
    header.textContent += color.b + ' ';
    header.style.color += color.name;

  });
  



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