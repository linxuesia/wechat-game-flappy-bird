"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataStore = require("./base/DataStore.js");

var _UpPencil = require("./runtime/UpPencil.js");

var _DownPencil = require("./runtime/DownPencil.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Director = exports.Director = function () {
    function Director() {
        _classCallCheck(this, Director);

        this.dataStore = _DataStore.DataStore.getInstance();
        this.speed = 2;
    }

    _createClass(Director, [{
        key: "createPencil",
        value: function createPencil() {
            var minTop = window.innerHeight / 8;
            var maxTop = window.innerHeight / 2;
            var top = minTop + Math.random() * (maxTop - minTop);

            this.dataStore.get('pencils').push(new _UpPencil.UpPencil(top));
            this.dataStore.get('pencils').push(new _DownPencil.DownPencil(top));
        }
    }, {
        key: "birdsEvent",
        value: function birdsEvent() {
            for (var i; i <= 2; i++) {
                this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
            }
            this.dataStore.get('birds').time = 0;
        }
    }, {
        key: "run",
        value: function run() {
            var _this = this;

            if (!this.isGameOver) {
                //绘制背景
                this.dataStore.get('background').draw();

                var pencils = this.dataStore.get('pencils');
                if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
                    pencils.shift();
                    pencils.shift();
                }

                if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
                    this.createPencil();
                }

                //绘制铅笔
                this.dataStore.get('pencils').forEach(function (value, index) {
                    value.draw();
                });

                //绘制草地
                this.dataStore.get('Land').draw();

                //绘制小鸟
                this.dataStore.get('birds').draw();

                var timer = requestAnimationFrame(function () {
                    return _this.run();
                });
                this.dataStore.put('timer', timer);
            } else {
                cancelAnimationFrame(this.dataStore.get('timer'));
                this.dataStore.destroy();
            }
        }
    }], [{
        key: "getInstance",
        value: function getInstance() {
            if (!Director.instance) {
                Director.instance = new Director();
            }
            return Director.instance;
        }
    }]);

    return Director;
}();
//# sourceMappingURL=Director.js.map