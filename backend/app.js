const express = require('express');
const app = express();

const articleRouter = require('./routes/articles');

app.use('/articles', articleRouter);

app.use('/', (req, res) => {
  const articles =[{
    title: 'Test Article',
    createdAt: Date.now(),
    description: 'Test desc'
  }]
  res.send(articles)
})

app.listen(3000);