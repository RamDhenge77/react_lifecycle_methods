import React, { Component } from 'react'
import Counter from './Counter';

export default class Index extends Component {

    // to execute before render component
    constructor() {
        // to inherit all properties from parent class
        super();
        this.state = {
            count: 0
        }
    }

    // when compoennt render first time
    componentDidMount() {
        console.log("Component mounted");
    }

    increament() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <Counter num={this.state.count} />
                <button onClick={()=>{this.increament()}}>Click me</button>
            </div>
        )
    }
}
