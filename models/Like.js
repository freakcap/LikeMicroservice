const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts' },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }
});

module.exports = mongoose.model('Likes', likeSchema);
