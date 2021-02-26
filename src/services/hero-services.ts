import api from "./api"

const HeroService = {
    getHero: (hero: any) => api.get(`${hero}`)
}

export default HeroService