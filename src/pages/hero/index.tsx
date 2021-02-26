import React from 'react'
import {  useSelector } from 'react-redux'
import Header from '../../components/Header';
import { HeroItens, HeroReducer } from '../../store/ducks/hero/types';
import "../hero/hero.css"

const HeroPage = () => {

    const hero = useSelector((state: HeroReducer) => state.hero.arrayHero)

    return(
        <div className="main-container">
            <Header />


            {hero !== undefined && hero.map((answer: HeroItens) => (
                <div className="hero-container" key={answer.id}>
                    <img src={answer.image.url} alt=""/>
                    <p><b>Name:</b> {answer.name}</p>
                    <p><b>Full Name:</b> {answer.biography['full-name'] === "null" ? "Unknown" : answer.biography['full-name']}</p>
                    <p><b>Publisher :</b> {answer.biography.publisher === "null" ? "Unknown" : answer.biography.publisher}</p>
                    <p><b>Gender :</b> {answer.appearance.gender === "null" ? "Unknown" : answer.appearance.gender}</p>
                    <p><b>Power :</b> {answer.powerstats.power === "null" ? "Unknown" : answer.powerstats.power}</p>
                    <p><b>Speed :</b> {answer.powerstats.speed === "null" ? "Unknown" : answer.powerstats.speed}</p>
                </div>

            ))}            
        </div>
    )
}

export default HeroPage