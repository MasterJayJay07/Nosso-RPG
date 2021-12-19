class Celestial {
    constructor(name){
        this.name = name
        this._health = 100
        this.defense = 10
        this.attack = 20
        this.energy = 100
        this.stamina = 100
        this.speed = 10
        this.isAlive = true
    }
    //nome
    set nome(name) {
        this._name = name
    }
    get nome() {
        return `Meu nome é ${this.name}`
    }
    //saúde atual
    get health() {
        return this._health
    }
    set health(value) {
        if ((this._health - value) <= 0) {
            this._health = 0
            this.isAlive = false
        } else {
            this._health -= value       
        }
    }
    //ataque normal
    normalAttack = (target) => {
        if (target.health === 0) {
            return `${target.name} ja esta derrotado!!`
        } 
        if (this.attack - target.defense > 0){
            target.health = this.attack - target.defense
        }
        if (target.health > 0) {
            return `${target.name} ficou com ${target.health} de vida`
        }
        return `${target.name} já era!!`
    }
}