'use strict';

class Spot extends React.Component {
    render() {
        const { isEmpty, letter, index, status } = this.props;

        let classNames = `order-spot ${isEmpty ? 'empty' : 'full'} ${status}`;

        return (
            <div className={classNames}>
                {letter} {index}
            </div>
        )
    }
}

class App extends React.Component {
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

    renderSpot(letter, startIndex, endIndex, status) {
      return this.renderSpotBase(startIndex, endIndex, (i) => {
        return <Spot isEmpty={false} letter={letter} index={i} status={status} />
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
            <div className="order-container">
                <div className="order-row">
                    {this.renderEmpty(8)}
                    {this.renderYellow()}
                    {this.renderSpot('A', 1, 1, 'sold')}
                    {this.renderSpot('A', 2, 2, 'ordered')}
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
        )
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);