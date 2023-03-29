import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./Widgets.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">

      <div className="widgets-articleLeft">
        <FiberManualRecordIcon/>
      </div>



      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )



  return (
    <div className='widgets'>
        <div className="widgets-header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Tesla hits new highs", "Cars & auto - 3000 readers")}
        {newsArticle("Is redux too good?", "Code - 100k reders")}
        {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
        {newsArticle("CoronaVirus India Updates", "Top news - 77k readers")}
        {newsArticle("Best Gaming builds", "PC Build - 56k readers")}
        {newsArticle("Tech Layoffs in USA", "IT Industrty - 263k readers")}
        {newsArticle("Buying Land in India", "Real Estate - 99k readers")}
        {newsArticle("Risk of getting into IIT", "Education System - 49k readers")}

    </div>
  )
}

export default Widgets