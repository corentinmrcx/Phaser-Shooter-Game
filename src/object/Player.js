import Phaser from "phaser";

/**
 *
 */
export class Player extends Phaser.GameObjects.Rectangle {
  constructor(scene, width = 50, height = 20, color = 0xffffff) {
    super(
      scene,
      scene.game.canvas.width / 2,
      scene.game.canvas.height - 50,
      width,
      height,
      color,
    );

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
  }

  handleKeys(keys) {
    this.keys = this.scene.input.keyboard.addKeys(keys);
    this.scene.input.keyboard.on("keydown", this.#handleMove, this);
    this.scene.input.keyboard.on("keyup", this.#handleMove, this);
  }

  #handleMove() {
    const leftDown = this.keys.left.isDown;
    const rightDown = this.keys.right.isDown;
    this.body.setVelocityX(0);

    if (leftDown && !rightDown) {
      this.body.setVelocityX(-500);
    } else if (rightDown && !leftDown) {
      this.body.setVelocityX(500);
    }
  }
}
