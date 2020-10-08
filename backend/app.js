const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());


const posts = require('./routes/posts');

app.use('/posts', posts);


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running on ${port}`));