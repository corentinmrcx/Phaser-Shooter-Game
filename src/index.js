import Phaser from "phaser";
import config from "./config.js";

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

    const rectangle = this.add
      .rectangle(centreLargeur, 550, 50, 15, 0x00ff00)
      .setOrigin(0.5, 0.5);

    const keys = this.input.keyboard.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });

    keys.left.on("down", () => rectangle.body.setVelocityX(-500));
    keys.right.on("down", () => rectangle.body.setVelocityX(500));
    keys.left.on("up", () => rectangle.body.setVelocityX(0));
    keys.right.on("up", () => rectangle.body.setVelocityX(0));
    keys.space.on("down", () => this.cameras.main.flash(500, 255, 255, 255));
    this.physics.add.existing(rectangle);
  },
};

const game = new Phaser.Game(config);
game.scene.add("game", firstScene, true);
