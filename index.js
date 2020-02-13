const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static('build'));

app.listen(PORT, function(){
    console.log(`app running on port ${port}`);
});