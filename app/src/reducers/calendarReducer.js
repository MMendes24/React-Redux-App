import { FETCH_CALENDAR, FETCH_CALENDAR_SUCCESS, FETCH_CALENDAR_FAILURE } from '../actions'

const initialState = {
    //local data
    isLoading: false,
    error: '',

    // coming from API
    data: [],
}

export const calendarReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CALENDAR:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_CALENDAR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                
                //api data
                data: action.payload,
            }
            default:
                return state
    }

}

