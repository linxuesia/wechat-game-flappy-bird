import {DataStore} from "../base/DataStore.js";
export class Score{

    constructor(){
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        // 解决canvas刷新过快 一次加分过多
        this.isScore = true;
    }

    draw(){

        this.ctx.font = "25px Arial";
        this.ctx.fillStyle = "#000";
        this.ctx.fillText = (
            this.scoreNumber,
            window.innerWidth/2,
            window.innerHeight/18
        );
    }

}
