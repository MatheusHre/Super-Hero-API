import { action } from "typesafe-actions"
import { HeroTypes, HeroReducer } from "./types";

export const loadHeroRequest = (user: any) => action(HeroTypes.GET_HERO_REQUEST, user)
export const loadHeroSuccess = (data: HeroReducer[]) => action(HeroTypes.GET_HERO_SUCCESS, data)
export const loadHeroFailure = () => action(HeroTypes.GET_HERO_FAILURE) 