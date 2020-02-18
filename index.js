const express = require('express');
const app = express();
const compression = require('compression');
const PORT = process.env.PORT || 3001;

app.use(compression());
app.use(express.static('build'));

app.listen(PORT, function(){
    console.log(`app running on port ${PORT}`);
});