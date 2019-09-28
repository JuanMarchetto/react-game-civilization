import React, { Component } from "react";

class Map extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
            {this.props.buildingOptions.map((item, index) =>
              <div
                className="col-3"
                key={index}
                onClick={() => this.props.OnAddConstruction(item)}
              >
                {item.html}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Map;