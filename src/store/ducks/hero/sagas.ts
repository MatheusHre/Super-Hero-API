import { call, put } from "redux-saga/effects"

import { loadHeroFailure, loadHeroSuccess } from "./actions"

import HeroService from "../../../services/hero-services"
import { HeroReducer } from "./types"


export function* getHero(action: any) {
    try {
        const response: HeroReducer[] = yield call(HeroService.getHero, action.payload)
        yield put(loadHeroSuccess(response))
    } catch (err) {

        console.log(err)
        yield put(loadHeroFailure())

    }
}