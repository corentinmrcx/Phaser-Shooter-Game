import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  scale: {
    height: 600,
    width: 800,
    mode: Phaser.Scale.ScaleModes.FIT,
  },
  physics: {
    default: "arcade",
  },
};

export default config;
