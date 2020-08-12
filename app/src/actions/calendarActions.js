import axios from 'axios'

export const FETCH_CALENDAR = 'FETCH_CALENDAR'
export const FETCH_CALENDAR_SUCCESS = 'FETCH_CALENDAR_SUCCESS'

export const fetchCalendar = () => (dispatch) => {

    dispatch({type: FETCH_CALENDAR })

    axios.get('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2020/8')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_CALENDAR_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("Not a chance, New Orleans!")
    })
}