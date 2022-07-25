// import the express module
const express = require('express');
const bodyParser = require('body-parser');
// assign the express module to the app variable
const app = express();
app.use(bodyParser.json());

// create dummy-data
const mockUserData = [{ name: 'Saad' }, { name: 'Haitam' }];

// get the user data
app.get('/users/:id', function (req, res) {
    // get the id from the url
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'User data retrieved successfully',
        users: req.params.id
    });
});

// post the user data to login endpoint
app.post('/login', function (req, res) {
    // get the user data from the request
    const username = req.body.username;
    const password = req.body.password;

    // check if the user data is valid
    // this should be come from the database
    const mockUsername = 'Wetas';
    const mockPassword = 'superSecret';

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'User Data Matched!',
            token: 'encrypted Token here'
        });
    } else {
        res.json({
            success: false,
            message: 'User Data Not Matched!'
        });
    }
});

// start the server
app.listen(8000, function () {
    console.log('listening on port 8000');
});
