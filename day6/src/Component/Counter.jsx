import { Component } from "react";

class Counter extends Component {
constructor (props){
    super (props)
        this.state={count:0}
}
    counter=()=>{
        this.setState({count: this.state.count+1})
    }
    counter2=()=>{
        this.setState({count: this.state.count-1})
    }
    countreset=()=>{
        this.setState({count: 0})
    }
    render(){
        return(
        <div>
            <h1>Counter</h1>
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.counter}>Increment</button>
            <button type="button" onClick={this.counter2}>Decrement</button>
            <button type="button" onClick={this.countreset}>Reset</button>
        </div>
        )
    }
}

export default Counter;