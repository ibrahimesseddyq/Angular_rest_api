let express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const data = {};
const port = process.env.NODE_ENV ||
    8080;
app.get('/data', (req, res) => {
    res.send(data)
})
app.listen(port, () => {
    console.log(`listen on port ${port}`);
})