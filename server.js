// import the express module
const express = require('express');
// assign the express module to the app variable
const app = express();

// create dammy data
const mockUserData = [{ name: 'Saad' }, { name: 'Haitam' }];

// get the user data
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'Users retrieved successfully',
        users: mockUserData
    });
});

// start the server
app.listen(8000, function () {
    console.log('listening on port 8000');
});
