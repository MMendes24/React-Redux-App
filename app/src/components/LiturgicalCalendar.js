import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCalendar } from '../actions'

import { Date } from './Date'

const LiturgicalCalendar = (props) => {
    useEffect( () => {
        props.fetchCalendar()
    }, [])

    return (
        <div>
            <h1>Liturgical Calendar</h1>
            {props.data.map(item => {
                console.log(item.celebrations)
                return <div>
                    <Date main={item} celebrations={props.data.celebrations}/>
                </div>
            })}
        </div>
        
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