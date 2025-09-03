const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/note');

const port = process.env.PORT || 3000;
const app = express()
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    const notes = await Note.find({})
    res.render('index', { notes })
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create', async (req, res) => {
    const { title, content } = req.body
    const newNote = await Note.create({
        title: title.trim(),
        content: content.trim()
    })
    res.redirect('/')
})

app.get('/delete/:id', async (req, res) => {
    const { id } = req.params
    await Note.findByIdAndDelete(id)
    res.redirect('/')
})

app.get('/edit/:id', async (req, res) => {
    const { id } = req.params
    const note = await Note.findById(id)
    res.render('edit', { note: note })
})

app.post('/edit/:id', async (req, res) => {
    const { title, content } = req.body
    const { id } = req.params
    await Note.findByIdAndUpdate(id, {
        title: title.trim(),
        content: content.trim()
    })
    res.redirect('/')
})

app.get('/show/:id', async (req, res) => {
    const { id } = req.params
    const note = await Note.findById(id)
    res.render('show', { note: note })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
