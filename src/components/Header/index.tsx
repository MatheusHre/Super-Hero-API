import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { loadHeroRequest } from '../../store/ducks/hero/actions';
import "../Header/header.css"
import { Button } from '@material-ui/core'

const Header = () => {

    const dispatch = useDispatch();

    
    const text = useRef<HTMLInputElement>(null)

    const searchHero = () => {
        dispatch(loadHeroRequest(text?.current?.value))
    } 


    return(
        <div className="container">
            <h2>Welcome To The Hero Info Page!</h2>
            <div>
                <p>Search for information about your favorite Super Hero!</p>    
                <input className="hero-imput" type="name" ref={text} />
                <Button color="primary" variant="contained" onClick={searchHero}>Search</Button>
            </div>            
        </div>
    )
}

export default Header