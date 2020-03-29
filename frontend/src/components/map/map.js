import React, { Component } from "react";

class Map extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
            {this.props.buildings.map((item) =>
              <div className="col-3" key={item.id}>
                {item.html}
              </div>
            )}
        </div>
      </div>
    );
  }

}

export default Map;