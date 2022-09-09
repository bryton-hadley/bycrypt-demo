const bcrypt = require('bcryptjs')
const chats = []

module.exports = {

    createMessage: (req, res) => {
         console.log(req.body)
         
         const {pin, message} = req.body
         const messages = {
            pin, message
         }
         res.status(200).send(messages)



    }
}

