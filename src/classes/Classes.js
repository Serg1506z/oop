import Character from "./Character"
export class Bowerman extends Character {
  constructor() {
    super (...arguments)
    this.attack = 25
    this.defence = 25
  }
}

export class Swordsman extends Character {
  constructor() {
    super (...arguments)
    this.attack = 40
    this.defence = 10
  }
}

export class Magician extends Character {
  constructor() {
    super (...arguments)
    this.attack = 10
    this.defence = 40
  }
}

export class Undead extends Character {
  constructor() {
    super (...arguments)
    this.attack = 25
    this.defence = 25
  }
}

export class Zombie extends Character {
  constructor() {
    super (...arguments)
    this.attack = 40
    this.defence = 10
  }
}

export class Daemon extends Character {
  constructor() {
    super (...arguments)
    this.attack = 10
    this.defence = 40
  }
}
