
// // access packages
// const express = require('express')
// const cors = require('cors')


// //create app instance
// const app = express()


// //setup middleware
// app.use(express.json())
// app.use(cors())

// // End Point
// const {createMessage} = require('./controller')

// app.post('/api/messages', createMessage)

// // start server 
// app.listen(4004, () => console.log('Server running on port 4004'))

// Access packages
const express = require('express')
const cors = require('cors')

// Create app instance
const app = express()

// Setup middleware
app.use(express.json())
app.use(cors())

// Endpoints
const {createMessage} = require('./controller')

app.post('/api/messages', createMessage)

// Start server
app.listen(4004, () => console.log('Server running on port 4004'))