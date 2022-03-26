// server/index.js

const express = require("express");
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get("/api", (req: any, res: any) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});