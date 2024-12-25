import { Enemy } from "./Enemy.js";

/**
 *
 */
export class GroupEnemy extends Phaser.GameObjects.Group {
  constructor(scene, groupSize, size) {
    super(scene);

    const { width: gameWidth, height: gameHeight } = this.scene.game.canvas;

    const randomColor = Math.floor(Math.random() * 0x888888 + 0x777777);

    for (let i = 0; i < groupSize; i++) {
      const randomX = Math.random() * gameWidth;
      const enemy = new Enemy(this.scene, randomX, 50, 20, 0, 360, randomColor);
      enemy.setActive(false);
      enemy.setVisible(false);
      this.add(enemy);
    }
    scene.add.existing(this);
  }

  start() {
    this.timeEvent = this.scene.time.addEvent({
      delay: 2000,
      callback: this.createEnemies,
      callbackScope: this,
      loop: true,
    });
  }

  createEnemies() {
    const nbrEnemies = Math.floor(Math.random() * (6 - 2) + 2);
    const { width: gameWidth, height: gameHeight } = this.scene.game.canvas;

    for (let i = 0; i < nbrEnemies; i++) {
      const enemy = this.getFirstDead();

      const randomX = Math.random() * gameWidth;

      if (enemy) {
        const enemySize = enemy.getRadius();
        enemy.setActive(true);
        enemy.setVisible(true);

        enemy.setPosition(randomX, 0);

        this.enemyMoving = this.scene.tweens.add({
          targets: enemy.body.velocity,
          props: {
            y: { from: 0, to: 1.25 * 40, duration: 3000 },
          },
          ease: "quart.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }
  }

  preUpdate(delay) {
    this.incX(Math.sin(delay / 1000));
  }
}
