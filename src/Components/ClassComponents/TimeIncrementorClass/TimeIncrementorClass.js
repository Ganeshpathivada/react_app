import React, { Component } from 'react'

class TimeIncrementorcCass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("unmount is done")
    }
    tick = () => {
        this.setState({
            count: this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
               <h1> {this.state.count}</h1>
            </div>
        )
    }
}

export default TimeIncrementorcCass
