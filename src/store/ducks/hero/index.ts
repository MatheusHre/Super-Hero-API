
import { Reducer } from "redux"
import { Hero, HeroTypes } from "./types"

const INITIAL_STATE: Hero = {
    arrayHero: [],
    loading: false,
    error: false
}

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case HeroTypes.GET_HERO_REQUEST:
            return { ...state, loading: true }
        case HeroTypes.GET_HERO_SUCCESS:
            return{
                ...state,
                loading: false,
                arrayHero: action.payload.data.results
            }
        case HeroTypes.GET_HERO_FAILURE:
            return { ...state, loading: false, error: true}
        default:
            return state
    }
}

export default reducer