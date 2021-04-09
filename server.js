const express = require('express');
const app = express();

const port = 50060;

app.listen(port, () => {
    console.log('Listening on port ' + port + '...');
});