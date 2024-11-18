const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
});

module.exports = mongoose.model('Like', likeSchema);
