import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail"

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author })
  }
  deSelectAuthor = author => {
    this.setState({ currentAuthor: null })
  }
  render() {
    return (
      <div id="app" className="container-fluid" >
        <div className="row">
          <div className="col-2">
            <Sidebar deSelectAuthor={this.deSelectAuthor} authors={authors} />
          </div>
          <div className="content col-10">
            {!this.state.currentAuthor ? (
              < AuthorList selectAuthor={this.selectAuthor} authors={authors} />
            ) : (
                < AuthorDetail author={this.state.currentAuthor} />
              )}
          </div>
        </div>
      </div>

    );






  }
}
export default App;
