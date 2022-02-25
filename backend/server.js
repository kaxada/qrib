const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('qrib api version 1.0'));

app.post('/api/v1/location',async(req,res)=> console.log(await req.body))

app.listen(5050, () => console.log('qrib api version 1.0 listening on port 5050!'));