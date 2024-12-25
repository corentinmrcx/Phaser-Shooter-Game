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

    this.score = 0;
    const textStyle = {
      fontFamily: "Arial",
      fontSize: "25px",
      fontWeight: "bold",
      color: "#ffffff",
    };

    const scoreX = 40;
    const scoreY = 40;

    this.scoreText = this.add
      .text(scoreX, scoreY, "Score : 0", textStyle)
      .setDepth(1);
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
          this.score += 1;
          lasers.setActive(false);
          lasers.setVisible(false);
          enemies.setVisible(false);
          enemies.setActive(false);
          this.scoreText.setText(`Score: ${this.score}`);
        }
      },
      () => {
        return true;
      },
    );
  }
}
