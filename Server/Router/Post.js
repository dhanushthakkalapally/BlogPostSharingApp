const express  = require('express');
const Posts = require('../controllers/Post')


router = express.Router();

router.post('/createPost',Posts.createPost);

router.get('/',Posts.getPosts);

router.get('/allPosts',Posts.getAllPosts);

module.exports = router;
