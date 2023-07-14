const express = require("express");
const matchRoute = require("./routes/matchRoute");
const teamRoute = require("./routes/teamRoute");
var bodyParser = require('body-parser')
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello");
});

app.use(bodyParser.json())
app.use('/matches',matchRoute);
app.use('/teams',teamRoute);

const PORT = process.env.PORT | 5000
app.listen(PORT, ()=>{
    console.log(`server is running in ${PORT}`);
})