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
      <body>

      <HashRouter>
        <div>
          <nav>
              <div class="vertical-menu">
                  <ul style={{liststyletype: "none", margin: "0", padding: "0"}} >
                      <li><NavLink to="/maps/selibrary">S&E Library</NavLink></li>
                      <li><NavLink to="/maps/mchenrylibrary">McHenry Library</NavLink></li>
                  </ul>

                  <div className="content">
                    <Route exact path="/maps/selibrary" component={Se_library}/>
                    <Route exact path="/maps/mchenrylibrary" component={Mc_library}/>
                  </div>
              </div>
          </nav>
        </div>
      </HashRouter>
      </body>


    );
  }
}

export default Main;
