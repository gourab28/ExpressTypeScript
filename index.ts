import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "TypeScript Working" });
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})