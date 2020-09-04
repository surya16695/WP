// Reading local file synchronously
// const fs = require('fs');

// let data = fs.readFileSync('newcatalog.json');

// let jsonData = JSON.parse(data);
// body parser to parse the urls and objects to json
var bodyParser = require('body-parser');

//Mongoose
var dbProduct = require('mongoose');

var dbUser = require('mongoose');

// dbProduct.Promise = global.Promise;

dbProduct.connect('mongodb://cartwp:cartwp123@ds113871.mlab.com:13871/cartwp',{ useNewUrlParser: true });
//Ashish credentials were used to extract the data and al;so update the data

dbUser.connect('mongodb://userdb:userdb123@ds113871.mlab.com:13871/cartwp',{ useNewUrlParser: true });
var productSchema = new dbProduct.Schema({
        name: String,
        price: Number,
        description: String,
        quantity: Number,
        image:String,
        reviews:[{body: String, rating: Number}]
});

var userSchema = new dbUser.Schema({
    name: String,
    email: String,
    pwd: String,
    phone: Number,
    address: String,
    balance: Number,
    cart:[{prod:String, quantity: Number, price:Number}]
});

var prods = dbProduct.model('newProd', productSchema);
var user = dbUser.model('Users', userSchema);


module.exports = function(app) {

    app.use(bodyParser.urlencoded({extended:false}));

    app.use(bodyParser.json());
    
    app.get('/', function(req, res){
        prods.find({}, function(err, data){
            try {
                // console.log(data);
                res.send(data);
            } catch(err) {

            };
        });
    });
    app.post('/getuser', function(req, res) {
        console.log(req.body);
        // var findobj = {"email": req.body.mail}
        // console.log(findobj);
        user.findOne({"email": req.body.mail, "pwd":req.body.pwd}, function(err, data){
            try {
                console.log(data);
                res.send(data);
            } catch(err) {

            };
        })
    })

    app.post('/login', function(req, res) {
        // console.log(req.body);
        user.findOne({"email": req.body.mail, "pwd": req.body.pwd}, function(err, data) {
            try {
                // console.log(data);  
                if(data === null) {
                    return res.send(false);
                } else {
                    res.send(true);
                }
            } catch(err) {

            }
        })
    });
    app.post('/register', function(req,res){
        user.find({"email":req.body.email}, function(err, data){
            try{
                console.log(data);
                if(data.length === 0) {
                    user(req.body).save(function(err){
                        try{
                            console.log("stored on db");
                            res.send(req.body);
                        } catch(err) {
                            console.log(err);
                        }
                    });
                } else {
                    res.send(false);
                }
            } catch(err) {

            }
        });
    });
    app.post('/rev', function(req,res){
        console.log("Re");
        console.log(req.body);
        prods.findOneAndUpdate({"name": req.body.pro}, {"$push":{reviews:{"body": req.body.com, "rating": req.body.rat}}} ,function(err){
            if(err) throw err;
            console.log("Stored on db");
            res.send({"happy":"stored"})
        });
        // prods.
    });
    app.post('/pay', function(req, res){
        for(var i = 0; i < req.body.crt.length; i++) {
            var newquantity = req.body.crt[i].totquan-req.body.crt[i].quantity
            console.log(req.body.crt[i]);
            prods.findOneAndUpdate({name: req.body.crt[i].name}, {
                $set:{quantity: newquantity}
            }, function(err){
                if(err) throw err;
                console.log("prod updated")
                // res.send({"update":"updated"});
            })
            var cartobj = {prod:req.body.crt[i].name, quantity: req.body.crt[i].quantity, price: req.body.crt[i].price};
            user.findOneAndUpdate({email: req.body.mail},{$push:{cart:cartobj}}, function(err){
                if(err) throw err;
                console.log("user cart prod name updated");
            });
            user.findOneAndUpdate({email: req.body.mail},{$set:{address:req.body.address}}, function(err){
                if(err) throw err;
                console.log("user address updated");
            });
        }

    });
}
