import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCalendar } from '../actions'

const LiturgicalCalendar = (props) => {
    useEffect( () => {
        props.fetchCalendar()
    }, [])

    return (
        <h1>Liturgical Calendar</h1>
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