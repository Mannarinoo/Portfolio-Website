import React from 'react'
import './AnalysisCard.css'
import { Link } from 'react-router-dom';

function AnalysisCard({title, imageUrl,body, github, redirect}) {
    return (
        <div className='analysiscard-layout'>
        <div className='analysiscard-container'>
            <div className="analysisimage-container">
                <img src={imageUrl} alt=''></img>
            </div>
            <div className="analysiscard-content">
            <div className="analysiscard-title">
                <h3>{title}</h3>
            </div>
            <div className="analysiscard-body">
                <p>{body}</p>
                </div>
            </div>
            <div className="analysisbtn-container">
            <Link
              to={redirect}>
            <button className="analysisbtn-1">
                <a href={redirect} className='analysisbutton-txt'>
                    View More
                </a>
            </button>
            </Link>
            <button className="analysisbtn-2">
                <a href={github} className='analysisbutton-txt'>
                    Github
                </a>
            </button>
            </div>
        </div>
        </div>
    )
}
export default AnalysisCard;