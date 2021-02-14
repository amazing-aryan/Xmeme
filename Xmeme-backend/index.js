require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Meme = require('./models/meme')

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

app.get('/memes', (req, res) => {
    Meme.find().sort({ "date": -1 }).limit(100).then(memes => {
        res.json(memes)
    })
})

app.get('/memes/:id', (req, res) => {
    Meme.findById(req.params.id)
        .then(meme => {
            if (meme) {
                res.json(meme)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.post('/memes', (req, res) => {
    const body = req.body
    if (!body.name || !body.url || !body.caption) return res.status(400).json({
        error: 'incomplete information, pls send full info'
    })
    const meme = new Meme({
        name: body.name,
        url: body.url,
        caption: body.caption,
        date: new Date()
    })
    Meme.findOne({ "name": body.name, "url": body.url, "caption": body.caption }, (err, returnedmeme) => {
        if (err) console.log(err);
        if (returnedmeme) {
            res.status(409).end()
        } else {
            meme.save()
                .then(savedmeme => {
                    res.json({ "id": savedmeme.id })
                })
                .catch(error => next(error))
        }
    })
})

app.patch('/memes/:id', (req, res) => {
    const body = req.body
    Meme.findById(req.params.id)
        .then(meme => {
            if (meme) {
                Meme.updateOne({ _id: ObjectId(id) }, { $set: body })
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server is running...')
})