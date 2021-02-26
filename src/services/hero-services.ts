import api from "./api"

const HeroService = {
    getHero: (user: any) => api.get(`${user}`)
}

export default HeroService