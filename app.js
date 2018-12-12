const express = require('express');
const app = express();
app.use(express.static('public'))










//res.send([a,b,c,d]);
app.listen(3000, () => {
    console.log('Server started...');
});