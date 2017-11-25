//------------------------
// LOAD DATA
//------------------------

// Links to data source that holds arrays of information on friends
var friends = require("../data/friends");

//------------------------
// ROUTING
//------------------------

module.exports = function (app) {
    // API GET request
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST request
    app.post("/api/friends", function (req, res) {
        // Object to hold best match
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        // Hold parameters sent from the client as part of the POST request
        var userData = req.body;
        var userScores = userData.scores;

        // Variable used to find the difference between an individual's score
        // and the score of each other user
        var totalDifference;

        // Looping through all of the users in the friend array
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            // Reset total difference ??
            totalDifference = 0;

            // LOG FRIEND TO CONSOLE
            console.log(currentFriend.name);

            // Loop through each friends scores
            for (var w = 0; w < currentFriend.scores.length; w++) {
                var currentFriendScore = currentFriend.scores[w];
                var currentUserScore = userScores[w];

                // Calculate the absolute value of the difference between scores
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            // If the totalDifference is less than the current Best Match assign Best Match to new Friend
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }

        // Add the current user's data to the friends array
        friends.push(userData);

        // Return JSON with bestMatch
        res.json(bestMatch);

    });
};