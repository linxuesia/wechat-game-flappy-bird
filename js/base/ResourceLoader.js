//资源加载完毕之后 再开始渲染canvas
import {Resources} from "./Resources.js";
import { DataStore } from "./DataStore.js";

export class ResourceLoader{

    constructor(){
        this.map = new Map(Resources);
        for(let [key,value] of this.map){
            let image = wx.createImage();
            image.src = value;
            this.map.set(key,image);
        }
    }

    onLoaded(callback){
        let count = 0;
        for(let value of this.map.values()){
            value.onload = ()=>{
                count++;
                if(count>=this.map.size){
                    callback(this.map);
                }
            }
        }
    }

    static create(){
        return new ResourceLoader();
    }


}