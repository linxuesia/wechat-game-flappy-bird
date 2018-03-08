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
        for(let i;i<=2;i++){
            this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
        }
        this.dataStore.get('birds').time = 0;
    }

    run(){
        if(!this.isGameOver){
            //绘制背景
            this.dataStore.get('background').draw();

            const pencils = this.dataStore.get('pencils');
            if(pencils[0].x + pencils[0].width <= 0&&pencils.length===4){
                pencils.shift();
                pencils.shift();
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

            //绘制小鸟
            this.dataStore.get('birds').draw();

            let timer = requestAnimationFrame(()=>this.run());
            this.dataStore.put('timer',timer);
        }else{
            cancelAnimationFrame(this.dataStore.get('timer'));
            this.dataStore.destroy();
        }

    }
}