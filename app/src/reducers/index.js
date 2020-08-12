const initialState = {
    date: "",
    season: "",
    season_week: "",
    celebrations: [
        {
            title: "",
            colour: "",
            rank: "",
            rank_num: 0 
        }
       
    ],
    weekday: ""
}

const reducer = (state = initialState, action) => {
    console.log(state)
}

export default reducer