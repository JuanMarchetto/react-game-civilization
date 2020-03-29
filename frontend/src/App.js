import React, { useState, useEffect } from "react";
import Map from "./components/map";
import Resourses from "./components/resourses";
import Constructions from "./components/constructions";
import axios from "axios";
import Login from "./components/login";
const baseURL = "http://localhost:5000/";

const App = () => {
  const [user, setUser] = useState(null);

  return user ? (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Resourses resourses={this.state.resourses} />
          </div>
          <div className="col-12">
            <Map buildings={this.state.buildings} />
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ position: "absolute", bottom: "0" }}
      >
        <Constructions
          buildingOptions={this.state.buildingOptions}
          OnAddConstruction={this.HandleAddConstruction}
        />
      </div>
    </>
  ) : (
    <Login />
  );
};

export default App;
/* .post(baseURL + "users/add", { username: "Juan" })
.get(baseURL + "users")
.then(res => console.log(res.data));*/
