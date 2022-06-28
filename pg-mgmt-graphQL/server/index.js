const colors = require("colors");
const cors = require("cors");
const express = require("express");
require('dotenv').config();
const {graphqlHTTP} = require("express-graphql");
const connectDb = require("./config/DB");
const schema = require('./schema/schema');

const port = process.env.PORT || 5000;

const app = express();
// connec database 
connectDb();
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV ==="development",
}));

app.listen(port,()=>console.log(`Server running on PORT : ${port}`))