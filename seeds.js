var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://www.photosforclass.com/download/pixabay-1846142?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104496f7c679a6e9b4b8_960.jpg&user=Pexels",
        description: "Cold-pressed tumblr offal four dollar toast. Tote bag asymmetrical farm-to-table, offal neutra tumeric 8-bit viral tumblr photo booth cold-pressed pop-up. "
    },
    {
        name: "Teeny Mount",
        image: "https://www.photosforclass.com/download/flickr-882244782",
        description: "Keytar tofu godard shoreditch, forage 8-bit wolf mlkshk poutine live-edge pork belly trust fund banh mi pinterest. "
    },
    {
        name: "Guincho Beach",
        image: "https://www.photosforclass.com/download/pixabay-1845906?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f7c679a6e9b4b8_960.jpg&user=Pexels",
        description: "Tumeric franzen you probably haven't heard of them, put a bird on it hexagon kogi 8-bit semiotics retro meh beard hot chicken."
    }
]

function seedDB(){
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //           console.log("added a campground");
        //           // create comment
        //           Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("created a new comment");
        //                     }
        //                 });
        //             }
        //     }); 
        // });
    });
}

module.exports = seedDB;

