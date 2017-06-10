const likes = require('likes');
const { send } = require('micro');
const cors = require('micro-cors')();

function getLikes(req, res) {
  likes.twitter('tillicouture', (errTwitter, twitter) => {
    if (errTwitter) { console.error(errTwitter); }
    likes.facebook('tilli.fr', (errFb, facebook) => {
      if (errFb) { console.error(errFb); }
      likes.instagram('tillicouture', (errIg, instagram) => {
        if (errIg) { console.error(errIg); }
        send(res, 200, { twitter, facebook, instagram });
      });
    });
  });
}

module.exports = cors(getLikes);
