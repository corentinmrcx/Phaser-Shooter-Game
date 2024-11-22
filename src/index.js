import Phaser from "phaser";
import config from "./config.js";
import { Play } from "./scene/Play.js";

const game = new Phaser.Game(config);
game.scene.add("game", Play, true);
