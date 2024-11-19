import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  scale: {
    height: 600,
    width: 800,
    mode: Phaser.Scale.ScaleModes.FIT,
  },
  scene: {
    create() {
      this.add.circle(200, 200, 25, 0xff0000);
      this.add.circle(600, 200, 25, 0x0000ff);
      this.add.text(400, 0, "A first scene").setOrigin(0.5, 0);
      this.add.star(400, 300, 5, 32, 64, 0xffff00).setOrigin(0.5, 0.5);
      this.add.rectangle(400, 550, 50, 15, 0x00ff00).setOrigin(0.5, 0.5);
    },
  },
};

// eslint-disable-next-line no-new -- controle désactiver
new Phaser.Game(config);
