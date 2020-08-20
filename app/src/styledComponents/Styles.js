import styled from 'styled-components'

export const CalendarStyles = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`
export const DayStyles = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
    margin: 2%;
    padding: 2%;
    border-radius: 25%;
    width: 20%;

    h4 {
        font-size: 1.5rem;
        font-style: italic;
        margin: 4% 0%;
    }

    h5 {
        font-size: 1.2rem;
    }

`
