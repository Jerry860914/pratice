const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/posts")
app.use("/api/posts",posts);

//handle production
if(process.env.NODE_ENV === 'production'){
    //Static folder
    console.log(123);
    app.use(express.static(__dirname + '/public/'));

    //handle spa    
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//123123123123123123
const port = process.env.PROT || 3000;
app.listen(port, () => console.log('Server strated on port'+port));

