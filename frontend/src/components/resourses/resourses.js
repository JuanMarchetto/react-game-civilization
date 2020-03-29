import React, { Component } from "react";

class Resourses extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
            {Object.keys(this.props.resourses).map((item) =>
              <div className="col-3" key={item}>
                {item}: {this.props.resourses[item]}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Resourses;