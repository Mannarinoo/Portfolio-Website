import React from 'react'
import './Card.css'

function Card({title, imageUrl,body, github}) {
    return (
        <div className='card-layout'>
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt=''></img>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
                </div>
            </div>
            <div className="btn-container">
            <button className="btn">
                <a href={github} className='button-txt'>
                    Github
                </a>
            </button>
            
            </div>
        </div>
        </div>
    )
}
export default Card;