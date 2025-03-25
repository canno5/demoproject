const express = require("express");
const home = require("../controller/controller");
const router = express.Router();

// router.route("/").get((req,res)=>{
//     res.send("Hello World");
// });

router.route("/").get(home.home);
router.route("/about").get(home.about);
router.route("/contact").get(home.contact);
router.route("/shop").get(home.shop);
router.route("/whowe").get(home.whoweare);
router.route("/cards").get(home.cards);
router.route("/cart").get(home.cart);
router.route("*").get(home.errorPage);
// router.get('/', home);

module.exports = router;