import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCalendar } from '../actions'

import { Date } from './Date'

import { CalendarStyles } from '../styledComponents/Styles'

const LiturgicalCalendar = (props) => {
    useEffect( () => {
        props.fetchCalendar()
    }, [])

    return (
        <CalendarStyles>
            <h2>{props.error}</h2>
            {props.data.map((item, index) => {
                return (
                    <Date key={index} main={item} />
                )                    
            })}
        </CalendarStyles>
        
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,

        //data coming from API
        data: state.data
    }
}

export default connect(mapStateToProps, {fetchCalendar})(LiturgicalCalendar)