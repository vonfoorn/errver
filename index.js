const express = require('express');
const HttpStatus = require('http-status-codes');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.get('/:status', (req, res) => {
  const status = req.params.status;
  const text = HttpStatus.getStatusText(status).toUpperCase();
  res.set('Content-Type', 'text/html');
  return res
    .status(status)
    .send(`
<html>
  <head>
    <title>${status}: ${text}</title>
    <style type="text/css" title="text/css" media="screen">
      body {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .status {
        display: flex;
        flex-direction: column
        justify-content: center;
      }
      .status > * {
        font-size: xx-large;
        font-weight: bold;
      }
      .text {
        color: black;
      }
      .code {
        color: gray;
      }
    </style>
  </head>
  <body>
    <div class='status'>
      <span class='text'>${text}</span>&nbsp;
      <span class='code'>(${status})</span>
    </div>
  </body>
</html>
`);
});

app.listen(PORT, HOST);
console.log(`Serving error pages on http://${HOST}:${PORT}`);