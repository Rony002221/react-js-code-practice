//import React from 'react'
import React,{Component} from 'react'


class Xyz extends Component
{
    constructor()
    {
        super();
        this.state = {
            name : 'Hablu',
            age : '27'
        }
    }

    changeName(x) {
    
        this.setState({name: x}); 

    }
    

    render()
    {
        return (
            <div>
            <h1>MHR {this.state.name}</h1>
            <br />
            <button onClick = {this.changeName.bind(this,"Rony")}>Change Name</button>
        </div>
        );
    }
}


export default Xyz;