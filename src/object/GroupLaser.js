import { Laser } from "./Laser.js";

/**
 *
 */
export class GroupLaser extends Phaser.GameObjects.Group {
  constructor(scene, groupSize) {
    super(scene);

    if (groupSize > 5) {
      groupSize = 5;
    }

    for (let i = 0; i < groupSize; i++) {
      const laser = new Laser(scene);
      laser.setActive(false);
      laser.setVisible(false);
      this.add(laser);
    }
  }

  #fireAnimation() {
    const laser = this.getFirstDead();
    if (laser) {
      const playerX = this.scene.player.x;
      const playerY = this.scene.player.y;
      laser.fire(playerX, playerY);
    }
  }

  handleKeysFire(keys) {
    this.keys = this.scene.input.keyboard.addKeys(keys);
    this.keys.space.on("down", () => this.#fireAnimation(), this);
  }
}
