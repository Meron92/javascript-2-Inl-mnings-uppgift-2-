const express = require('express');
const cors = require('cors');
// sätta upp webbservern
const app = express();
//bestämma vilken port vi vill targeta
const port = 5000;
app.use(cors({
    origin: '*'
}));
app.use(express.static('public'));

app.listen(port, () => {
    console.log('server is listening on port' + port);
});