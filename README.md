# express-static-lab

//when making the routes

app.get('/api/v1/dogs/:whatever'), (req, res) =>

this becomes a variable and you can grab the value with 
console.log(req.params.whatever);
res.end(reg.params.whatever);

app.get('/api/v1/dogs/:name')
const dog = dogs.find(dog => dog.name === req.params.name)
res.send(dog)
\

just test the app test