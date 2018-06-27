const express = require('express');
const hbs = require('hbs');

const port = 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// Helper function for footer
hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
})

// Shows maintenance info on each page
// app.use((req, res, next) => {
//     res.render("maintenance.hbs");
// })

// Automatically hosts all static files in public directory
app.use(express.static(__dirname + "/public"));

// Main route
app.get("/", (req, res) => {
    res.render("index.hbs", {
        someContent : "Main content"
    });
})
// Help route
app.get("/help", (req, res) => {
    res.render("help.hbs", {
        someContent : "Help content"
    });
})

// /bad - send back json with errorMessage
app.get('/error', (req, res) => {
    res.send({
      errorMessage: 'Unable to handle request'
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});