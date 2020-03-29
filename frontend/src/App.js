import React, { Component } from "react";
import Map from "./components/map"
import Resourses from "./components/resourses"
import Constructions from "./components/constructions"

class App extends Component {
  state = {
    resourses:{
      gold: 999
    },
    buildings:[],
    buildingOptions:[
      {
        type:"house",
        html:<i class="fas fa-home"></i>
      }
    ]
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Resourses
                resourses={this.state.resourses}
              />
            </div>
            <div className="col-12">
              <Map
                buildings={this.state.buildings}
              />
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{position: "absolute", bottom: "0"}}
        >
          <Constructions
            buildingOptions= {this.state.buildingOptions}
            OnAddConstruction={this.HandleAddConstruction}
          />
        </div>
      </>
    );
  }

  HandleAddConstruction = construcction =>{
    let newConstrucction={
      type: construcction.type,
      html:construcction.html,
      level: 1,
      id: Date.now()
    }
    const buildings = [...this.state.buildings, newConstrucction];
    this.setState({ buildings });
  }


}

export default App;