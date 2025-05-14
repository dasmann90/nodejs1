const express = require('express');
const app = express();
const taskRouter = require('./routes/task')
const port = 3000;

app.use(express.static('./public'));

app.use('/api/v1/task',taskRouter);

app.listen(port);
