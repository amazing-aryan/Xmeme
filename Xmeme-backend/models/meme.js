const mongoose = require('mongoose')

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/memes'
console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => { 
        console.log('connected to MongoDB') 
    })
    .catch((error) => { 
        console.log('error connecting to MongoDB:', error.message) 
    })
const memeSchema = new mongoose.Schema({
    name: String,
    url: String,
    caption: String,
    date: Date
})

memeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Meme', memeSchema)