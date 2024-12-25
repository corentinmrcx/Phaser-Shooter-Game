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
}
