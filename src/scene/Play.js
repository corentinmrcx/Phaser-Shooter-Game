import Phaser from "phaser";
import { Player } from "../object/Player.js";
import { GroupLaser } from "../object/GroupLaser.js";
import { GroupEnemy } from "../object/GroupEnemy.js";

/**
 *
 */
export class Play extends Phaser.Scene {
  constructor() {
    super("play");
  }
  create() {
    const centreLargeur = this.scale.width / 2;
    const centreHauteur = this.scale.height / 2;
    this.add.text(centreLargeur, 0, "A first scene").setOrigin(0.5, 0);

    this.player = new Player(this);
    this.lasers = new GroupLaser(this, 5);
    this.enemies = new GroupEnemy(this, 60, 30);

    const keys = {
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
    };

    this.player.handleKeys(keys);
    this.lasers.handleKeysFire(keys);
    this.enemies.start();

    this.physics.add.overlap(
      this.lasers,
      this.enemies,
      (lasers, enemies) => {
        if (lasers.active && enemies.active) {
          lasers.setActive(false);
          lasers.setVisible(false);
          enemies.setVisible(false);
          enemies.setActive(false);
        }
      },
      () => {
        return true;
      },
    );
  }
}
