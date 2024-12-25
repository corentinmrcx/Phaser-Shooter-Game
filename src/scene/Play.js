import Phaser from "phaser";
import { Player } from "../object/Player.js";
import { GroupLaser } from "../object/GroupLaser.js";
import { Laser } from "../object/Laser.js";

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

    const player = new Player(this);
    player.handleKeys({
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    });
  }
}
