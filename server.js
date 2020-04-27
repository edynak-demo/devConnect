const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Success, your API is running...'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Edynak's port ${PORT}`));
