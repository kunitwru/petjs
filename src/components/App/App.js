import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom'
import HeaderLayout from "../Layout/HeaderLayout";
import FooterLayout from "../Layout/FooterLayout";
import ContentLayout from "../Layout/ContentLayout";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="body">
                <HeaderLayout/>
                <div className="container">
                    <ContentLayout/>
                </div>
                <FooterLayout/>
            </div>
        </Router>
    );
  }
}

export default App;
