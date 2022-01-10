// import { Celestial } from "./script.js"

class Olimpiano extends Celestial {
    constructor(name){
        super(name)
        this._name = name
        this._health = 150
        this._energy = 200
        this._stamina = 140
        this._defense = 20
        this._attack = 40
        this._isAlive = true
    }
    rajadaDeEnergia = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._energy>30){
            target.vida = 40 + this._attack - target._defense
            this.energia = 30
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
    ataquePesado = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._stamina>40){
            target.vida = 20 + this._attack - target._defense
            this.estamina = 40
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
}

//************************************************************//
class Asgardiano extends Celestial {
    constructor(name){
        super(name)
        this._name = name
        this._health = 200
        this._energy = 50
        this._stamina = 180
        this._defense = 30
        this._attack = 50
        this._isAlive = true
    }
    ataquePesado = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._stamina>40){
            target.vida = 30 + this._attack - target._defense
            this.estamina = 40
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
    rajadaDeEnergia = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._energy>30){
            target.vida = 30 + this._attack - target._defense
            this.energia = 40
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
}

//************************************************************//
class Sina extends Celestial {
    constructor(name){
        super(name)
        this._name = name
        this._health = 100
        this._energy = 250
        this._stamina = 100
        this._defense = 10
        this._attack = 20
        this._isAlive = true
    }
    ataquePsiquico = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._energy>20){
            target.vida = 30 + this._attack - target._defense
            this.energia = 20
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
    rajadaDeEnergia = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._energy>30){
            target.vida = 40 + this._attack - target._defense
            this.energia = 30
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
}

//************************************************************//
class Alariano extends Celestial {
    constructor(name){
        super(name)
        this._name = name
        this._health = 150
        this._energy = 150
        this._stamina = 150
        this._defense = 30
        this._attack = 50
        this._isAlive = true
    }
    rajadaDeEnergia = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._energy>20){
            target.vida = 30 + this._attack - target._defense
            this.energia = 20
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
    ataquePesado = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._stamina>40){
            target.vida = 20 + this._attack - target._defense
            this.estamina = 40
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
    ataquePsiquico = (target) => {
        if(target._health === 0){
            return `${target.nome} já foi derrotado!!`
        }
        else if(target._health > 0 && this._energy>20){
            target.vida = 30 + this._attack - target._defense
            this.energia = 30
            return `${target.nome} ficou com ${target.vida} de vida`
        }
    }
}

//************************************************************//
class Agnos extends Celestial {
    constructor(name){
        super(name)
        this._name = name
        this._health = 100
        this._energy = 180
        this._stamina = 30
        this._defense = 10
        this._attack = 20
        this._isAlive = true
    }
    cura = (target) => {
        if(target._isAlive === true && this._energy>30){
            target.vida = -20
            this.energia = 30
        }
    }
}

//************************************************************//
class Esfinge extends Celestial {
    constructor(name){
        super(name)
        this._name = name
        this._health = 0
        this._energy = 0
        this._stamina = 0
        this._defense = 10
        this._attack = 20
        this._isAlive = true
    }
}

//************************************************************//
class Sangriano extends Celestial {
    constructor(name){
        super(name)
        this._name = name
        this._health = 0
        this._energy = 0
        this._stamina = 0
        this._defense = 10
        this._attack = 20
        this._isAlive = true
    }
}