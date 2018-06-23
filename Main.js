import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Background} from "./js/runtime/Background.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";

export class Main{

    constructor(){

        this.canvas = wx.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map=>this.onResourceFirstLoaded(map));

    }

    /**
     * 资源第一次加载 将数据放入dataStore
     * @param map=>需要加载的图片资源
     */
    onResourceFirstLoaded(map){
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.director = Director.getInstance();
        this.init();
    }

    init(){

        //游戏是否结束
        this.director.isGameOver = false;
        //把类的实例存入dataStore
        this.dataStore
            .put('pencils',[])
            .put('background', Background)
            .put('Land',Land)
            .put('birds',Birds)
            .put('score',Score)
            .put('startButton',StartButton);

        this.registerEvent();

        this.director.createPencil();
        this.director.run();

    }

    registerEvent(){
        // this.canvas.addEventListener('touchstart',e=>{
        //     e.preventDefault();
        //     if(this.director.isGameOver){
        //         this.init();
        //     }else{
        //         this.director.birdsEvent();
        //     }
        // });

        wx.onTouchStart(()=>{
          if (this.director.isGameOver) {
            this.init();
          } else {
            this.director.birdsEvent();
          }
        })
    }
}
