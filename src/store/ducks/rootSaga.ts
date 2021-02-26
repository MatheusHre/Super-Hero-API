import { all, takeLatest } from "redux-saga/effects"
import { getHero } from "./hero/sagas"
import { HeroTypes } from "./hero/types"

export default function* rootSaga(): any {
    return yield all ([
        takeLatest(HeroTypes.GET_HERO_REQUEST, getHero)
    ])
}