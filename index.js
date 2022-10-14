const express = require('express');
const app = express();
const phone = require('./phones.json')
const port = 5000;
app.get('/', (req, res) => {
    res.send("hello world form node after changing the node after changing again changing after after afters afters")
});
app.get('/phone', (req, res) => {
    res.send(phone)
})
app.listen(port, () => {
    console.log(`Server running on port : ${port}`)
})