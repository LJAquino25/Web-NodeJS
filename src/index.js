const express = require('express');
const app = express();
const port = 3000;


//Middleware to parse JSON bodies
app.use(express.json());

//sample data
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

//GET endpoint
app.get('/items', (req, res) => {
    res.json(items);
});

//GET endpoint id
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});