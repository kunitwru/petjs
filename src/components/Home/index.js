import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : null
        }
    }
        componentDidMount() {
            fetch('http://api.fapps.site/api/categories')
                .then(response => response.json())
                .then(data => this.setState({ data }));
        }
      render() {

            return (
              <div>

              </div>
            )
      }
}
