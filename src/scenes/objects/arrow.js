import Phaser from "phaser";

/**
 * @brief Models any arrow of any scene
 */
export class Arrow {
    /**
   * @brief Constructs the arrow of a given scene
   * @param {Phaser.Scene} parent_scene the scene in which the background is contained
   */
    constructor(parent_scene, position = {x: 0, y: 0}) {
        //Initilaize attributes
        this.sprite = null;
        this.parent_scene = parent_scene;
        this.position = position;
    }

    /**
   * @brief Loads the background image from memory
   */
    preload() {
        this.parent_scene.load.spritesheet(
            'ui-arrow-frames',
            'sprites/UI/arrow.png',
            { frameWidth: 100, frameHeight: 100 }
        );
    }

    /**
   * @brief Creates and places the arrow image in the scene
   */
    create() {
        this.parent_scene.anims.create({
            key: 'arrow-anim',
            frameRate: 15,
            frames: this.parent_scene.anims.generateFrameNames('ui-arrow-frames'),
            repeat: -1
        });
        this.sprite = this.parent_scene.add.sprite(
            this.position.x,
            this.position.y,
            'ui-arrow-frames'
        ).play('arrow-anim');
        this.sprite.visible = false;

    }

    updatePosition(x, y) {
        this.sprite.setPosition(x, y);
    }

    createAtPosition(x, y) {
        this.create();
        this.updatePosition(x, y);
    }

    show() {
        this.sprite.visible = true;
        this.sprite.setInteractive();
        this.sprite.depth = 30;
    }
}
