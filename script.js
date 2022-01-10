class Celestial {
    constructor(name){
        this._name = name
        this._health = 100
        this._energy = 100
        this._stamina = 100
        this._defense = 10
        this._attack = 20
        this._isAlive = true
    }
    //nome
    get nome() {
        return this._name
    }
    set nome(name) {
        this._name = name
    }
    //saúde atual
    get vida() {
        return this._health
    }
    set vida(dano) {
        if ((this._health - dano) <= 0) {
            this._health = 0
            this._isAlive = false
        } else {
            this._health -= dano     
        }
    }
    get energia(){
        return this._energy
    }
    set energia(pontos){
        this._energy = this._energy - pontos
    }
    get estamina(){
        return this._stamina
    }
    set estamina(pontos){
        this._stamina = this._stamina - pontos
    }
    //ataque normal
    normalAttack = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._stamina>0){
            target.vida = this._attack - target._defense
            this.estamina = 10
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
}