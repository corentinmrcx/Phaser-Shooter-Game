/**
 *
 */
export class Enemy extends Phaser.GameObjects.Arc {
  constructor(
    scene,
    x,
    y,
    radius = 50,
    startAngle = 0,
    endAngle = 360,
    color = 0x0000ff,
  ) {
    super(scene, x, y, radius, startAngle, endAngle, false, color);
    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  preUpdate() {
    if (this.y > this.scene.game.canvas.height) {
      this.setActive(false);
      this.setVisible(false);
    }
  }

  getRadius() {
    return this.radius;
  }
}
