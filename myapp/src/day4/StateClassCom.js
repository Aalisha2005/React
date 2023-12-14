import React,{Component} from "react";
class StateClassCom extends Component{
    state={
        color:"Yellow",price:101
    }
    handleChange=()=>{
        this.setState(
            {
                color:"Red",price:200
            }
        )
    }
    render()
    {
        return(
            <div>
                <h2>The color selected is {this.state.color}.The price is {this.state.price}</h2>
                <button onClick={this.handleChange}>click me</button>
            </div>
        )
    }
}
export default StateClassCom;