import React, { Component } from "react";

class Main extends Component {
  render_se_lower() {
    return (
      <div>
          <ul class="pagination">
              <li class="waves-effect"><a href="./2"><i class="material-icons">chevron_left</i></a></li>
              <li class="waves-effect"><a href="#!">1</a></li>
              <li class="waves-effect"><a href="./2">2</a></li>
              <li class="active"><a href="#!">3</a></li>
              <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
          </ul>
      </div>
    );

  }
  render() {
    const selower = this.render_se_lower();
    return (

<div class="row">
    <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">

            <div class="collection">
                <a href={selower} class="collection-item">S&E Library</a>
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

    );
  }
}

export default Main;
