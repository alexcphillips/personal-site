export class Entity {
  hurt(dmg) {
    this.hp -= dmg;
    if (this.hp <= 0) this.die();
    return this.hp;
  }
}
