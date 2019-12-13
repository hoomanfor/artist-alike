const artists = require("../data/artists.js");

module.exports = function(app) {
    app.get("/api/artists", function(request, response) {
        response.json(artists);
    })
    app.post("/api/artists", function(request, response) {
        var user = request.body;
        var compArr = [];
        var sum = 0;
        for (var i = 0; i < artists.length; i++) {
            for (var j = 0; j < artists[i].answers.length; j++) {
                var dif = artists[i].answers[j] - user.answers[j];
                dif = Math.abs(dif);
                sum += dif;
                if (j == 9) {
                    compArr.push(sum);
                    sum = 0; 
                }
            }
        }
        var mostCompSum = Math.min(...compArr);
        var mostCompIndex = compArr.indexOf(mostCompSum);
        var matchName = artists[mostCompIndex].name;
        var matchPhoto = artists[mostCompIndex].photo;
        response.json({ match_name: matchName, match_photo: matchPhoto });
    })
}
