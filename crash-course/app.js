const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// use middleware and next()
app.use((req, res, next) => {
   console.log('new request made:');
   console.log('host: ', req.hostname);
   console.log('path: ', req.path);
   console.log('method: ', req.method);
   next();
});


// two arguments, what path/url and function that takes req and res objec
app.get('/', (req,res) => {
   // res.send('<p>Home page</p>');
   res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req,res) => {
   // res.send('<p>About page</p>');
   res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
   res.redirect('about');
});

// 404 page
// use middleware???
app.use((req, res) => {
   res.status(404).sendFile('./views/404.html', { root: __dirname });
});