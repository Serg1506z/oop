
export default class Character {

  constructor(name, type) {
    if(name.length < 2 || name.length > 10) {
      throw new Error(`Имя персонажа "${name}" должно быть от 2 до 10 символов`)
    }
    if(!['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error(`Тип персонажа "${type}" должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie`)
    }
    this.name = name
    this.type = type
    this.health = 100
    this.level = 1
  }

  levelUp() {
    if(this.health > 0) {
      this.level += 1
      this.attack *= 1.2
      this.defence *= 1.2
      this.health = 100
    } else {
      throw new Error("Нельзя повысить левел умершего")
    }
  }

  damage(points) {
    if(this.health > 0){
      this.health -= points * (1 - this.defence / 100)
    } else {
      throw new Error("Вы пинаете труп")
    }
  }
}
