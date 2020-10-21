let express = require('express');
let router = express.Router();
let app = express();

/* GET home page. */
router.get('/', (req, res, next)  => {
  return res.redirect('/words/get-words')
});




module.exports = router;
