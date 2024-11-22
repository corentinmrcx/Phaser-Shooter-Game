import Phaser from "phaser";
import config from "./config.js";
import { Player } from "./object/Player.js";

const firstScene = {
  create() {
    const centreLargeur = this.scale.width / 2;
    const centreHauteur = this.scale.height / 2;

    this.add.circle(200, 200, 25, 0xff0000);
    this.add.circle(600, 200, 25, 0x0000ff);
    this.add.text(centreLargeur, 0, "A first scene").setOrigin(0.5, 0);
    this.add
      .star(centreLargeur, centreHauteur, 5, 32, 64, 0xffff00)
      .setOrigin(0.5, 0.5);

    const player = new Player(this);
    player.handleKeys({
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    });
  },
};

const game = new Phaser.Game(config);
game.scene.add("game", firstScene, true);
