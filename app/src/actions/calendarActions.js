import axios from 'axios'
import { month } from '../components/Header'

export const FETCH_CALENDAR = 'FETCH_CALENDAR'
export const FETCH_CALENDAR_SUCCESS = 'FETCH_CALENDAR_SUCCESS'
export const FETCH_CALENDAR_FAIL = 'FETCH_CALENDAR_FAIL'



export const fetchCalendar = () => (dispatch) => {

    dispatch({type: FETCH_CALENDAR })

    axios.get(`http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2020/8`)
    .then(res => {
        dispatch({ type: FETCH_CALENDAR_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCH_CALENDAR_FAIL })
    })
}
