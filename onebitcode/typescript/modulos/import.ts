import { Spaceship } from './export'

interface AttackSpaceship extends Spaceship {
    weapons: number
}

let xwing: AttackSpaceship = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
}

//npm install --save-dev @types/lodash