import {Pencil} from "./Pencil.js";
import {Sprite} from "../base/Sprite.js";

export class DownPencil extends Pencil {
    constructor(top) {
        const image = Sprite.getImage('pencilDown');
        super(image, top)
    }

    draw() {
        //为上下铅笔设置一个固定的间隙 从而算出下铅笔的位置
        let gap = window.innerHeight / 5;
        this.y = this.top + gap;

        super.draw();
    }

}