const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const verifyToken = require("../middlewares/authMiddleware");

router.get('/posts/:postId/count', verifyToken, likeController.getLikeCountForPost);
router.get('/comments/:commentId/count', verifyToken, likeController.getLikeCountForComment);
router.post('/posts/:postId', verifyToken, likeController.addLikeToPost);
router.post('/comments/:commentId', verifyToken, likeController.addLikeToComment);
router.delete('/posts/:postId', verifyToken, likeController.unlikePost);
router.delete('/comments/:postId', verifyToken, likeController.unlikeComment)

module.exports = router;
