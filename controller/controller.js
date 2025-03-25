const home = (req,res)=>{
    // res.send("HomePage");
    res.render('index');
}

const about = (req,res)=>{
    res.render("about");
}
const contact = (req,res)=>{
    res.render("conact");
}
const shop = (req,res)=>{
    res.render("shop");
}
const cards = (req,res)=>{
    res.render("cards");
}
const cart = (req,res)=>{
    res.render("cart");
}
const whoweare = (req,res)=>{
    res.render("whowe");
}

const errorPage = (req,res)=>{
    res.render("404");
}

// module.exports = home
// module.exports = about
module.exports = {home, about, contact, shop, cards, cart, whoweare, errorPage}