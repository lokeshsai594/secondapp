const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./DB/connection');
const swaggerConfig = require('./swagger/swagger-conf');   //linking-the-swagger-file
const swaggerUi = require('swagger-ui-express');  
const swaggerJsdoc = require('swagger-jsdoc');

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//middlewareimportroutes
const PostRouter = require('./routes/posts');
app.use('/posts', PostRouter);

//swaggerconnection
const swaggerDocs = swaggerJsdoc(swaggerConfig.swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

//routes
app.get('/', (req, res) =>{
    res.send("welcome to home page secondapp");
});

//connectDB
connectDB();

//listenserveronport
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
});