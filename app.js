require('dotenv').config();

var express =require('express');
var app =express();
var user = require('./controllers/usercontroller')
var info = require('./controllers/info-controller')
var sequelize = require('./db');

sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));
// app.use('/test', (req, res)=>{
//     res.send("test");
// })

app.use('/user', user);

app.use(require('./middleware/validate-session'));
app.use('/info', info);

app.listen(process.env.PORT, ()=>{
    console.log('server is listening on ${process.env.PORT}')
})


