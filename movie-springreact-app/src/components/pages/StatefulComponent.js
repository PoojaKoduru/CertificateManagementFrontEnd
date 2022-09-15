import React,{Component} from 'react'

class StatefulComponent extends Component{
    constructor(){
        super();
        this.state={
            name:"Ram",
            age:'32'
        }
    }

    render(){
        return(
            <div>
                <h2>StatefulComponent</h2>
                <h3>
                    <p>Name: {this.state.name}</p>
                    <p>Age: {this.state.age}</p>
                </h3>
            </div>
        )
    }
}
export default StatefulComponent;