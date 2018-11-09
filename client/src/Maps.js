import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Maps from './Maps'; 
class Main extends Component {
  render() {
    return (


        <nav>
            <div class="nav-wrapper">

                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><NavLink to="/maps/s_e_library_lower">All Locations</NavLink></li>
                    <li><NavLink to="maps">Quick overview</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <div className="content">
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/maps" component={Maps}/>
                  <Route path="/about" component={About}/>
                </div>
            </div>
        </nav>

<div class="row" style="
    padding-top: 25px;">
    <div class=" col-3" style="
    padding-right: 12px;">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
               aria-controls="v-pills-profile" aria-selected="false">All Locations</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="./locations/selibrary/1" role="tab"
               aria-controls="v-pills-messages" aria-selected="false">S&E Library</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
               aria-controls="v-pills-messages" aria-selected="false">McHenry Library</a>
        </div>
    </div>
    <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">

            <div class="collection">
                <a href="./locations/selibrary/1" class="collection-item">S&E Library</a>
                <a href="#!" class="collection-item">Other Location</a>
                <a href="#!" class="collection-item">Other Location</a>
                <a href="#!" class="collection-item">Other Location</a>
            </div>

        </div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...
        </div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            ...
        </div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            ...
        </div>
    </div>
</div>
</div>

    );
  }
}

export default Main;
