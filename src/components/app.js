import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
    		    <input className="btn btn-primary" type="submit" value="Clique AQUI" onClick={() => {alert("Mas porque você clicou aqui seu retardado?");}}/>
    	    </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}