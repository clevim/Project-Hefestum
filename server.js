// @ts-ignore
const express = require('express'); 
const app = express(); 

// handling CORS 
// @ts-ignore
app.use((req, res, next) => { 
	res.header("Access-Control-Allow-Origin", 
			"http://localhost:4200"); 
	res.header("Access-Control-Allow-Headers", 
			"Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
}); 

// route for handling requests from the Angular client 
// @ts-ignore
app.get('/api/message', (req, res) => { 
	res.json({ message: 
			'Hello GEEKS FOR GEEKS Folks from the Express server!' }); 
}); 

// @ts-ignore
app.listen(3000, () => { 
	console.log('Server listening on port 3000'); 
});
