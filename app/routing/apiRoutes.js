const artists = require("../data/artists.js");

module.exports = function(app) {
    app.get("/api/artists", function(request, response) {
        response.json(artists);
    })
    app.post("/api/artists", function(request, response) {
        var test = request.body;
        console.log("This works", request.body);
        response.json({ works: true });
    })
}
