/**
 *
 */
export class Laser extends Phaser.GameObjects.Ellipse {
  constructor(scene, width = 10, height = 20, color = 0xff0000) {
    super(scene, 0, 0, width, height, color);

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  fire(x, y) {
    this.setPosition(x, y - 20);
    this.setActive(true);
    this.setVisible(true);
    this.body.setVelocityY(-500);
  }
}
