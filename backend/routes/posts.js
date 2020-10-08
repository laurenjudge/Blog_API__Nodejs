const express = require('express');
const mongodb = require('mongodb')

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find().toArray());
});

router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  try {
    const post = await posts.insertOne({
      title: req.body.title,
      text: req.body.text,
      createdAt: Date.now()
    });
    res.status(200).json({
      message: "Post saved"
    });
  } catch(err) {
    console.log(err)
  }
});

router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  try {
    const post = await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).json({
      message: "Post deleted"
    });
  } catch(err) {
    console.log(err)
  }
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://localhost:27017/vue_express', { useNewUrlParser: true, useUnifiedTopology: true }
  )
  return client.db('vue_express').collection('posts');
}

module.exports = router;