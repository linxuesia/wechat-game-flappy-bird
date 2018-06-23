"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Birds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = require("../base/Sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Birds = exports.Birds = function (_Sprite) {
    _inherits(Birds, _Sprite);

    function Birds() {
        _classCallCheck(this, Birds);

        var image = _Sprite2.Sprite.getImage('birds');

        //小鸟的三种状态用数组来存储
        //宽34 高24 上下边距10 左右边距9
        var _this = _possibleConstructorReturn(this, (Birds.__proto__ || Object.getPrototypeOf(Birds)).call(this, image, 0, 0, image.width, image.height, 0, 0, image.width, image.height));

        _this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18];
        _this.clippingY = [10, 10, 10];
        _this.clippingWidth = [34, 34, 34];
        _this.clippingHeight = [24, 24, 24];
        var birdX = DataStore.getInstance().canvas.width / 4;
        _this.birdsX = [birdX, birdX, birdX];
        var birdY = DataStore.getInstance().canvas.height / 2;
        _this.birdsY = [birdY, birdY, birdY];
        _this.y = [birdY, birdY, birdY];
        var birdWidth = 34;
        _this.birdsWidth = [birdWidth, birdWidth, birdWidth];
        var birdHeight = 24;
        _this.birdsHeight = [birdHeight, birdHeight, birdHeight];
        _this.index = 0;
        _this.count = 0;
        _this.time = 0;
        return _this;
    }

    _createClass(Birds, [{
        key: "draw",
        value: function draw() {
            //小鸟切换的速度
            var speed = .2;
            this.count = this.count + speed;
            if (this.index >= 2) {
                this.count = 0;
            }
            //减速器的作用
            this.index = Math.floor(this.count);

            //重力加速度
            var g = 0.98 / 2.4;

            //向上的偏移效果
            var offsetUp = 30;
            //小鸟的位移
            var offsetY = this.time * (this.time - offsetUp) * g / 2;
            for (var i = 0; i <= 2; i++) {
                this.birdsY[i] = this.y[i] + offsetY;
            }
            this.time++;

            _get(Birds.prototype.__proto__ || Object.getPrototypeOf(Birds.prototype), "draw", this).call(this, this.img, this.clippingX[this.index], this.clippingY[this.index], this.clippingWidth[this.index], this.clippingHeight[this.index], this.birdsX[this.index], this.birdsY[this.index], this.birdsWidth[this.index], this.birdsHeight[this.index]);
        }
    }]);

    return Birds;
}(_Sprite2.Sprite);
//# sourceMappingURL=Birds.js.map