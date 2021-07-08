const express = require('express');
const path = require('path');


const homeRoutes = require('./routes/home');
const usersRoute = require('./routes/customer');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRoute);
app.use('/', homeRoutes);


app.listen(3000);