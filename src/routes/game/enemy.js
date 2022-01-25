// import { Entity } from "./entity";
import { random } from "../../utilities";

const blueprint = {
  name: "enemy",
  hp: 5,
  atk: 1
};

export class Enemy {
  constructor(doc = blueprint) {
    const { name, atk, hp, lootTable } = doc;
    // super();
    this.name = name;
    this.atk = atk;
    this.hp = hp;
    this.lootTable = lootTable;
  }

  hurt(hero) {
    let dmg = null;
    if (hero.critChance < random(100)) {
      dmg = hero.atk * 2;
    } else {
      dmg = hero.atk;
    }

    if (!dmg) {
      throw new Error("No hero atk");
    }

    console.log(`${hero.name} hits ${this.name} for ${dmg} damage!`);

    this.hp -= dmg;

    if (this.hp <= 0) this.die(hero);
    return this.hp;
  }

  die(hero) {
    console.log(`You killed ${this.name}!`);
    this.getDrop(hero);
  }

  getDrop(hero) {
    // const { luck } = hero;
    // const drops = [];

    const drop = this.lootTable[random(this.lootTable.length)];
    // drops.push(drop);

    // if (luck >= random(100)) {
    //   const luckyDrop = this.lootTable[random(this.lootTable.length)];
    //   drops.push(luckyDrop);
    // }

    // let formatDrops = "";
    // drops.forEach((drop) => {
    //   formatDrops += drop.name + " ";
    // });
    // formatDrops = formatDrops.trim();

    console.log(`The ${this.name} dropped ${drop.name}!`);
  }
}

function turn(attacker, target) {
  target.hurt(attacker);
}

const enemyStats = {
  name: "enemy",
  hp: 1,
  atk: 1,
  lootTable: [{ name: "Noah's Soul" }, { name: "death sword" }]
};

const enemy = new this.Enemy(enemyStats);

const hero = { name: "The best", atk: 5000, luck: 70 };
turn(hero, enemy);
