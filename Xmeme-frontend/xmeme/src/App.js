import React, { useState, useEffect } from 'react'
import MemeService from './services/xmeme'
import MemeForm from './components/MemeForm'
import Memes from './components/Memes'

const App = () => {
  const [memes, setMemes] = useState([])
  const [newName, setNewName] = useState('')
  const [newURL, setNewURL] = useState('')
  const [newCaption, setNewCaption] = useState('')

  useEffect(() => {
    MemeService
      .getRecent()
      .then(returnedMemes => {
        setMemes(returnedMemes)
      })
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleURLChange = (event) => setNewURL(event.target.value)

  const handleCaptionChange = (event) => setNewCaption(event.target.value)

  const addMeme = (event) => {
    event.preventDefault();
    const memeObject = {
      name: newName,
      url: newURL,
      caption: newCaption
    }
    MemeService
    .create(memeObject)
    .then(returnedId => {
      memeObject.id = returnedId
      setMemes([memeObject].concat(memes))
    })
    .catch(error => {
      console.log(error)
    })
    setNewCaption('')
    setNewName('')
    setNewURL('')
  }

  return (
    <div>
    <MemeForm newName={newName} handleNameChange={handleNameChange} newURL={newURL} handleURLChange={handleURLChange} newCaption={newCaption} handleCaptionChange={handleCaptionChange} addMeme={addMeme} />
    <Memes memes={memes} />
    </div>
  )
}

export default App;
