const fetch = require("node-fetch")
const express = require("express")
const app = express()
const port = 5000

app.get('/', async (req, res) => {
	const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${req.query.name}`, {
		headers: {
			'X-Api-Key': '1RQN5gMhzkngEsPloobrbw==Ij8wn0TLPC8zPIsr'
		}
	});
	const data = await response.json();
	res.json(data);
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})