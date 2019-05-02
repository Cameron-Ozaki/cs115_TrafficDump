import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import Maps from "./Maps";
import About from "./About";


class Main extends Component {
    render() {
        return (

            <HashRouter>
                <div>
                    <head>
                        <link rel="stylesheet"
                              href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

                        <script
                            src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

                        <link rel="stylesheet"
                              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                              crossorigin="anonymous"/>

                    </head>

                    <body>
                    <nav>
                        <div class="nav-wrapper">

                            <ul id="nav-mobile" class="left hide-on-med-and-down">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/maps">Maps</NavLink></li>
                                <li><NavLink to="#">Quick overview</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                            </ul>
                            <div className="content">
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/maps" component={Maps}/>
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
