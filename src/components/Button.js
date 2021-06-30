import React from 'react';
import countapi from 'countapi-js';

export default class Button extends React.Component {
  constructor() {
    super() 
    this.state = {
        hits:0,
        show: false
    }

    this.showHits = this.showHits.bind(this)
  }
  
   showHits() {
    countapi.hit('1ccb732e-b55a-4404-ad3f-0f99c02fe44e').then((result) => {
      this.setState({
          hits: result.value,
          show: true
      })
    });
  }

  render() {
    return (
      <div>
        <button onClick = {this.showHits}>Show Number of Hits</button>
      <div>
          {this.state.show? <h1>{this.state.hits}</h1> : null}
      </div>
      </div>
    )
  } 
}