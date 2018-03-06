import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Background} from "./js/runtime/Background.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";

export class Main{

    constructor(){
        this.canvas = document.getElementById('canvas');
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
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init(){

        //把背景类的实例存入dataStore
        this.dataStore.put('background', new Background());

        Director.getInstance().run();

    }
}