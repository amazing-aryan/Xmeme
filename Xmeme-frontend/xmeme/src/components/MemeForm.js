import React from 'react'
import './memeform.css'

const MemeForm = (props) => {
    return (
        <div>
        <h1>Submit a new Meme</h1>
            <form>
                <div className="input-box">Name: <input value={props.newName} onChange={props.handleNameChange} /></div>
                <div className="input-box">URL: <input value={props.newURL} onChange={props.handleURLChange} /></div>
                <div className="input-box">Caption: <input value={props.newCaption} onChange={props.handleCaptionChange} /></div>
                <div></div>
                <div><button type="submit" onClick={props.addMeme}>Add Meme</button></div>
            </form>
        </div>
    )
}

export default MemeForm