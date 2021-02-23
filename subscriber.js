const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4043

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  res.send({
      message: 'Message Received',
      data: req.body
  });
});

app.post('/hello2', (req, res) => {
    res.send({
        message: 'Message Received',
        data: req.body
    });
  });

app.post('/test1', (req, res) => {
    res.send({
        message: 'Message Received',
        data: req.body
    });
});

app.listen(port, () => {
  console.log(`Example subscriber app listening at http://localhost:${port}`)
})
