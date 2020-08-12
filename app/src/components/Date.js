import React from 'react'

export const Date = (main) => {
    console.log(main.main.celebrations)
    return (
    <section>
        <div className="heading-div">
            <h3>Date: {main.main.date}</h3>
            <h4>Season: {main.main.season}</h4>
            <h4>Season Week: {main.main.season_week}</h4>
            <h3>Holy Days and Saints:&nbsp;</h3>
        </div>
            {main.main.celebrations.map(celebration => {
                return (
                    <div className="body-div">
                        <p>Name or Occasion: <br /> {celebration.title}</p>
                        <p>Sacred Color: {celebration.colour}</p>
                        <p>Rank: {celebration.rank}</p>
                    </div>
                )
            })}
    </section>
    )
}