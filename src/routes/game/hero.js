const blueprint = {
  hp: 10,
  atk: 2,
  pos: {
    x: 3,
    y: 3
  }
};

export class Hero {
  constructor(doc = blueprint) {
    const { hp, atk, pos } = doc;
    this.hp = hp;
    this.atk = atk;
    this.pos = pos;
  }

  die() {
    console.log("You died!");
  }
}
