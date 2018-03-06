import {DataStore} from "./base/DataStore.js";

export class Director{
    constructor(){
        this.dataStore = DataStore.getInstance();
    }

    static getInstance(){
        if(!Director.instance){
            Director.instance = new Director();
        }
        return Director.instance;
    }

    run(){
        this.dataStore.get('background').draw();
        this.dataStore.get('Land').draw();
        let timer = requestAnimationFrame(()=>this.run());
        this.dataStore.put('timer',timer);

    }
}