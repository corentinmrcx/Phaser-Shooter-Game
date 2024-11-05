import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  scale: {
    height: 600,
    width: 800,
    mode: Phaser.Scale.ScaleModes.FIT,
  },
  scene: {},
};

// eslint-disable-next-line no-new -- controle désactiver
new Phaser.Game(config);
