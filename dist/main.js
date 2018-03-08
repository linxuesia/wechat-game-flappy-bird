"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceLoader = require("./js/base/ResourceLoader.js");

var _Background = require("./js/runtime/Background.js");

var _DataStore = require("./js/base/DataStore.js");

var _Director = require("./js/Director.js");

var _Land = require("./js/runtime/Land.js");

var _Birds = require("./js/player/Birds.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = exports.Main = function () {
    function Main() {
        var _this = this;

        _classCallCheck(this, Main);

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = _DataStore.DataStore.getInstance();
        var loader = _ResourceLoader.ResourceLoader.create();
        loader.onLoaded(function (map) {
            return _this.onResourceFirstLoaded(map);
        });
    }

    /**
     * 资源第一次加载 将数据放入dataStore
     * @param map=>需要加载的图片资源
     */


    _createClass(Main, [{
        key: "onResourceFirstLoaded",
        value: function onResourceFirstLoaded(map) {
            this.dataStore.ctx = this.ctx;
            this.dataStore.res = map;
            this.director = _Director.Director.getInstance();
            this.init();
        }
    }, {
        key: "init",
        value: function init() {

            //游戏是否结束
            this.director.isGameOver = false;
            //把类的实例存入dataStore
            this.dataStore.put('pencils', []).put('background', _Background.Background).put('Land', _Land.Land).put('birds', _Birds.Birds);

            this.registerEvent();

            this.director.createPencil();
            this.director.run();
        }
    }, {
        key: "registerEvent",
        value: function registerEvent() {
            var _this2 = this;

            this.canvas.addEventListener('touchstart', function (e) {
                e.preventDefault();
                if (_this2.director.isGameOver) {
                    _this2.init();
                } else {
                    _this2.director.birdsEvent();
                }
            });
        }
    }]);

    return Main;
}();
//# sourceMappingURL=Main.js.map