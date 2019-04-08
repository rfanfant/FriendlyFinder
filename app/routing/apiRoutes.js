// friends data is required from friends.js
var friends = require("../data/friends.js");


// export/expose the following URLs
module.exports = function (app) {

    // return friends data if /api/friends URL is hit
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Client has sumbited a friend survey so process it
    app.post("/api/friends", function (req, res) {

        // capture the submitted user information
        let userData = req.body;

        // will fill this object out when a best match is found
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // loop through our entire list of friends
        for (let i = 0; i < friends.length; i++) {

            var totalDifference = 0;

            // look for best match based on personality score
            for (let j=0; j < friends[i].scores[j]; j++){
                //compare each questions and throw in a randomizing function(LOL)
                totalDifference += Math.abs(parseInt(userData.scores[j]) - parseInt(friends[i].scores[j]) + Math.random());
            }

            // if a better match is found, save it
            if (totalDifference < bestMatch.friendDifference){

                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
                console.log("found a match");
            }
        }
        // add the new friend into the friends list
        friends.push(userData);
        // return the match back to our survey
        res.json(bestMatch);
    });

}
