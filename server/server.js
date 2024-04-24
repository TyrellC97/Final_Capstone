const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DATABASE_URL)

 const db = mongoose.connection
 db.on('error', (error) => console.error(error))
 db.once('open', () => console.log ('Connected to DB'))



// async function connect()  {
// try {await mongoose.connect(database_url, () => {
//     console.log("connected to db")
// })}
//    catch (err) { console.error(err) }
// }

const followingRouter = require('./routes/following') 
app.use('/following', followingRouter)

const postRouter = require('./routes/posts')
app.use('/posts', postRouter)


app.listen(3000, () => {console.log("listening on port 3000")})


