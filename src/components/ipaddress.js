// npm install node-fetch --save

import React from 'react';
import fetch from 'node-fetch';

class App extends React.Component {
constructor() {
super();

this.state = {
data: []
}

this.setStateHandler = this.setStateHandler.bind(this);
};

setStateHandler() {

fetch('http://freegeoip.net/json/')
   .then(res => res.json())
   .then(json => this.setState({data: json.country_name}))

};

render() {
return (
<div>
<button onClick = {this.setStateHandler}>Click</button>
<h2>{this.state.data}</h2>
</div>
);
}
}

export default App;