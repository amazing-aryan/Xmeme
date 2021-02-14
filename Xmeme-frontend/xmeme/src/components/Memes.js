import React from 'react'
import './memes.css'

const MemeList = (props) => props.memes.map(meme => {
    return (
        <li className="cards_item">
            <div className="card">
                <div className="card_image"><img src={meme.url} loading="lazy" alt=""></img></div>
                <div className="card_content">
                    <h2 className="card_title">{meme.name}</h2>
                    <p className="card_text">{meme.caption}</p>
                </div>
            </div>
        </li>
    )
})

const Memes = (props) => {
    console.log(props.memes);
    return (
        <div className="main">
            <h1>Recent Memes</h1>
            <ul className="cards">
                <MemeList memes={props.memes} />
            </ul>
        </div>
    )
}

export default Memes