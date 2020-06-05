const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index')



app.set('view engine','ejs');
app.set('views', __dirname+"/views");
app.set('layout','layouts/layout');
app.use(expressLayouts)
app.use(express.static('public'))

// const {MongoClient} = require('mongodb');
// const uri = 'mongodb+srv://waleed:vf-123456@freeclustor-mrls8.mongodb.net/test?retryWrites=true&w=majority'
// const client = new MongoClient(uri);
// await client.connect();

// await listDatabases(client);

// try {
//     await client.connect();

//     await listDatabases(client);
 
// } catch (e) {
//     console.error(e);
// }finally {
//     await client.close();
// }
const connectDB = require('./db/connection')
connectDB();


app.use('/',indexRouter)
app.use('/api/userModel', require('./api/User'));

app.listen(process.env.PORT||5000)