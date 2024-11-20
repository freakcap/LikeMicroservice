const axios = require("axios");

const POST_SERVICE_BASE_URL = process.env.POST_SERVICE_URL;
const COMMENT_SERVICE_BASE_URL = process.env.COMMENT_SERVICE_URL;

async function findPostById(postId) {
  try {
    const response = await axios.get(
      `${POST_SERVICE_BASE_URL}/api/v1/posts/${postId}`,
    );

    // If we get a 200 response, the post exists
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return false;
    }
    console.error("Error checking post existence:", err);
    return false;
  }
}

async function findCommentById(commentId) {
  try {
    const response = await axios.get(
      `${COMMENT_SERVICE_BASE_URL}/api/v1/comments/${commentId}`,
    );

    // If we get a 200 response, the comment exists
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return false;
    }
    console.error("Error checking comment existence:", err);
    return false;
  }
}

module.exports = { findPostById, findCommentById };
