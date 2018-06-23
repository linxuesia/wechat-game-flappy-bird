import {DataStore} from "./base/DataStore.js";
import {UpPencil} from "./runtime/UpPencil.js";
import {DownPencil} from "./runtime/DownPencil.js";

export class Director{
    constructor(){
        this.dataStore = DataStore.getInstance();
        this.speed = 2;
    }

    static getInstance(){
        if(!Director.instance){
            Director.instance = new Director();
        }
        return Director.instance;
    }

    createPencil(){
        const minTop = window.innerHeight/8;
        const maxTop = window.innerHeight/2;
        const top = minTop + Math.random()*(maxTop - minTop);

        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));

    }

    birdsEvent(){
        for(let i = 0;i<=2;i++){
            this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
        }
        this.dataStore.get('birds').time = 0;
    }

    /**
     * 判断小鸟是否撞击铅笔
     * @param bird
     * @param pencil
     */
    static isStrike(bird,pencil){

        let flag = false;
        if(bird.top>pencil.bottom
            ||bird.bottom<pencil.top
            ||bird.right<pencil.left
            ||bird.left>pencil.right){
            flag = true;
        }
        return !flag;

    }

    //判断小鸟是否撞击地板和铅笔
    check(){
        const birds = this.dataStore.get('birds');
        const land   = this.dataStore.get('Land');
        const pencils = this.dataStore.get('pencils');
        const score = this.dataStore.get('score');
        if(birds.birdsY[0]+birds.birdsHeight[0]>=land.y){
            this.isGameOver = true;
            return;
        }

        //创建小鸟的边框模型
        const birdsBorder = {
            top:birds.y[0],
            left:birds.birdsX[0],
            bottom:birds.birdsY[0]+birds.birdsHeight[0],
            right:birds.birdsX[0]+birds.birdsWidth[0]
        };

        let length = pencils.length;
        for(let i=0;i<length;i++){

            const pencil = pencils[i];
            const pencilBorder = {
                top:pencil.y,
                left:pencil.x,
                bottom:pencil.y+pencil.height,
                right:pencil.x+pencil.width
            };

            if(Director.isStrike(birdsBorder,pencilBorder)){
                console.log('啊！撞到铅笔了！');
                // this.isGameOver = true;
                return;
            }

        }

        //加分逻辑
        if(birds.birdsX[0]>pencils[0].x+pencils[0].width&&score.isScore){
            this.isScore = false;
            score.scoreNumber++;
        }

    }

    run(){
        this.check();
        if(!this.isGameOver){
            //绘制背景
            this.dataStore.get('background').draw();

            const pencils = this.dataStore.get('pencils');
            if(pencils[0].x + pencils[0].width <= 0&&pencils.length===4){
                pencils.shift();
                pencils.shift();
                this.dataStore.get('score').isScore = true;
            }

            if(pencils[0].x <= (window.innerWidth - pencils[0].width)/2&&pencils.length===2){
                this.createPencil();
            }

            //绘制铅笔
            this.dataStore.get('pencils').forEach(function(value,index){
                value.draw();
            });

            //绘制草地
            this.dataStore.get('Land').draw();

            //绘制分数
            this.dataStore.get('score').draw();

            //绘制小鸟
            this.dataStore.get('birds').draw();

            let timer = requestAnimationFrame(()=>this.run());
            this.dataStore.put('timer',timer);

        }else{
            console.log('游戏结束');
            this.dataStore.get('startButton').draw();
            cancelAnimationFrame(this.dataStore.get('timer'));
            this.dataStore.destroy();
        }



    }
}
