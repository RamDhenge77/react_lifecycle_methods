import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log("Prev : " + prevProps.num);
        console.log("Currunt : " + this.props.num);

        if (prevProps.num !== this.props.num) {
            console.log("Component Updated");
        }
    }

    componentWillUnmount() {
        console.log("Component Removed");
    }

    render() {
        return (
            <div>
                <h2>Counter : {this.props.num}</h2>
            </div>
        )
    }
}
