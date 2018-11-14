import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Se_library  from "./Se_library";
import Mc_library  from "./Mc_library";

class Main extends Component {

  render() {

    return (
      <HashRouter>
        <div>
          <nav>
              <div class="nav-wrapper">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                   aria-controls="v-pills-profile" aria-selected="false"><NavLink to="/maps/selibrary">S&E Library</NavLink></a>

                   <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="./locations/selibrary/1" role="tab"
                      aria-controls="v-pills-messages" aria-selected="false"><NavLink to="/maps/mchenrylibrary">McHenry Library</NavLink></a>
                </div>

                  <div className="content">
                    <Route exact path="/selibrary" component={Se_library}/>
                    <Route exact path="/mchenrylibrary" component={Mc_library}/>
                  </div>
              </div>
          </nav>
        </div>
      </HashRouter>

    );
  }
}

export default Main;
