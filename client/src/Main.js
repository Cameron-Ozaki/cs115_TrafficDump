import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home  from "./Home";
//import Maps  from "./Maps";
import About from "./About";
import Se_library  from "./Se_library";
import Mc_library  from "./Mc_library";

class Main extends Component {
  render() {
    const dropbtn = {backgroundcolor: "#4CAF50", color: "white", padding: "16px", fontsize: "16px", border: "none"};
    const dropdown = {position: "relative", display: "inline-block"};
    const dropdowncontent = {display: "none", position: "absolute", color: "black", backgroundcolor: "#f1f1f1",minwidth: "160px",boxshadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",  zindex: "1" };
    const ul = {liststyletype: "none", margin: "0", padding: "0"};
    const li ={display: "block", width: "60px", backgroundcolor: "#dddddd"};
    return (

        <HashRouter>
        <div>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

        </head>

        <body>
        <nav>
            <div class="nav-wrapper">

                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>
                        <div class={dropdown}>
                          <button class={dropbtn}>Maps</button>
                          <div class={dropdowncontent}>
                          <ul class={ul}>
                             <li class={li}><NavLink to="/maps/selibrary">S&E Library</NavLink></li>

                             <li class={li}><NavLink to="/maps/mchenrylibrary">McHenry Library</NavLink></li>
                          </ul>
                          </div>
                        </div>

                    </li>
                    <li><NavLink to="#">Quick overview</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <div className="content">
                  <Route exact path="/" component={Home}/>

                  <Route exact path="/maps/selibrary" component={Se_library}/>
                  <Route exact path="/maps/mchenrylibrary" component={Mc_library}/>

                  <Route path="/about" component={About}/>
                </div>
            </div>
        </nav>

        </body>

        <footer class="page-footer">
            <div class="footer-copyright">
                <div class="container">
                    © 2018 TrafficDump
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>


        </div>
        </HashRouter>
    );
  }
}

export default Main;
