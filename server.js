import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import expressEjsLayouts from 'express-ejs-layouts';
import router from './routers/pageRoute.js';

// init express
const app = express();

// environment veriable
dotenv.config();
const PORT = process.env.PORT || 4040;

// data manage
app.use(express.json());
app.use(express.urlencoded( {extended : false}));

// ejs init
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "layouts/app")


// create static folder
app.use(express.static('public'));

// init router
app.use(router)

// server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})