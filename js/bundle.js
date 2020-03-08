'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spot = function (_React$Component) {
    _inherits(Spot, _React$Component);

    function Spot() {
        _classCallCheck(this, Spot);

        return _possibleConstructorReturn(this, (Spot.__proto__ || Object.getPrototypeOf(Spot)).apply(this, arguments));
    }

    _createClass(Spot, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                isEmpty = _props.isEmpty,
                letter = _props.letter,
                index = _props.index,
                _props$status = _props.status,
                status = _props$status === undefined ? "available" : _props$status;

            var spotNumber = letter ? '' + letter + index : null;
            var spotNumberInStore = localStorage.getItem('spotNumber');

            var sts = status;

            if (spotNumber === spotNumberInStore) {
                sts = 'own-choice';
            }

            var classNames = 'order-spot ' + (isEmpty ? 'empty' : 'full') + ' ' + sts;

            var onClick = function onClick() {
                var code = getCode();

                if (spotNumber === spotNumberInStore) {
                    if (confirm('Та сонголтоо цуцлах уу ?')) {
                        return db.collection("orders").doc(localStorage.getItem('orderId')).delete().then(function () {
                            localStorage.removeItem('spotNumber');
                            localStorage.removeItem('orderId');

                            _this2.props.notification('canceled order');

                            console.log("Document successfully deleted!");
                        }).catch(function (error) {
                            console.error("Error removing document: ", error);
                        });
                    }
                }

                db.collection("orders").where('userCode', '==', code).get().then(function (result) {
                    if (result.size !== 0) {
                        return alert('Та ахин захиалах боломжгүй байна');
                    }

                    localStorage.setItem('spotNumber', spotNumber);

                    window.Erxes.updateCustomerProperty('Байшингийн дугаар', spotNumber);
                    window.Erxes.sendExtraFormContent('NcH5hk', '<div style="color: red;font-size:20px;font-weight:bold;margin-bottom: 10px;">\u0421\u043E\u043D\u0433\u043E\u0433\u0434\u0441\u043E\u043D \u0431\u0430\u0439\u0440\u0448\u0438\u043B: ' + spotNumber + ' </div>');

                    if (!["sold", "ordered"].includes(status)) {
                        window.Erxes.showPopup('NcH5hk');
                    }
                }).catch(function (e) {
                    console.log(e);
                });
            };

            return React.createElement(
                'div',
                { className: classNames, onClick: onClick },
                spotNumber
            );
        }
    }]);

    return Spot;
}(React.Component);

var getCode = function getCode() {
    var userCode = localStorage.getItem("userCode");

    if (userCode) {
        return userCode;
    }

    userCode = Math.random();

    localStorage.setItem("userCode", userCode);

    return userCode;
};

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App(props) {
        _classCallCheck(this, App);

        var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this3.onNotification = function () {
            _this3.setState({ key: Math.random() });
        };

        _this3.state = { key: Math.random() };
        return _this3;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            if (window.addEventListener) {
                window.addEventListener('message', function (event) {
                    var message = event.data.message;


                    if (message === 'formSuccess') {
                        db.collection("orders").add({
                            userCode: getCode(),
                            spotNumber: localStorage.getItem('spotNumber')
                        }).then(function (docRef) {
                            _this4.setState({ key: Math.random() });
                            localStorage.setItem('orderId', docRef.id);
                            console.log("Document written with ID: ", docRef.id);
                        }).catch(function (error) {
                            console.error("Error adding document: ", error);
                        });
                    }
                });
            }
        }
    }, {
        key: 'renderSpotBase',
        value: function renderSpotBase(startIndex, endIndex, componentRender) {
            var i = startIndex;

            var spots = [];

            while (i <= endIndex) {
                spots.push(componentRender(i));
                i++;
            }

            return spots;
        }
    }, {
        key: 'renderEmptyBase',
        value: function renderEmptyBase() {
            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var renderComponent = arguments[1];

            var i = 1;

            var spots = [];

            while (i <= count) {
                spots.push(renderComponent());
                i++;
            }

            return spots;
        }
    }, {
        key: 'renderSpot',
        value: function renderSpot(letter, startIndex, endIndex) {
            var _this5 = this;

            return this.renderSpotBase(startIndex, endIndex, function (i) {
                var status = window.statusMap['' + letter + i];

                return React.createElement(Spot, { isEmpty: false, letter: letter, index: i, status: status, notification: _this5.onNotification });
            });
        }
    }, {
        key: 'renderEmpty',
        value: function renderEmpty(count) {
            return this.renderEmptyBase(count, function () {
                return React.createElement(Spot, { isEmpty: true });
            });
        }
    }, {
        key: 'renderYellow',
        value: function renderYellow() {
            return React.createElement('div', { className: 'yellow-seperator' });
        }
    }, {
        key: 'renderEmptySubroad',
        value: function renderEmptySubroad(count) {
            return this.renderEmptyBase(count, function () {
                return React.createElement('div', { className: 'subroad empty' });
            });
        }
    }, {
        key: 'renderSubroadYellow',
        value: function renderSubroadYellow() {
            return React.createElement('div', { className: 'subroad-yellow-seperator' });
        }
    }, {
        key: 'renderSubroad',
        value: function renderSubroad(startIndex, endIndex) {
            return this.renderSpotBase(startIndex, endIndex, function () {
                return React.createElement('div', { className: 'subroad' });
            });
        }
    }, {
        key: 'renderMainroadYellow',
        value: function renderMainroadYellow() {
            return React.createElement('div', { className: 'mainroad-yellow-seperator' });
        }
    }, {
        key: 'renderMainroad',
        value: function renderMainroad(startIndex, endIndex) {
            return this.renderSpotBase(startIndex, endIndex, function () {
                return React.createElement('div', { className: 'mainroad' });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { key: this.state.key },
                React.createElement(
                    'div',
                    { className: 'order-container' },
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmpty(8),
                        this.renderYellow(),
                        this.renderSpot('A', 1, 1),
                        this.renderSpot('A', 2, 2),
                        this.renderEmpty(4)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmptySubroad(5),
                        this.renderSubroad(1, 3),
                        this.renderSubroadYellow(),
                        this.renderSubroad(3, 5)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmpty(5),
                        this.renderSpot('B', 1, 3),
                        this.renderYellow(),
                        this.renderSpot('B', 4, 6),
                        this.renderEmpty(3)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmpty(3),
                        this.renderSpot('C', 1, 5),
                        this.renderYellow(),
                        this.renderSpot('C', 6, 9),
                        this.renderEmpty(2)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmptySubroad(1),
                        this.renderSubroad(1, 7),
                        this.renderSubroadYellow(),
                        this.renderSubroad(8, 11)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderSpot('D', 1, 8),
                        this.renderYellow(),
                        this.renderSpot('D', 9, 13),
                        this.renderEmpty()
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderSpot('E', 1, 8),
                        this.renderYellow(),
                        this.renderSpot('E', 9, 14)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderMainroad(1, 8),
                        this.renderMainroadYellow(),
                        this.renderMainroad(9, 14)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmpty(),
                        this.renderSpot('F', 1, 7),
                        this.renderYellow(),
                        this.renderSpot('F', 8, 13)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmpty(),
                        this.renderSpot('G', 1, 7),
                        this.renderYellow(),
                        this.renderSpot('G', 8, 13)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmptySubroad(1),
                        this.renderSubroad(1, 7),
                        this.renderSubroadYellow(),
                        this.renderSubroad(8, 13)
                    ),
                    React.createElement(
                        'div',
                        { className: 'order-row' },
                        this.renderEmpty(2),
                        this.renderSpot('K', 1, 6),
                        this.renderYellow(),
                        this.renderSpot('K', 7, 12)
                    ),
                    React.createElement('div', { style: { clear: 'both' } })
                ),
                React.createElement(
                    'div',
                    { className: 'direction' },
                    React.createElement('img', { src: 'img/direction.jpg' })
                ),
                React.createElement(
                    'div',
                    { className: 'guide' },
                    React.createElement('img', { src: 'img/order-guide.jpg' })
                )
            );
        }
    }]);

    return App;
}(React.Component);

var domContainer = document.querySelector('#app');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyACGYVX2d478qYkPmRO8mlv_ODB6SMpALU",
    authDomain: "new-grand.firebaseapp.com",
    databaseURL: "https://new-grand.firebaseio.com",
    projectId: "new-grand",
    storageBucket: "new-grand.appspot.com",
    messagingSenderId: "493253119322",
    appId: "1:493253119322:web:ab840b9a21fd5840383763"
});

window.db = firebase.firestore();
window.statusMap = {};

db.collection("spots").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        var row = doc.data();
        window.statusMap[row.number] = row.status;
    });

    ReactDOM.render(React.createElement(App, null), domContainer);
});
