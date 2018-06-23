"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Background = undefined;

var _Sprite2 = require("../base/Sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = exports.Background = function (_Sprite) {
    _inherits(Background, _Sprite);

    function Background() {
        _classCallCheck(this, Background);

        var image = _Sprite2.Sprite.getImage('background');
        return _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, image, 0, 0, image.width, image.height, 0, 0, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height));
    }

    return Background;
}(_Sprite2.Sprite);
//# sourceMappingURL=Background.js.map