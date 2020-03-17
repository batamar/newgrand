'use strict';

class Spot extends React.Component {
    render() {
        const { isEmpty, letter, index, status="available" } = this.props;
        const spotNumber = letter ? `${letter}${index}` : null;
        const spotNumberInStore = localStorage.getItem('spotNumber');
        const storedOrderId = localStorage.getItem('orderId');

        let sts = status;

        if (spotNumber === spotNumberInStore && storedOrderId) {
            sts = 'own-choice';
        }

        const classNames = `order-spot ${isEmpty ? 'empty' : 'full'} ${sts}`;

        const onClick = () => {
            const code = getCode();
            const storedOrderId = localStorage.getItem('orderId');

            if (spotNumber === spotNumberInStore && storedOrderId) {
                if (confirm('Та сонголтоо цуцлах уу ?')) {
                    return db.collection("orders").doc(storedOrderId).delete()
                        .then(() => {
                            localStorage.removeItem('spotNumber');
                            localStorage.removeItem('orderId');

                            // reset ordered status of spot if neccessary
                            db.collection("orders").where('spotNumber', '==', spotNumberInStore).get()
                                .then((result) => {
                                    if (result.size === 0) {
                                        return db.collection('spots').doc(spotNumber).delete()
                                    }
                                })
                                .catch((e) => {
                                    console.log(e)
                                });

                            this.props.notification('canceled order');

                            console.log("Document successfully deleted!");
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });
                }
            }

            db.collection("orders").where('userCode', '==', code).get()
                .then((result) => {
                    if (result.size !== 0) {
                        return alert('Та ахин захиалах боломжгүй байна');
                    }

                    localStorage.setItem('spotNumber', spotNumber);

                    window.Erxes.updateCustomerProperty('Байшингийн дугаар', spotNumber);
                    window.Erxes.sendExtraFormContent('NcH5hk', `<div style="margin-bottom: 10px;">Сонгогдсон байршил: <div style="color:red;display:inline-block;font-weight:bold; border: 1px solid;padding: 2px 20px;margin-left: 10px;">${spotNumber}</div> </div> <div style="position:absolute;bottom:80px;color:black;"><p style="margin:0px;"><input type="checkbox" id="terms-of-use" /> <label for="terms-of-use">Худалдан авах гэрээний нөхцөлийг хүлээн зөвшөөрч байна</label></p><a href="http://newgrand.mn/terms-of-use.pdf" style="margin-left:23px;" target="__blank">Худалдан авах гэрээний нөхцөлтэй танилцах</a></a></div>`);

                    if (status !== 'sold') {
                        window.Erxes.showPopup('NcH5hk');
                    }
                })
                .catch((e) => {
                    console.log(e)
                });
        }

        return (
            <div className={classNames} onClick={onClick}>
                {spotNumber}
            </div>
        )
    }
}

const getCode = () => {
  let userCode = localStorage.getItem("userCode");

  if (userCode) {
      return userCode;
  }

  userCode = Math.random();

  localStorage.setItem("userCode", userCode);

  return userCode;
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { key: Math.random() };
    }

    componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener('message', (event) => {
                const { message } = event.data;

                if (message === 'formSuccess') {
                    const spotNumber = localStorage.getItem('spotNumber');

                    db.collection("orders").add({
                        userCode: getCode(),
                        spotNumber
                    })
                    .then((docRef) => {
                        localStorage.setItem('orderId', docRef.id);

                        this.setState({ key: Math.random() });

                        console.log("Document written with ID: ", docRef.id);

                        return db.collection('spots').doc(spotNumber).set({
                            number: spotNumber,
                            status: 'ordered'
                        })
                    })
                    .then(function() {
                        console.log("Successfully updated spot");
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                }
            });
        }
    }

    onNotification = () => {
        this.setState({ key: Math.random() });
    }

    renderSpotBase(startIndex, endIndex, componentRender) {
      let i = startIndex;

      const spots = [];

      while (i<=endIndex) {
          spots.push(componentRender(i));
          i++;
      }

      return spots;
    }

    renderEmptyBase(count=1, renderComponent) {
      let i = 1;

      const spots = [];

      while (i<=count) {
          spots.push(renderComponent());
          i++;
      }

      return spots;
    }

    renderSpot(letter, startIndex, endIndex) {
      return this.renderSpotBase(startIndex, endIndex, (i) => {
        const status = window.statusMap[`${letter}${i}`];

        return <Spot isEmpty={false} letter={letter} index={i} status={status} notification={this.onNotification} />
      })
    }

    renderEmpty(count) {
      return this.renderEmptyBase(count, () => <Spot isEmpty={true} />);
    }

    renderYellow() {
        return <div className="yellow-seperator" />
    }

    renderEmptySubroad(count) {
      return this.renderEmptyBase(count, () => <div className="subroad empty" />);
    }

    renderSubroadYellow() {
        return <div className="subroad-yellow-seperator" />
    }

    renderSubroad(startIndex, endIndex) {
      return this.renderSpotBase(startIndex, endIndex, () => {
        return <div className="subroad" />
      })
    }

    renderMainroadYellow() {
        return <div className="mainroad-yellow-seperator" />
    }

    renderMainroad(startIndex, endIndex) {
      return this.renderSpotBase(startIndex, endIndex, () => {
        return <div className="mainroad" />
      })
    }

    render() {
        return (
            <div key={this.state.key}>
            <div className="order-container">
                <div className="order-row">
                    {this.renderEmpty(8)}
                    {this.renderYellow()}
                    {this.renderSpot('A', 1, 1)}
                    {this.renderSpot('A', 2, 2)}
                    {this.renderEmpty(4)}
                </div>

                <div className="order-row">
                    {this.renderEmptySubroad(5)}
                    {this.renderSubroad(1, 3)}
                    {this.renderSubroadYellow()}
                    {this.renderSubroad(3, 5)}
                </div>

                <div className="order-row">
                    {this.renderEmpty(5)}
                    {this.renderSpot('B', 1, 3)}
                    {this.renderYellow()}
                    {this.renderSpot('B', 4, 6)}
                    {this.renderEmpty(3)}
                </div>

                <div className="order-row">
                    {this.renderEmpty(3)}
                    {this.renderSpot('C', 1, 5)}
                    {this.renderYellow()}
                    {this.renderSpot('C', 6, 9)}
                    {this.renderEmpty(2)}
                </div>

                <div className="order-row">
                    {this.renderEmptySubroad(1)}
                    {this.renderSubroad(1, 7)}
                    {this.renderSubroadYellow()}
                    {this.renderSubroad(8, 11)}
                </div>

                <div className="order-row">
                    {this.renderSpot('D', 1, 8)}
                    {this.renderYellow()}
                    {this.renderSpot('D', 9, 13)}
                    {this.renderEmpty()}
                </div>

                <div className="order-row">
                    {this.renderSpot('E', 1, 8)}
                    {this.renderYellow()}
                    {this.renderSpot('E', 9, 14)}
                </div>

                <div className="order-row">
                    {this.renderMainroad(1, 8)}
                    {this.renderMainroadYellow()}
                    {this.renderMainroad(9, 14)}
                </div>

                <div className="order-row">
                    {this.renderEmpty()}
                    {this.renderSpot('F', 1, 7)}
                    {this.renderYellow()}
                    {this.renderSpot('F', 8, 13)}
                </div>

                <div className="order-row">
                    {this.renderEmpty()}
                    {this.renderSpot('G', 1, 7)}
                    {this.renderYellow()}
                    {this.renderSpot('G', 8, 13)}
                </div>

                <div className="order-row">
                    {this.renderEmptySubroad(1)}
                    {this.renderSubroad(1, 7)}
                    {this.renderSubroadYellow()}
                    {this.renderSubroad(8, 13)}
                </div>

                <div className="order-row">
                    {this.renderEmpty(2)}
                    {this.renderSpot('K', 1, 6)}
                    {this.renderYellow()}
                    {this.renderSpot('K', 7, 12)}
                </div>

                <div style={{ clear: 'both' }} />
            </div>
                <div className="direction"></div>

                <div className="guide">
                    <div class="item"><div class="color"></div><div class="content">Зарагдсан байршил</div></div>
                    <div class="item"><div class="color"></div><div class="content">Гэрээ хийгдэж байгаа байршил</div></div>
                    <div class="item"><div class="color"></div><div class="content">Захиалах боломжтой байршил</div></div>
                    <div class="item"><div class="color"></div><div class="content">Таны захиалсан байршил</div></div>
                </div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#app');

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

db.collection("spots").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const row = doc.data();
        window.statusMap[row.number] = row.status;
    });

    ReactDOM.render(<App />, domContainer);
});