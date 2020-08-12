import React from 'react'
import { DayStyles } from '../styledComponents/Styles'


export const Date = (main) => {
    return (
    <DayStyles>
        <div className="heading-div">
            <h4>Date: {main.main.date}</h4>
            <h5>Season: {main.main.season}</h5>
            <h5>Season Week: {main.main.season_week}</h5>
            <h4>Holy Days and Saints:&nbsp;</h4>
        </div>
            {main.main.celebrations.map((celebration, index) => {
                return (
                    <div key={index} className="body-div">
                        <p>Name or Occasion: <br /> {celebration.title}</p>
                        <p>Sacred Color: {celebration.colour}</p>
                        <p>Rank: {celebration.rank}</p>
                    </div>
                )
            })}
    </DayStyles>
    )
}