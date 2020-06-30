import Phaser from "phaser";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import DebugObjects from './plugins/debugObjects.js';
import './style.scss';

import {ProtoScene} from "./scenes/protoScene.js";
import { BuildingScene } from "./scenes/buildingScene.js";
import { Player } from "./core/player.js";
import { GrandmaScene } from "./scenes/grandmaScene.js";

let plugins = [{
    key: 'rexUI',
    plugin: RexUIPlugin,
    mapping: 'rexUI'
}];
const consoleSeemsOpen = window.outerHeight - window.innerHeight > 200;
if(consoleSeemsOpen === true){
  plugins.push({
    key: 'debugObjects',
    plugin: DebugObjects,
    mapping: 'debugObjects'
  });
}

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        height: 2732,
        width: 2048
    },
    plugins: {
        scene: plugins
    },
    scene: [BuildingScene, ProtoScene, GrandmaScene],
    physics: {
        default: 'arcade'
    }
};

export const game = new Phaser.Game(config);
export const player = new Player();