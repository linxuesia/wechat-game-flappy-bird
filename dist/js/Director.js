'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataStore = require('./base/DataStore.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Director = exports.Director = function () {
    function Director() {
        _classCallCheck(this, Director);

        this.dataStore = _DataStore.DataStore.getInstance();
    }

    _createClass(Director, [{
        key: 'run',
        value: function run() {
            var _this = this;

            this.dataStore.get('background').draw();
            this.dataStore.get('Land').draw();
            var timer = requestAnimationFrame(function () {
                return _this.run();
            });
            this.dataStore.put('timer', timer);
        }
    }], [{
        key: 'getInstance',
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