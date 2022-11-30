const express = require('express');
const routes = require('./config/routes');
const cors = require('cors')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
});