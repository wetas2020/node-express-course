// import the express module
const express = require('express');
// assign the express module to the app variable
const app = express();

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

// start the server
app.listen(8000, function () {
    console.log('listening on port 8000');
});
