import React from 'react'




export let month = new Date().getMonth() +1


export const nextMonth = () => {
    console.log("why")
}

const Header = () => {
    const currentDate = new Date().toDateString()

    return (
        <header>
            <h1>Liturgical Calendar</h1>
            <h2>{currentDate}</h2>
            <button onClick={nextMonth}>Next Month</button>
            <button onClick={null}>Last Month</button>
        </header>
        
    )
}

export default Header