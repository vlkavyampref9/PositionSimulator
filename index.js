import express from 'express';
import bodyParser from 'body-parser';
import { postLocationUpdates } from './scheduling.js';


const app = express();
const PORT = 4500;
const VEHCOUNT = 25;

app.use(bodyParser.json());

app.get('/', (req, res)=> {
    
    //request object updates every second 
    res.send("Simulator Homepage");
});

app.listen(PORT, () => {
//run one location update per second
postLocationUpdates(VEHCOUNT);
console.log(`Server running on port: http://localhost:${PORT}`);
});


