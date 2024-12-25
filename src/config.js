import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  scale: {
    height: 700,
    width: 700,
  },
  physics: {
    default: "arcade",
  },
};

export default config;
